import React from "react";

function BoxColor (props) { 
    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        height: 80,
      };  
    return(
        <div style={divStyle}>
       rgb({props.r}, {props.g}, {props.b})
</div>
);
    
}

export default BoxColor