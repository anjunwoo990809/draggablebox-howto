import React from 'react';
import '../App.css';

export default function Page1({resizableLeftWidth, children}) {
    return (
        <div
        style={{ width: `${resizableLeftWidth}%`}}
        className="ResizableBlock"
        >
            {children}
        </div>
    );
};