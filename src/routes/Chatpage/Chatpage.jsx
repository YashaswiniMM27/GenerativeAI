import React, { useEffect, useRef } from 'react'
import '../Chatpage/Chatpage.css'

function Chatpage() {

    const endRef = useRef(null)

    useEffect(() => {
        endRef.current.scrollIntoView()
    }, [])

    return (
        <div className='chatPage'>
            <div className="wrapper">
                <div className="chat">
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
                    <div ref={endRef}></div>
                </div>
            </div>
        </div>
    )
}

export default Chatpage