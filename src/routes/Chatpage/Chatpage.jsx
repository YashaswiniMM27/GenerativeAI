import React, { useEffect, useRef } from 'react'
import '../Chatpage/Chatpage.css'

function Chatpage() {

    const endRef = useRef(null)

    useEffect(() => {
        if (endRef.current) {
            endRef.current.scrollTo({
                top: endRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, []);
    
    return (
        <div className='chatPage'>
            <div className="wrapper">
                <div className="chat" ref={endRef}>
                    <div className="message user">Test Message from user Test Message from user Test Message from user Test Message from user Test Message from user Test Message from user</div>
                    <div className="message">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message">Test Message from ai</div>
                    <div className="message user">Test Message from user</div>
                    <div className="message">Test Message from ai</div>
                </div>
            </div>
        </div>
    )
}

export default Chatpage