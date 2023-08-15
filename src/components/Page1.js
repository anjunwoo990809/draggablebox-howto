import React from 'react';
import '../App.css';

function Page1({resizableLeftWidth}) {
    return (
        <div
        style={{ width: `${resizableLeftWidth}%`, backgroundColor: 'azure' }}
        className="ResizableBlock"
        ></div>
    );
}

export default Page1;