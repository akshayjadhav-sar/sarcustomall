const mongoose =  require ('mongoose')

const { Schema } = mongoose.Schema;
 const{freeSchema}=new Schema({
   
    name:{
        type :String,
        require:true,

    },
    eamil:{
        type : String,
        unique:true,
        require:true,
    },
    phone:{
        type:Number,
        require :true
    }
});
