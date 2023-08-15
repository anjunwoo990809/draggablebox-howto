import React, { useEffect } from 'react';
import '../App.css';
import DragBar from './DragBar';

// resizableLeftWidth
function DragBox({ isDragging, setIsDragging, setResizableLeftWidth, blockRef, children }) {
    
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

    const childrenWithDragBars = [];
    React.Children.forEach(children, (child, index) => {
        childrenWithDragBars.push(child);
        if (index < children.length - 1) {
            childrenWithDragBars.push(<DragBar startDrag={startDrag} />);
        };
    });

    return (
        <div className="app">
            <div className="Block" ref={blockRef}>
                {childrenWithDragBars}
            </div>
        </div>
    );
}

export default DragBox;