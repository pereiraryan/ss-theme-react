import React from "react"

function Header() {
  return (
        <header className="Brand-header">
            <div className="primary-nav">
                <div className="primary-wrapper">
                    <ul> 
                        <li><a href="#" ><figure><img src="./assets/login.png" alt="Login" title="Login/Signup" className="Login" /></figure> Login/Signup</a></li>
                        <li><a href="#" > Language: English<figure><img src="./assets/carrot.png" alt="Language" title="Language" className="carrot" /></figure></a></li>
                        <li><a href="#" > Currency: BYR<figure><img src="./assets/carrot.png" alt="Language" title="Language" className="carrot"/></figure></a></li>
                        <li><a href="#"><figure><img src="./assets/cart.png" alt="Cart" title="cart" className="cart"/></figure><span className="Cart cart-num" id="dashboard-cartItemCount">0</span></a></li>
                    </ul>
                </div>
            </div>
            <div className="container">       
                <div className="logo-wrapper">
                    <figure>
                        <a href="/"><img src="./assets/logo.png" alt="logo" title="Your Brand"/></a>
                    </figure>
                </div>
            </div>
            <nav>
                <a className="burger-nav"></a>
                <div className="nav-wrapper">
                    <a href="/" title="home">home</a>
                    <a href="">Domains</a>
                    <a href="">Websites <span className="new-tag inline-block">New</span></a>
                    <a href="" className="selected">Hosting</a>
                    <a href="">Cloud</a>
                    <a href="">Email and Productivity <span className="new-tag inline-block">New</span></a>
                    <a href="">Security</a>
                    <a href="">Combo Offers</a>
                </div>
            </nav>
        </header>
  );
}

export default Header;