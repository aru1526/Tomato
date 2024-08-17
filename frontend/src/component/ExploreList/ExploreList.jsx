import React from 'react';
import './ExploreList.css';
import { menu_list } from '../../assets/assets';

const ExploreList = ({category,setCategory}) => {
  return (
    <div className='explore-more' id='explore-more'>
        <h1>Explore our online store</h1>
        <p className='explore-more-text'>Discover fresh finds, pantry staples, and gourmet treasures. Elevate your shopping experience today!</p>
        <div className='explore-more-list'>
            {menu_list.map((item, index) => {
                return (
                    <div onClick={()=> setCategory(prev=>prev === item.menu_name?"All":item.menu_name)} key={index} className='explore-more-list-item'>
                        <img className={category === item.menu_name? "active" : " "} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                );
            })}
        </div>
        <hr />
    </div>
  );
};

export default ExploreList;
