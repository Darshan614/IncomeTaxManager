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
        BasicSalary:{type:Number},
        LTA:{type:Number},
        HRA:{type:Number},
        FA:{type:Number},
        Investment:{type:Number},
        Rent:{type:Number},
        CityType:{type:String},
        MediclaimPremium:{type:Number},
        ApplicableHRA:{type:Number}
    },
    TaxableIncome:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('User',userSchema);