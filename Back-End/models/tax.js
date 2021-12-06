const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taxSchema = new Schema({
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

module.exports = mongoose.model('Tax',taxSchema);