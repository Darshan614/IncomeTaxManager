const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	Taxdetails:{
        BasicSalary:{type:Number,required:true},
        LTA:{type:Number,required:true},
        HRA:{type:Number,required:true},
        FA:{type:Number,required:true},
        Investment:{type:Number,required:true},
        Rent:{type:Number,required:true},
        CityType:{type:String,required:true},
        MediclaimPremium:{type:Number,required:true},
        ApplicableHRA:{type:Number,required:true}
    },
    TaxableIncome:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('User',userSchema);