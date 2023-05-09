import React from "react";

function DriverCard ({name, img, car, rating}) {    
    const divStyleCard = {
        backgroundColor: '#425cbb',
        height: 300,
    };
    const divStyleImg = {
        borderRadius: 500,
        width: 100,
    };
    const ratingDriver = {
        0: '☆☆☆☆☆',
        1: '★☆☆☆☆',
        2: '★★☆☆☆',
        3: '★★★☆☆',
        4: '★★★★☆',
        5: '★★★★★' 
    };

    return(
        <div style={divStyleCard} className='DriverCard'>
        <img style={divStyleImg} src={img} alt={name} />
        <h3>{name}</h3>
        <p>{ratingDriver[Math.round(rating)]}</p>   
        <p>{car.model} - {car.licensePlate}</p>       
</div>
);
    
}

export default DriverCard