import React from 'react'
import { Link } from 'react-router-dom'
import '../ChatList/ChatList.css'

function Chatlist() {
    return (
        <div className='chatList'>
            <span className='title'>DASHBOARD</span>
            <span className='menu'>MENU</span>
            <Link className='options' to="/dashboard"> <img src="/assets/chat.png" alt="chat" />Create</Link>
            <Link className='options' to="/dashboard"><img src="/assets/explore.png" alt="explore" />Explore</Link>
        <hr />
        <span className='recentChats'>RECENT CHATS</span>
            <div className="list">
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
                <Link to="/">My chat list</Link>
            </div>
        <hr />
        </div>
    )
    }

export default Chatlist