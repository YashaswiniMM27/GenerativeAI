import React, { useEffect, useRef, useState } from 'react'
import '../Dashboard/Dashboard.css'

function Dashboard() {

    const [value, setValue] = useState('');
    const [height, setHeight] = useState('auto');
    const textareaRef = useRef(null);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);

        setHeight('auto');
        
        const newHeight = textareaRef.current.scrollHeight;
        const maxHeight = 120;
        setHeight(newHeight > maxHeight ? `${maxHeight}px` : `${newHeight}px`);
    };

    useEffect(() => {
        if (!value) {
        setHeight('auto');
        }
    }, [value]);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='dashboard'>
            <div className="text">
                <img src="/assets/favicon.webp" alt="logo" />
                <span>GEN-AI</span>
            </div>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <textarea
                        ref={textareaRef}
                        value={value}
                        onChange={handleChange}
                        placeholder='Ask me anything...'
                        rows={1}
                        style={{ height: height, overflowY: value.length > 0 ? 'auto' : 'hidden',  minHeight: '20px',}}
                        />
                    <button type="submit">
                        <img src="/assets/icons8-arrow-up-30 (1).png" alt="send" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Dashboard