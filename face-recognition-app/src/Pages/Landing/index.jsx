import React from 'react';
import faceone from '../../store/faceone.svg';
import Card from '../../Components/Card';
import { data } from '../../store/data';
import './index.css';
import image from '../../store/image 11.svg';
import trafalgar from '../../store/trafalgar.svg';


import './index.css';

function Landing() {
    return (
        <div>
            <section className="first-section">
                <div className="first-section-inside">
                    <div className="first-section-content">
                        <div className="first-section-contents">
                            <h2>Facial Recognition</h2>
                            <h2>App for Schools</h2>
                            <p>Reflex ID provides schools a more secured
                                verification platform for parents and guardians
                                come over to pick up their wards from schools</p>
                            <button className="first-section-btn">Sign Up Now</button>
                        </div>
                    </div>
                    <div className="first-section-image">
                        <img src={faceone} alt="" />
                    </div>
                </div>
            </section>

            <section className="services" id="services">
                <h1> Services </h1>
                <p>We provide you the best options and services to suit your convenience while ensuring adequate safety measures are in check.</p>
                <div className="services-div">
                    <div >
                        {data.map(({ image, title, description }) => (
                            <Card image={image} title={title} description={description} />
                        ))}
                    </div>
                </div>
                <button className="services-btn">Learn More</button>

            </section>

            <section className="features" id="features">
                <div className="features-inside">
                    <div className="features-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="features-content">
                        <div className="features-contents">
                            <h1>Facial Recognition Feature</h1>
                            <p>Reflex ID possses the facial scab feature which uses the 3D face unlocking feature.</p>
                            <button className="features-btn">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Mobile-app" id="Mobile-app">
                <div className="Mobile-app-inside">
                    <div className="Mobile-app-content">
                        <div className="Mobile-app-contents">
                            <h1>Worry less and stay security conscious with our mobile app</h1>
                            <p>If you are ever concerned about your child's activities while in school, explore our mobile-friendly app tohelp you learn how to keep track.</p>

                            <p className="orange">IOS and Android apps coming soon!</p>
                            <button className="Mobile-App-btn"> Download</button>
                        </div>
                    </div>

                    <div className="Mobile-app-image">
                        <img src={trafalgar} alt="" />
                    </div>
                </div>

            </section>
            <section className="Testimonials">

                <div className="Testimonials-box">
                    <div className="Testimonials-heading">
                        <h1>What our users are saying</h1>
                        <div className="Testimonials-line"></div>
                    </div>
                    <div className="Testimonials-contents" >
                        <div className="Testimonials-inside">
                            <img src="https://miro.medium.com/max/2000/1*CadPWIt6C8Ef0k5u9TOFyw.jpeg" alt="" />
                            <div className="Testimonials-content">
                                <h3>Edward Newgate</h3>
                                <p>Parent</p>
                            </div>
                        </div>
                        <p>"App is easy to navigate and I feel safer knowing that I am in charge of authorizing and confirming who comes to pick up my son."</p>
                    </div>
                </div>
            </section>


        </div>

    );
}

export default Landing;