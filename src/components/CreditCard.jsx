import React from "react";
import visa from '../assets/images/visa.png'
import masterCard from '../assets/images/master-card.svg'

function CreditCard (props) {
    const replacer = '*'
    const n = 16   

    const divStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`,
        width: 250,
        height: 150
    }

    const bankLogo = {
        width: 40,
    }

    return(
        <div className='creditCardContainer'>
    <div className='creditCard' style={divStyle}>
       <p>{props.type === 'Visa' && <img style={bankLogo} src={visa} alt="Visa"/>}</p>
       <p>{props.type === 'Master Card' && <img style={bankLogo} src={masterCard} alt="MasterCard"/>}</p> 
       <p>{replacer.repeat(4) + ' ' + replacer.repeat(4) + ' ' + replacer.repeat(4) + ' ' + props.number.slice(12, n)}</p>
       <p>{props.expirationMonth}/{props.expirationYear}</p>
       <p>{props.bank}</p>
       <p>{props.owner}</p>
    </div>
</div>
);
    
}

export default CreditCard