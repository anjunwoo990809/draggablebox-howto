import React from 'react';
import "./App.css";

function DragBar({ startDrag }) {
    return (
        <div
            onMouseDown={startDrag}
            className="Draggable"
            ></div>
    );
    }

export default DragBar;
