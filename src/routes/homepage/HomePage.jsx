import React from 'react'
import '../Homepage/Homepage.css'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="homepageSection">
      <div className='homepage'>
        <div className="left">
          <h1>GEN AI</h1>
          <h2>Supercharge your creativity and productivity.</h2>
          <h3>A cutting-edge generative AI tool designed to bring your creative ideas to life effortlessly.</h3>
          <Link to="/dashboard">
            <button>Get Started</button>
          </Link>
        </div>
        <div className="right">
            <img src="/assets/HomepageAnimation.gif" alt="Homepage Animation" />
        </div>
      </div>
      <img className='termsLogo' src="/assets/favicon.webp" alt="Logo" />
      <div className="termLinks">
        <Link to="/">Terms of services</Link>
        <span>|</span>
        <Link to="/">Privacy Policy</Link>
      </div>
    </div>
  )
}

export default HomePage