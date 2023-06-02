import { mongoose } from "mongoose";

const connectDB = async(DATABASE_URL)=>{
    mongoose.connect(DATABASE_URL,{
    // useNewUrlParser: true, 
    // useUnifiedTopology: true,
    family: 4,
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));
}
export default connectDB;
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/crudoperations',{
//     // useNewUrlParser: true, 
//     // useUnifiedTopology: true,
//     family: 4,
// })
// .then(db => console.log('DB is connected'))
// .catch(err => console.log(err));
// connectToMongo();

// const mongoose =require('mongoose');
// const mongoURI ="mongodb://localhost:27017/anwaar";

// const connectToMongo=()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("connected to mongo successfully");
//     })
// }
// module.exports = connectToMongo;

// const connectDB = async (DATABASE_URL) => {
//   try {
//     const conn = await mongoose.connect(DATABASE_URL, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex: true,
//     })

//     console.log(`MongoDB Connected: `)
//   } catch (error) {
//     console.error(`Error: ${error.message}`)
//     process.exit(1)
//   }
// }

// module.exports =connectDB; 

// import mongoose from 'mongoose';

// const connectDB = async(DATABASE_URL)=>{
//     try {
//         const DB_OPTIONS = {
//             dBName:'school'
//         }
//         await mongoose.connect(DATABASE_URL,DB_OPTIONS,{
//             // useUnifiedTopology: true,
//             useUnifiedTopology: true,
//          useNewUrlParser: true,
//          useCreateIndex: true,
//             family: 4,});
//         console.log('coneccted successfully');
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// export default connectDB;
// module.exports default = connectDB;