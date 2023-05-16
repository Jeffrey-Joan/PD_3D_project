import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div>
                   
               
                <div className="container-fluid sticky-top bg-white shadow-sm">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                            <a href="/" className="navbar-brand">
                                <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2"></i>Health Care</h1>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav ms-auto py-0">
                                    <a href="/" className="nav-item nav-link active">Home</a>
                                    <a href="/about" className="nav-item nav-link">About</a>
                                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
               
                <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                    <div className="container py-5">
                        <div className="row justify-content-start">
                            <div className="col-lg-8 text-center text-lg-start">
                                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5" style={{borderColor: "rgba(256, 256, 256, .3) !important"}}>Welcome To Health Care</h5>
                                <h1 className="display-1 text-white mb-md-4">Best Application to Detect Brain Tumours</h1>
                                <div className="pt-2">
                                    <a href="/uploadImage" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Get Started</a>
                                    <a href="" className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: "500px"}}>
                                <div className="position-relative h-100">
                                    <img className={"position-absolute w-100 h-100 rounded"} src="img/brain.jpg" style={{objectFit: "cover"}} />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="mb-4">
                                    <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Health Care</h5>
                                    <h1 className="display-4">Best Application to Detect Brain Tumours</h1>
                                </div>
                                <p style= {{fontSize:"1.3rem"}}>Health Care is an application to detect tumours in brain with the help of Convoluted Neural Network. It takes high presicion and accuracy to predict whether a patient is affected by brain tumor and a higher level of precision in order to localise the tumor. Health Care is used to predict the tumor and also classNameify the type of tumour based on the location.</p>
                                <div className="row g-3 pt-3">
                                    <div className="col-sm-3 col-6">
                                        <div className="bg-light text-center rounded-circle py-4">
                                            <i className="fa fa-3x fa-regular fa-microchip text-primary mb-3"></i>
                                            <h6 className="mb-0">High<small className="d-block text-primary">Accuracy</small></h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <div className="bg-light text-center rounded-circle py-4">
                                            <i className="fa fa-3x fa-solid fa-brain text-primary mb-3"></i>
                                            <h6 className="mb-0">High<small className="d-block text-primary">Reliability</small></h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <div className="bg-light text-center rounded-circle py-4">
                                            <i className="fa fa-3x fa-microscope text-primary mb-3"></i>
                                            <h6 className="mb-0">Accurate<small className="d-block text-primary">Testing</small></h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <div className="bg-light text-center rounded-circle py-4">
                                            <i className="fa fa-3x fa-money-bill text-primary mb-3"></i>
                                            <h6 className="mb-0">Free<small className="d-block text-primary">Service</small></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default HomePage;