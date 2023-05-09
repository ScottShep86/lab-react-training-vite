import React from "react";

function Greetings (props) {
    const lang = {
        de: 'Hallo',
        en: 'Hello',
        fr: 'Bonjour'
    }
    return(
        <div>
        <p>
            {lang[props.lang]} {props.children}
        </p>
        </div>
);
    
}

export default Greetings