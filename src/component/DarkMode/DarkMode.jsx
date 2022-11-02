import React, {useState} from "react";

export const DarkMode = () => {
    const [isLightThem, setLightThem] = useState(true);

    return <div className="darkModeWrapper" style={isLightThem ? {backgroundColor: "white"} : {backgroundColor: 'black'}}>
        <button className="DMbutton dark" disabled={!isLightThem} onClick={() => setLightThem(false)}>Dark Mode</button>
        <button className="DMbutton light" disabled={isLightThem} onClick={() => setLightThem(true)}>Light Mode</button>
    </div>
}