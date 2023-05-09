import React from "react";

function IdCard ({picture, firstName, lastName, gender, height, birth}) {
    return(
        <div className='IdCard'>
      <img src={picture} alt={firstName} />
      <div className='IdCardInfo'>
        <p><strong>First Name: </strong>{firstName}</p>
        <p><strong>Last Name: </strong>{lastName}</p>
        <p><strong>Gender: </strong>{gender}</p>
        <p><strong>Height: </strong>{height/100}m</p>
        <p><strong>Birth: </strong>{birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;