import Taxform from '../components/Tax/Taxform';
import { useNavigate } from 'react-router-dom';
import { useState, Fragment } from 'react';
import DataPage from '../components/Tax/DataPage';

function Tax(){
    const [showdata, setshowdata] = useState(false);
    const [detail,setdetail] = useState({});
    const taxcalculator = (basic,lta,hra,fa,inv,rent,city,med,applicableHRA) => {
        const detail = {
            Basic:basic,
            LTA:lta,
            HRA:hra,
            FA:fa,
            INV:inv,
            Rent:rent,
            city:city,
            Med:med,
            AHRA:applicableHRA
        }
        const email = localStorage.getItem('email');
        console.log('detail',detail);
        fetch("http://localhost:8080/taxableincome", {
      method: "POST",
      body: JSON.stringify({
        salarydetail: detail,
        email:email,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
          console.log('data',data)
          setshowdata(true);
          setdetail({...detail,TaxableIncome:data.TaxableIncome});
      });
    }

    return(
      <Fragment>
        {!showdata &&<Taxform gettaxableincome={taxcalculator}></Taxform>}
        {showdata && <DataPage detail={detail}></DataPage>}
        </Fragment>
    )
}

export default Tax;