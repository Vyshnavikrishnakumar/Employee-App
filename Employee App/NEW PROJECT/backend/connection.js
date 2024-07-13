var mongoose=require('mongoose')
mongoose.connect("mongodb+srv://user:1234@cluster0.hvd8hmq.mongodb.net/Employee1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("connected to db")})
.catch((err)=>{'error'});