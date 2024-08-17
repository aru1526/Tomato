import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
    const url = "http://localhost:4000";
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', Number(data.price));
        formData.append('category', data.category);
        formData.append('image', image);
        try {
            const response = await axios.post(`${url}/api/food/add`, formData);
            if (response.data.success) {
                alert("Food added successfully");
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "Salad",
                });
                setImage(false);
                toast.success(response.data.message)
            } else {
                alert("Failed to add food");
            }
        } catch (error) {
            console.error("There was an error adding the food!", error);
        }
    };

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
                <p>Upload Image</p>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" name="file" accept="image/*" hidden required/>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
            </div>
                    <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input 
                        onChange={onChangeHandler} 
                        value={data.name} 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter product name" 
                        required 
                    />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea 
                        onChange={onChangeHandler} 
                        value={data.description} 
                        name="description" 
                        id="description" 
                        rows="6" 
                        placeholder="Enter product description" 
                        required 
                    />
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Category</p>
                        <select onChange={onChangeHandler} name="category" id="category" value={data.category}>
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Sandwiches">Sandwiches</option>
                            <option value="Cake">Cake</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Pure">Pure</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Price</p>
                        <div>
                            <select name="Currency" id="Currency">
                                <option value="IND">₹</option>
                                <option value="USD">$</option>
                                <option value="EUR">€</option>
                            </select>
                            <input 
                                onChange={onChangeHandler} 
                                value={data.price} 
                                type="number" 
                                id="price" 
                                name="price" 
                                placeholder="Enter price" 
                                required 
                            />
                        </div>
                    </div>
                </div>
                <button type='submit' className='add-btn'>Add</button>
            </form>
        </div>
    );
};

export default Add;
