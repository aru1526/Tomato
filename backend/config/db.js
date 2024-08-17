import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Aranya_Smrity:Aranya26@cluster0.e5s6gwj.mongodb.net/food').then(
            () => console.log('MongoDB Connected')

        );
       
    } catch (error) {
        console.error("DB Connection Error:", error);
    }
};
