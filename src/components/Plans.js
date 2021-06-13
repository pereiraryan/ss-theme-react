import React from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Plans() {
  return (
    <Router>
            <section id="Plans-section" className="Plans">
                <h2 className="Plans-heading">Get Started with Office 365</h2>
                <div className="Slider-wrapper">
                    <input type="range" min="0" max="100" value="100" className="Slider-range Slider-dot" disabled /><input type="range" min="0" max="100" value="75" className="Slider-range Slider-disabled" disabled />
                    <div className="Slider-title"><span className="active">Select a Plan</span><span>Add Number of Licence</span></div>
                </div>
                <div className="Plans-wrapper">
                    <div className="Plan Plan1">
                        <h5 className="Plan-name">Email Essentials</h5>
                        <div className="Plan-price"><span>$</span>1.99.00<sub>/licence/mo</sub></div>
                        <div className="Plan-FeaturesList">
                            <div className="FeaturesList">Outlook WebAccess<span>15GB Mailbox</span></div>
                            <div className="Features-icon"><figure><img src="./assets/o365_outlook.png" alt="BU" title="Outlook"/></figure></div>
                            <Link to="/" className="Plan-cta">Select Plan</Link>
                        </div>
                        

                    </div>
                    <div className="Plan Plan2">
                        <h5 className="Plan-name">Business Essentials</h5>
                        <div className="Plan-price"><span>$</span>5.99<sub>/licence/mo</sub></div>
                        <div className="Plan-FeaturesList">
                            <div className="FeaturesList">Outlook WebAccess
                                <span>50 GB Mailbox </span>
                            </div>
                            <div className="Features-icon"><figure><img src="./assets/o365_outlook.png" alt="Outlook" title="Outlook"/></figure></div>
                            <div className="FeaturesList">Cloud Storage
                                <span>1TB</span>
                            </div>
                            <div className="FeaturesList">Collaborate tools</div>
                            <div className="Features-icon"><figure><img src="./assets/o365_teams.png" alt="team" title="Teams"/></figure><figure><img src="./assets/o365_sharepoint.png" alt="o365_sharepoint" title="sharepoint"/></figure><figure><img src="./assets/o365_yammer.png" alt="yammer" title="yammer"/></figure></div>
                            <div className="FeaturesList">Microsoft Office online</div>
                            <div className="Features-icon"><figure><img src="./assets/o365_word.png" alt="word" title="Word"/></figure><figure><img src="./assets/o365_excel.png" alt="excel" title="Excel"/></figure><figure><img src="./assets/o365_powerpoint.png" alt="o365_powerpoint" title="PowerPoint"/></figure></div>
                            <Link to="/" className="Plan-cta">Select Plan</Link>
                        </div>
                        

                    </div>
                    <div className="Plan Plan3">
                        <h5 className="Plan-name">Business Premium</h5>
                        <div className="Plan-price"><span>$</span>9.99<sub>/licence/mo</sub></div>
                        <div className="Plan-FeaturesList">
                            <div className="FeaturesList">Outlook WebAccess
                                <span>50 GB Mailbox </span>
                            </div>
                            <div className="Features-icon"><figure><img src="./assets/o365_outlook.png" alt="Outlook" title="Outlook"/></figure></div>
                            <div className="FeaturesList">Cloud Storage
                                <span>1TB</span>
                            </div>
                            <div className="FeaturesList">Collaborate tools</div>
                            <div className="Features-icon"><figure><img src="./assets/o365_teams.png" alt="team" title="Teams"/></figure><figure><img src="/assets/o365_sharepoint.png" alt="o365_sharepoint" title="sharepoint"/></figure><figure><img src="./assets/o365_yammer.png" alt="yammer" title="yammer"/></figure></div>
                            <div className="FeaturesList">Microsoft Office online</div>
                            <div className="Features-icon"><figure><img src="./assets/o365_word.png" alt="word" title="Word"/></figure><figure><img src="./assets/o365_excel.png" alt="excel" title="Excel"/></figure><figure><img src="./assets/o365_powerpoint.png" alt="o365_powerpoint" title="PowerPoint"/></figure></div>
                            <div className="FeaturesList"> Microsoft Office Desktop</div>
                            <div className="Features-icon"><figure><img src="./assets/o365_word.png" alt="word" title="Word"/></figure><figure><img src="./assets/o365_excel.png" alt="excel" title="Excel"/></figure><figure><img src="./assets/o365_powerpoint.png" alt="o365_powerpoint" title="PowerPoint"/></figure><figure><img src="./assets/o365_outlook.png" alt="Outlook" title="Outlook"/></figure><figure><img src="./assets/o365_access.png" alt="Access" title="Access"/></figure><figure><img src="./assets/o365_one_note.png" alt="note" title="Notes"/></figure><figure><img src="./assets/o365_publisher.png" alt="Publisher" title="Publisher"/></figure></div>
                            <div className="FeaturesList">Business Apps</div>
                            <div className="Features-icon Features-Bizicon"><figure><img src="./assets/o365_outlook_customer.png" alt="Outlook" title="Outlook"/></figure><figure><img src="./assets/o365_bookings.png" alt="o365_bookings" title="o365_bookings"/></figure><figure><img src="./assets/o365_invoicing.png" alt="o365_invoicing" title="Invoice"/></figure><figure><img src="./assets/o365_mile-iq.png" alt="o365_mile-iq" title="Mile"/></figure></div>
                            <Link to="/" className="Plan-cta">Select Plan</Link>
                        </div>
                        

                    </div>
                </div>

            </section>
        </Router>
  );
}

export default Plans