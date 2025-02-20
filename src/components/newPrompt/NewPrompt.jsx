import React, { useRef, useState } from 'react'
import '../newPrompt/NewPrompt.css'

function NewPrompt() {

        const [value, setValue] = useState('');
            const [height, setHeight] = useState('auto');
            const textareaRef = useRef(null);
        
            const handleChange = (event) => {
                const newValue = event.target.value;
                setValue(newValue);
        
                setHeight('auto');
                
                if (newValue.trim() === '') {
                    setHeight('20px');
                } else {
                    const newHeight = textareaRef.current.scrollHeight;
                    const maxHeight = 120;
                    setHeight(newHeight > maxHeight ? `${maxHeight}px` : `${newHeight}px`);
                }
            };

            const handleSubmit = (event) => {
                event.preventDefault();
            }
        
    

    return (
        <div className='newPrompt'>
            <div className="endChat"></div>
            <form className="newForm">
                    <label htmlFor="file">
                        <img className='attach' src="/assets/attach.png" alt="attach" />
                    </label>
                    <input id='file' type="file" multiple={false} hidden />
                    <textarea className='prompt'
                        ref={textareaRef}
                        value={value}
                        onChange={handleChange}
                        placeholder='Ask me anything...'
                        rows={1}
                        style={{ height: height, overflowY: value.length > 0 ? 'auto' : 'hidden',  minHeight: '20px',}}
                        />
                    <button className='send'>
                        <img src="/assets/send.png" alt="send" />
                    </button>
            </form>
        </div>
    )
}

export default NewPrompt