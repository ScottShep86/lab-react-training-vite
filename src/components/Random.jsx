import React from "react";

function Random (props) {
    return(
        <div>
       <p>
       Random value between {props.min} and {props.max} is {' '}
       {Math.floor(Math.random() * (props.max - props.min) + props.min)}
</p>
</div>
);
    
}

export default Random