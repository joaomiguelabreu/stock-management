import React, { useEffect, useRef, useState } from 'react';

const DropDown = ({ buttonContent, dropdownContent, css }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentBox = useRef();

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (contentBox.current && !contentBox.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={contentBox} className={`flex flex-col relative inline-block ${css}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                {buttonContent}
            </button>
            {isOpen && (
                <div>{dropdownContent}</div>
            )}
        </div>
    );
};

export default DropDown;
