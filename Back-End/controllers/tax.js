const Tax = require('../models/tax');
const User = require('../models/user');

exports.posttaxableincome = (req,res,next) => {
    const basicsalary = req.body.salarydetail.Basic;
    const lta = req.body.salarydetail.LTA;
    const hra = req.body.salarydetail.HRA;
    const fa = req.body.salarydetail.FA;
    const inv = req.body.salarydetail.INV;
    const city = req.body.salarydetail.city;
    const rent = req.body.salarydetail.Rent;
    const medpremium = req.body.salarydetail.Med;
    const ahra = req.body.salarydetail.AHRA;
    const email = req.body.email;
    console.log('email from income',email);
    const TaxableIncome = (parseInt(basicsalary) + parseInt(lta) + parseInt(hra) + parseInt(fa))-parseInt(ahra)-parseInt(inv)-parseInt(medpremium);//(Bas + LTA + HRA + FA) - AppHRA - Inv - Med
    const TaxData = new Tax({
        Taxdetails:{
            BasicSalary:parseInt(basicsalary),
            LTA:parseInt(lta),
            HRA:parseInt(hra),
            FA:parseInt(fa),
            Investment:parseInt(inv),
            Rent:parseInt(rent),
            CityType:city,
            MediclaimPremium:parseInt(medpremium),
            ApplicableHRA:parseInt(ahra)
        },
        TaxableIncome:TaxableIncome
    })
    console.log(parseInt(basicsalary));

    User.findOne({email:email})
    .then(user=>{
        user.Taxdetails={
            BasicSalary:parseInt(basicsalary),
            LTA:parseInt(lta),
            HRA:parseInt(hra),
            FA:parseInt(fa),
            Investment:parseInt(inv),
            Rent:parseInt(rent),
            CityType:city,
            MediclaimPremium:parseInt(medpremium),
            ApplicableHRA:parseInt(ahra)
        };
        user.TaxableIncome=TaxableIncome
        user.save()
        .then((result)=>{
        return res.status(200).send({TaxableIncome:TaxableIncome})
    })
    })

    //const updatedUser = new User({
    //     Taxdetails:{
    //         BasicSalary:parseInt(basicsalary),
    //         LTA:parseInt(lta),
    //         HRA:parseInt(hra),
    //         FA:parseInt(fa),
    //         Investment:parseInt(inv),
    //         Rent:parseInt(rent),
    //         CityType:city,
    //         MediclaimPremium:parseInt(medpremium),
    //         ApplicableHRA:parseInt(ahra)
    //     },
    //     TaxableIncome:TaxableIncome
    // })

} 