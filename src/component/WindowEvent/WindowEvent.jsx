import React, { useEffect, useState } from "react";

const WindowEvent = () => {
    const [toggleEvent, setToggleEvent] = useState(false);
    console.log(toggleEvent);
    useEffect(() => {
        const doubleClick = () => alert('mouse pressed');
        if(toggleEvent) {
            window.addEventListener('dblclick', doubleClick);
        }

        return () => window.removeEventListener('dblclick', doubleClick);
    })
    return (
        <div className="windowEventWrapper">
            <button onClick={() => setToggleEvent(!toggleEvent)}>Window Event active</button>
            {toggleEvent && <h2>Window event is active</h2>}
        </div>
    )
}

export default WindowEvent;