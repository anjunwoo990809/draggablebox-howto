import React from 'react';
import '../App.css';

export default function Page2({resizableLeftWidth, children}) {
    return (
        <div
        style={{ width: `${100 - resizableLeftWidth}%`}}
        className="ResizableBlock"
        >
            {children}
        </div>
    );
};
