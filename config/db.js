const mongoose=require('mongoose');

const connectDB=async ()=>{
    const conn=await mongoose.connect('mongodb+srv://hari:hari@mcdonalds.voov5.mongodb.net/mcdonalds?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
    console.log(`mongoDB connected: ${conn.connection.host}`)


}
module.exports=connectDB;