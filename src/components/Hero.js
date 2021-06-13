import React from "react";

function Hero() {
  return (
     <section id="Hero-section" className="Hero">
        <figure><img className="Hero-image" src="./assets/office365-logo.png" alt="MicroSoft Officd"/></figure>
        <h1 className="Hero-heading">Email, Word, Excel, Cloud storage and much more!</h1>
        <h2 className="Hero-subheading">Never miss an important email and stay connected with your Office wherever you are</h2>
        <a className="Hero-cta" href="#Plans-section">View Plans</a>
    </section>
  );
}

export default Hero