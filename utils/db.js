import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URI);
        await mongoose.connect('mongodb+srv://mahesh:mahesh12@cluster0.9g80yjd.mongodb.net/data?retryWrites=true&w=majority')
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;