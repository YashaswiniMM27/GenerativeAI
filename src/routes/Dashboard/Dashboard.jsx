import React, { useEffect, useRef, useState } from 'react'
import '../Dashboard/Dashboard.css'
import NewPrompt from '../../components/newPrompt/NewPrompt';

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
            <div className="title">
                <img src="/assets/favicon.webp" alt="logo" />
                <span>GEN-AI</span>
            </div>
            <NewPrompt/>
        </div>
    )
}

export default Dashboard