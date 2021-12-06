import classes from './DataPage.module.css';
import { useNavigate } from 'react-router-dom';

function DataPage(props){
    const navigate = useNavigate();
  const backtotax = (event) => {
    event.preventDefault();
    navigate('/');
  }
    return (
        <div className={classes.datapage}><h3>Your Income and Tax Data</h3>
        <div>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </div>
         <table>
            <tr className={classes.entry}>
                <td>Basic Salary : </td>
                <td>{props.detail.Basic}</td>
            </tr>
            <hr></hr>
            <tr className={classes.entry}>
                <td>Leave Travel Allowance : </td>
                <td>{props.detail.LTA}</td>
            </tr>
            <hr></hr>
            <tr className={classes.entry}>
                <td>House Rent Allowance : </td>
                <td>{props.detail.HRA}</td>
            </tr>
            <hr></hr>
            <tr className={classes.entry}>
                <td>Food Allowance : </td>
                <td>{props.detail.FA}</td>
            </tr>
            <hr></hr>
            <tr className={classes.entry}>
                <td>Invested : </td>
                <td>{props.detail.INV}</td>
            </tr>
            <hr></hr>
            <tr className={classes.entry}>
                <td>Rent : </td>
                <td>{props.detail.Rent}</td>
            </tr>
            <hr></hr>
            <tr className={classes.entry}>
                <td>City Type : </td>
                <td>{props.detail.city}</td>
            </tr>
            <hr></hr>
            <tr className={classes.entry}>
                <td>Mediclaim Policy Premium : </td>
                <td>{props.detail.Med}</td>
            </tr>
            <hr></hr>
            <tr className={classes.entry}>
                <td>Applicable HRA : </td>
                <td>{props.detail.AHRA}</td>
            </tr>
            <hr></hr>
            <tr className={classes.entry}>
                <td>Taxable Income : </td>
                <td>{props.detail.TaxableIncome}</td>
            </tr>
            <hr></hr>
        </table>
        <button class="btn btn-warning" onClick={backtotax}>Home</button>
   </div>

    )
}

export default DataPage