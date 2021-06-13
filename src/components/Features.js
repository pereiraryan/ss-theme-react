import React from "react";
import Tabs from "./Tabs"; 
function Features() {
  return (
    <section id="Features-section" className="Features">
        <h2 className="Features-heading">What can you do with Office 365?</h2>
            <Tabs> 
                <div label="Comunicate Effectivly"> 
                <div id="communicate" className="Tabs-content" style={{display: 'block'}}>
                        <article>
                            <div className="Tabs-block animate__animated  animate__fadeInLeft">
                                <div className="Tabs-box">
                                    <h3>Professnonl Email</h3>
                                    <p>Get a professional email for your domain with the power of Outlook.</p>
                                    <p>With sufficient storage, you never run out of space again. </p>
                                </div>
                                <div className="Tabs-box">
                                    <h3>Stay Connected</h3>
                                    <p>Connect with your teams with HD video calls on Skype</p> <p>and Microsoft Teams</p>
                                </div>
                                <div className="Tabs-box">
                                    <h3>Stay Original</h3>
                                    <p>Add reminders, schedule meetings and never miss a thing</p>
                                    <p>with smart calendar.</p>
                                </div>
                            </div>
                            <figure className="animate__animated animate__fadeInRight">
                                <img src="./assets/illus-right.png" alt="Features" title="Communicate"/>
                            </figure>
                        </article>
                    </div>
                </div> 
                <div label="Collaborate Daily"> 
                <div id="collaborate" className="Tabs-content" style={{display: 'block'}}>
                        <article>
                            <div className="Tabs-block animate__animated  animate__fadeInLeft">
                                <div className="Tabs-box">
                                    <h3>Collaborate waily Email</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, amet?</p>
                                </div>
                                <div className="Tabs-box">
                                    <h3>Collaborate waily Connected</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, alias?</p>
                                </div>
                                <div className="Tabs-box">
                                    <h3>Collaborate waily Original</h3>
                                    <p>Add reminder, schedule meeting Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <figure className="animate__animated animate__fadeInRight">
                                <img src="./assets/illus-two.png" alt="Features" title="Communicate"/>
                            </figure>
                        </article>
                    </div>
                </div> 
                <div label="Stay secure"> 
                <div id="security" className="Tabs-content" style={{display: 'block'}}>
                        <article>
                            <div className="Tabs-block animate__animated  animate__fadeInLeft">
                                <div className="Tabs-box">
                                    <h3>Secure Email</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, amet?</p>
                                </div>
                                <div className="Tabs-box">
                                    <h3>Secure Connected</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, alias?</p>
                                </div>
                                <div className="Tabs-box">
                                    <h3>Stay Secure</h3>
                                    <p>Add reminder, schedule meeting Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                            <figure className="animate__animated animate__fadeInRight">
                                <img src="./assets/illus-two.png" alt="Features" title="Communicate"/>
                            </figure>
                        </article>
                    </div>
                </div> 
            </Tabs>
        {/* <header id="Features-tabs">
            <ul className="Tabs-list">
                <li data-tab-type="communicate" className="active">Comunicate Effectivly</li>
                <li data-tab-type="collaborate">Collaborate Daily</li>
                <li data-tab-type="security">Stay secure</li>
            </ul>
        </header> */}
        {/* <section>
            <div className="Tabs-container">
                <div id="communicate" className="Tabs-content" style={{display: 'block'}}>
                    <article>
                        <div className="Tabs-block animate__animated  animate__fadeInLeft">
                            <div className="Tabs-box">
                                <h3>Professnonl Email</h3>
                                <p>Get a professional email for your domain with the power of Outlook.</p>
                                <p>With sufficient storage, you never run out of space again. </p>
                            </div>
                            <div className="Tabs-box">
                                <h3>Stay Connected</h3>
                                <p>Connect with your teams with HD video calls on Skype</p> <p>and Microsoft Teams</p>
                            </div>
                            <div className="Tabs-box">
                                <h3>Stay Original</h3>
                                <p>Add reminders, schedule meetings and never miss a thing</p>
                                <p>with smart calendar.</p>
                            </div>
                        </div>
                        <figure className="animate__animated animate__fadeInRight">
                            <img src="./assets/illus-right.png" alt="Features" title="Communicate"/>
                        </figure>
                    </article>
                </div>
                <div id="collaborate" className="Tabs-content">
                    <article>
                        <div className="Tabs-block animate__animated  animate__fadeInLeft">
                            <div className="Tabs-box">
                                <h3>Collaborate waily Email</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, amet?</p>
                            </div>
                            <div className="Tabs-box">
                                <h3>Collaborate waily Connected</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, alias?</p>
                            </div>
                            <div className="Tabs-box">
                                <h3>Collaborate waily Original</h3>
                                <p>Add reminder, schedule meeting Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <figure className="animate__animated animate__fadeInRight">
                            <img src="./assets/illus-two.png" alt="Features" title="Communicate"/>
                        </figure>
                    </article>
                </div>
                <div id="security" className="Tabs-content">
                    <article>
                        <div className="Tabs-block animate__animated  animate__fadeInLeft">
                            <div className="Tabs-box">
                                <h3>Secure Email</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, amet?</p>
                            </div>
                            <div className="Tabs-box">
                                <h3>Secure Connected</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, alias?</p>
                            </div>
                            <div className="Tabs-box">
                                <h3>Stay Secure</h3>
                                <p>Add reminder, schedule meeting Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <figure className="animate__animated animate__fadeInRight">
                            <img src="./assets/illus-two.png" alt="Features" title="Communicate"/>
                        </figure>
                    </article>
                </div>
            </div>
        </section> */}

    </section>
  );
}

export default Features