import React from "react";



const Color = ({handleClick, name, hex}) => {
    return <div style={{ 
    'backgroundColor': hex, 
    'width': '200px', 
    'padding': '15px', 
    'textAlign': 'center', 
    'height': '50px', 
    'boxSizing': 'border-box', 
    'margin': '20px'}}
    onClick={handleClick}>
        {name}
    </div>
}   

export default Color;