import React, { useState, useRef } from 'react';
import DragBox from './components/DragBox';
import './App.css';

function App() {
    const [isDragging, setIsDragging] = useState(false);
    const [resizableLeftWidth, setResizableLeftWidth] = useState(50);
    const blockRef = useRef(null);

    return (
        <DragBox
            isDragging={isDragging}
            setIsDragging={setIsDragging}
            resizableLeftWidth={resizableLeftWidth}
            setResizableLeftWidth={setResizableLeftWidth}
            blockRef={blockRef}
        />
    );
}

export default App;