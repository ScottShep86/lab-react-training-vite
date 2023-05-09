import React from "react";

function Rating (props) { 
    const rating = {
        0: '☆☆☆☆☆',
        1: '★☆☆☆☆',
        2: '★★☆☆☆',
        3: '★★★☆☆',
        4: '★★★★☆',
        5: '★★★★★' 
    }   
    return(
        <div>
     {rating[Math.round(props.children)]}  
</div>
);
    
}

export default Rating