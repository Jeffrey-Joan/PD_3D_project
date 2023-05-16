import React, { Component } from 'react';

class AboutPage extends Component {
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
                                    <a href="/contact" className="nav-item nav-link">Contact</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>


                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: "500px"}}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute w-100 h-100 rounded" src="img/brain.jpg" style={{objectFit: "cover"}} />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="mb-4">
                                    <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Health Care</h5>
                                    <h1 className="display-4">Best Application to Detect Brain Tumours</h1>
                                </div>
                                <p style={{textAlign: "justify"}}>Health Care is an application to detect tumours in brain with the help of Convoluted Neural Network. It takes high presicion and accuracy to predict whether a patient is affected by brain tumor and a higher level of precision in order to localise the tumor. Health Care is used to predict the tumor and also classNameify the type of tumour based on the location.</p>
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
                        <hr style={{marginTop:"20px"}}/>
                        <div className="row gx-5 text-center">
                            <h1 className="display-4">Have a look at different types of tumours</h1>
                        </div>
                        <hr style={{marginBottom:"20px"}}/>

                        <div className="row gx-5 " style={{marginBottom: "30px"}}>
                            <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: "500px"}}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute w-100 h-100 rounded" src="img/glioma image.jpg" style={{objectFit: "cover"}} />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="mb-4">
                                    <h1 className="display-4">Glioma Tumour</h1>
                                </div>
                                <p style={{textAlign: "justify",fontSize:"1.3rem"}} >A glioma is a type of tumor that starts in the glial cells of the brain or the spine. Gliomas comprise about 30 percent of all brain tumors and central nervous system tumours, and 80 percent of all malignant brain tumours. Symptoms of gliomas depend on which part of the central nervous system is affected. A brain glioma can cause headaches, vomiting, seizures, and cranial nerve disorders as a result of increased intracranial pressure. A glioma of the optic nerve can cause visual loss. Spinal cord gliomas can cause pain, weakness, or numbness in the extremities. Gliomas do not usually metastasize by the bloodstream, but they can spread via the cerebrospinal fluid and cause "drop metastases" to the spinal cord. Complex visual hallucinations have been described as a symptom of low-grade glioma.</p>
                            </div>
                        </div>

                        <div className="row gx-5 " style={{marginBottom: "30px"}}>
                            <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: "500px"}}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute w-100 h-100 rounded" src="img/meningioma image.jpg" style={{objectFit: "cover"}} />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="mb-4">
                                    <h1 className="display-4">Meningioma Tumour</h1>
                                </div>
                                <p style={{textAlign: "justify",fontSize:"1.3rem"}} >Meningioma, also known as meningeal tumor, is typically a slow-growing tumor that forms from the meninges, the membranous layers surrounding the brain and spinal cord. Symptoms depend on the location and occur as a result of the tumor pressing on nearby tissue. Many cases never produce symptoms. Occasionally seizures, dementia, trouble talking, vision problems, one sided weakness, or loss of bladder control may occur. Risk factors include exposure to ionizing radiation such as during radiation therapy, a family history of the condition, and neurofibromatosis type 2. As of 2014 they do not appear to be related to cell phone use. They appear to be able to form from a number of different types of cells including arachnoid cells. Diagnosis is typically by medical imaging.If there are no symptoms, periodic observation may be all that is required.</p>
                            </div>
                        </div>

                        <div className="row gx-5 " style={{marginBottom: "30px"}}>
                            <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: "500px"}}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute w-100 h-100 rounded" src="img/Pituitary image.jpg" style={{objectFit: "cover"}} />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="mb-4">
                                    <h1 className="display-4">Pituitary Tumour</h1>
                                </div>
                                <p style={{textAlign: "justify",fontSize:"1.3rem"}} >Pituitary adenomas are tumors that occur in the pituitary gland. Most pituitary tumors are benign, approximately 35% are invasive and just 0.1% to 0.2% are carcinomas. Pituitary adenomas represent from 10% to 25% of all intracranial neoplasms and the estimated prevalence rate in the general population is approximately 17%. Non-invasive and non-secreting pituitary adenomas are considered to be benign in the literal as well as the clinical sense; however a recent meta-analysis of available research has shown there are to date scant studies – of poor quality – to either support or refute this assumption.</p>
                            </div>
                        </div>

                    
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;