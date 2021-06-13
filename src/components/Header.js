import React from "react"
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Header() {
  return (
    <Router>
        <header className="Brand-header">
            <div className="primary-nav">
                <div className="primary-wrapper">
                    <ul> 
                        <li><Link to="/"><figure><img src="./assets/login.png" alt="Login" title="Login/Signup" className="Login" /></figure> Login/Signup</Link></li>
                        <li><Link to="/"> Language: English<figure><img src="./assets/carrot.png" alt="Language" title="Language" className="carrot" /></figure></Link></li>
                        <li><Link to="/"> Currency: BYR<figure><img src="./assets/carrot.png" alt="Language" title="Language" className="carrot"/></figure></Link></li>
                        <li><Link to="/"><figure><img src="./assets/cart.png" alt="Cart" title="cart" className="cart"/></figure><span className="Cart cart-num" id="dashboard-cartItemCount">0</span></Link></li>
                    </ul>
                </div>
            </div>
            <div className="container">       
                <div className="logo-wrapper">
                    <figure>
                        <Link to="/"><img src="./assets/logo.png" alt="logo" title="Your Brand"/></Link>
                    </figure>
                </div>
            </div>
            <nav>
                <Link to="/" className="burger-nav"></Link>
                <div className="nav-wrapper">
                    <Link to="/" title="home">home</Link>
                    <Link to="/">Domains</Link>
                    <Link to="/">Websites <span className="new-tag inline-block">New</span></Link>
                    <Link to="/" className="selected">Hosting</Link>
                    <Link to="/">Cloud</Link>
                    <Link to="/">Email and Productivity <span className="new-tag inline-block">New</span></Link>
                    <Link to="/">Security</Link>
                    <Link to="/">Combo Offers</Link>
                </div>
            </nav>
        </header>
    </Router>
  );
}

export default Header;