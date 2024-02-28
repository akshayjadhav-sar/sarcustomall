const mongoose =  require ('mongoose')

const { Schema } = mongoose.Schema;
const {contactSchema}=new Schema({

    name:{
        type :String,
        require:true,

    },
    eamil:{
        type : String,
        unique:true,
        require:true,
    },
    subject :{
        type:String,
        require :true,
    },
    YourMessage :{
        type: String,
        require:true,
    }
    
});
// const {regiSchema}=new Schema({

//     name:{
//         type :String,
//         require:true,

//     },
//     eamil:{
//         type : String,
//         unique:true,
//         require:true,
//     },
//     subject :{
//         type:String,
//         require :true,
//     },
    
// });
