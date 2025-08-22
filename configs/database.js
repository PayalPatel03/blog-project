const { default: mongoose } = require("mongoose")

const db=async()=>{
    try {
        await mongoose.connect('mongodb+srv://p6579113:12345@cluster0.zlavh0m.mongodb.net/blog_project');
        console.log("database connected");
        
    } catch (error) {
        console.log(error.message);
    }

}

module.exports=db();