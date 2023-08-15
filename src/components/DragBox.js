import React, { useEffect } from 'react';
import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';
import DragBar from './DragBar';

function DragBox({ isDragging, setIsDragging, resizableLeftWidth, setResizableLeftWidth, blockRef }) {
    
    const startDrag = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const makeDrag = (event) => {
        if (isDragging && blockRef.current) {
            event.preventDefault();
            const blockRect = blockRef.current.getBoundingClientRect();
            const newResizableLeftWidth = ((event.clientX - blockRect.left) / blockRect.width) * 100;
            setResizableLeftWidth(newResizableLeftWidth);
        }
    };

    const stopDrag = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', makeDrag);
            window.addEventListener('mouseup', stopDrag);
        }

        return () => {
            window.removeEventListener('mousemove', makeDrag);
            window.removeEventListener('mouseup', stopDrag);
        };
    });

    return (
        <div className="app">
            <div className="Block" ref={blockRef}>
                <Page1 resizableLeftWidth={resizableLeftWidth}/>
                <DragBar startDrag={startDrag}/>
                <Page2 resizableLeftWidth={resizableLeftWidth}/>
            </div>
        </div>
    );
}

export default DragBox;