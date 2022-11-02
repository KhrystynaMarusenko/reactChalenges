import React, {useState} from "react";
import Color from "./Color";

export const colorArray = [
    {'name': 'red', 'hex': '#FF0000'},
    {'name': 'green', 'hex': '#00FF00'},
    {'name': 'blue', 'hex': '#0000FF'},
    {'name': 'pink', 'hex': '#FFC0CB'},
    {'name': 'yellow', 'hex': '#FFFF00'},
    {'name': 'orange', 'hex': '#FFA500'},
    {'name': 'purple', 'hex': '#A020F0'},
]

const ColorRender = () => {
    const [color, setColor] = useState('white');

    const handleOnClick  = (e) => {
        const colorHex = colorArray.filter(color => color.name === e.target.innerText)[0];
        setColor(colorHex.hex);
    }

    return <div style={{
    'width': '1000px', 
    'display': 'flex', 
    'justifyContent':'space-between', 
    'alignItems': 'center', 
    'height': '300px', 
    'flexWrap': 'wrap',
    'backgroundColor': color
    }}>
        {colorArray.map(item => <Color key={`${item.name}-${item.hex}`} handleClick={handleOnClick} {...item}/>)
    }</div>
}

export default ColorRender;