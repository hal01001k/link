import React from 'react';
import { Card, Button, CardTitle, CardText, CardDeck, CardBody, CardSubtitle} from 'reactstrap';
import Kerosel from './CarouselComponent'
import Box from '@material-ui/core/Box';
import done from "../assets/icons/Done.svg";
import waiting from "../assets/icons/Waiting.svg"
import success from "../assets/icons/Success.svg"
import "../App.css"

import
{
    defaultProps1, defaultProps2,
    styleObj, styleObj1,
    Ig

} from "./AttComponent";
import HorizontalLabelPositionBelowStepper from "./Steps"


function Home() {
    return (
        <div>
            <Kerosel/>
            <div className="section phont">
                <div className="container d-none d-md-block">
                    <div className="row" style={{paddingTop: '75px'}}>
                        <div className="col-12 col-md-4 home_services">
                            <img style={Ig} src={done} alt="Done"/>
                            <p>We find suitable interiors for your home.
                                All our services are approved and well maintained.</p>
                        </div>
                        <div className="col-12 col-md-4 home_services">
                            <img style={Ig} src={waiting} alt="wait"/>
                            <p>We find suitable architecture for your home. We
                                finish our services in time with every step.</p>
                        </div>
                        <div className="col-12 col-md-4 home_services">
                            <img style={Ig} src={success} alt="Success"/>
                            <p>We find suitable property for your home. we Provide professional and
                                world class service.</p>
                        </div>
                    </div>
                </div>
                <div className="container d-block d-sm-none">
                    <section className="py-5">
                        <div className="container text-center">
                            <strong>Build your Dreams.</strong>
                            <h5 className="display-5 my-5">Contact us and we will help you build you dream home.
                                we are always available.</h5>
                            <a className="btn btn-primary btn-raised mt-2" href="tel:8269874598" >Call Us</a>
                        </div>
                    </section>
                </div>
            </div>
            <div className="container phont" style={{ paddingTop:'50px' }}>
                <h1>How we work??</h1>
            </div>
            <div className="container" style={{paddingTop:'50px'}}>
                <HorizontalLabelPositionBelowStepper/>
            </div>
            <div className="container phont" style={{paddingTop: '50px'}}>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <video playsInline loop autoPlay muted width="350" height="400">
                            <source
                                src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5d05f6f1c9e4d68fe9d0ac8a_drawkit-grape-pack-illustration-1-transcode.mp4"
                                type="video/mp4"/>
                        </video>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="d-none d-md-block">
                            <Box display="flex" borderRadius={16} {...defaultProps1}>
                                <p style={styleObj}>
                                    <h1>Direct Connection</h1>
                                    Talk directly to our professionals and understand your need and requirements.
                                    We have specially assigned professionals to listen to and satisfy your needs.
                                    Our Customer care service is designed to cater the needs of our customers and
                                    help them through the process.
                                </p>
                            </Box>
                        </div>
                        <div className="d-block d-sm-none">
                            <Box display="flex" justifyContent="right" borderRadius={16} {...defaultProps2}>
                                <p style={styleObj1}>
                                    <h1>Talk to Us</h1>
                                    Talk directly to our professionals and understand your need and requirements.
                                    We have specially assigned professionals to listen to and satisfy your needs.
                                    Our Customer care service is designed to cater the needs of our customer and
                                    help them through the process.
                                </p>
                            </Box>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="d-none d-md-block">
                            <Box display="flex" justifyContent="right" borderRadius={16} {...defaultProps1}>
                                <p style={styleObj}>
                                    <h1>Project Consulting</h1>
                                    We consult about your project and help you find what is best for you and your needs.
                                    Our ultimate goal is customer satisfaction and we always strive to achieve it.
                                    Your project will be evaluated with detailed analysis for a perfect and optimized solution.

                                </p>
                            </Box>
                        </div>
                    </div>
                    <div className="d-none d-md-block">
                        <div className="col-12 col-md-4">
                            <video playsInline loop autoPlay muted width="350" height="400">
                                <source
                                    src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5d05f9736a93605e6d950a1e_drawkit-grape-pack-illustration-4-transcode.mp4"
                                    type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <video playsInline loop autoPlay muted width="350" height="400">
                            <source
                                src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5d06154c6a9360b7a49538b6_drawkit-grape-pack-illustration-8-transcode.mp4"
                                type="video/mp4"/>
                        </video>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="d-none d-md-block">
                            <Box display="flex" justifyContent="right" borderRadius={16} {...defaultProps1}>
                                <p style={styleObj}>
                                    <h1>On Site Inspection</h1>
                                    We provide a healthy attention to your project/construction for a proper execution.
                                    Our team is very obedient and earnest with customer, they always provide the care that
                                    our customer deserves. We have very good track record of our service.
                                </p>
                            </Box>
                        </div>
                        <div className="d-block d-sm-none">
                            <Box display="flex" justifyContent="right" borderRadius={16} {...defaultProps2}>
                                <p style={styleObj1}>
                                    <h1>Always Available</h1>
                                    Our team is just a call away. we will explain you the details and needs very efficiently.
                                    This is the backbone of our company and we respect it very much. Call us and you will find us 24X7.
                                </p>
                            </Box>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="d-none d-md-block">
                            <Box display="flex" justifyContent="right" borderRadius={16} {...defaultProps1}>
                                <p style={styleObj}>
                                    <h1>Always Available</h1>
                                    Our team is just a call away. we will explain you the details and needs very efficiently.
                                    This is the backbone of our company and we respect it very much. We provide extra care
                                    answer our customer and satisfy their needs. Call and you will find us 24X7.
                                </p>
                            </Box>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <video playsInline loop autoPlay muted width="350" height="400">
                            <source
                                src="https://global-uploads.webflow.com/5bcb46130508ef456a7b2930/5d060ea7c9e4d60c42d0d010_drawkit-grape-pack-illustration-5-transcode.mp4"
                                type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <p>
                        <h2>Our Features</h2>
                        Extra services that our company provides.
                    </p>
                </div>
                <div >
                    <CardDeck className="phont" style={{paddingBottom:"20px"}}>
                        <Card>
                            <CardBody>
                                {/*<CardTitle>Interior</CardTitle>*/}
                                {/*<CardSubtitle>Choose from lots</CardSubtitle>*/}
                                <CardText>We provide a wide range of services for interior design. visit our page to check yourself. </CardText>
                                <Button color='primary' href="/website/#/interior">Interior</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                {/*<CardTitle>Architecture</CardTitle>*/}
                                {/*<CardSubtitle>Wide range</CardSubtitle>*/}
                                <CardText>We have a strong and reliable team to provide you our design. Do check this section.</CardText>
                                <Button color='primary' href="/website/#/architecture">Architecture</Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                {/*<CardTitle>Property</CardTitle>*/}
                                {/*<CardSubtitle>Near by</CardSubtitle>*/}
                                <CardText>Nearby property that you can buy. You will be notified as soon as new property is available.</CardText>
                                <Button color='primary' href="tel:8269874598">Properties</Button>
                            </CardBody>
                        </Card>
                    </CardDeck>
                    <section className="py-5">
                        <div className="container text-center">
                            <div className="card">
                                <img className="card-img" src="https://images.pexels.com/photos/3609112/pexels-photo-3609112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                                <div
                                    className="card-img-overlay d-flex justify-content-center align-items-center flex-column">
                                    <h3 className="card-title">Future of the Interior</h3>
                                    <p className="card-text">A very promising and very contempt service for interior designs.</p>
                                    <a className="btn btn-primary btn-raised" href="/website/#/interior">Check Our Work!</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-5">
                        <div className="container">
                            <h2 className="mb-5 text-center">Some of our Special features.</h2>
                            <div className="row">
                                <div className="col-md-3 mb-4">
                                    <h5>Woodwork</h5>
                                    <p>A small extra service included in our package.</p>
                                    <a href="/website/#/interior" role="button">Read more</a>
                                </div>
                                <div className="col-md-3 mb-4">
                                    <h5>Wallpapers</h5>
                                    <p>Decide from our previous works.</p>
                                    <a href="/website/#/interior" role="button">Read more</a>
                                </div>
                                <div className="col-md-3 mb-4">
                                    <h5>Presentable</h5>
                                    <p>We emphasise on aesthetics as well.</p>
                                    <a href="/website/#/interior" role="button">Read more</a>
                                </div>
                                <div className="col-md-3 mb-4">
                                    <h5>Speed</h5>
                                    <p>We are efficient, fast and reliable.</p>
                                    <a href="/website/#/interior" role="button">Read more</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home;
