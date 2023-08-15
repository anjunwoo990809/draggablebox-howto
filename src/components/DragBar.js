import React from 'react';
import "../App.css";

export default function DragBar({ startDrag }) {
    return (
        <div
            onMouseDown={startDrag}
            className="Draggable"
            ></div>
    );
};