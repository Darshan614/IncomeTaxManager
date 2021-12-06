const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taxSchema = new Schema({
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

module.exports = mongoose.model('Tax',taxSchema);