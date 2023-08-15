import React from 'react';
import '../App.css';

function Page2({resizableLeftWidth}) {
    return (
        <div
        style={{ width: `${100 - resizableLeftWidth}%`, backgroundColor: 'blue' }}
        className="ResizableBlock"
        ></div>
    );
}

export default Page2;
