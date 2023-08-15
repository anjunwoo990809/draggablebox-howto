import React, { useState, useRef } from 'react';
import DragBox from './components/DragBox';
import './App.css';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

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
        >
            <Page1 resizableLeftWidth={resizableLeftWidth}>
                <div className='item1'>
                    page1
                </div>
            </Page1>
            <Page2 resizableLeftWidth={resizableLeftWidth}>
                <div className='item2'>
                    page2
                </div>
            </Page2>
            {/* <Page3 resizableLeftWidth={resizableLeftWidth}/> */}
        </DragBox>
    );
}

export default App;