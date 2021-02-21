import React from "react";
import im15 from "../assets/pics/15.png";
import im11 from "../assets/pics/11.png";
import im16 from "../assets/pics/16.png";
import im17 from "../assets/pics/17.png";
import im18 from "../assets/pics/18.png";
import im19 from "../assets/pics/19.png";
import im20 from "../assets/pics/20.png";
import im21 from "../assets/pics/21.jpg";
import im12 from "../assets/pics/12.png";
import im14 from "../assets/pics/14.png";



function Finproject()
{
    return(
        <div><section className="py-5">
            <div className="container text-center">
                <h1 className="display-4 my-3">Our Finished projects and their details are present here.</h1>
            </div>
        </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-1">
                            <h2>Duplex House</h2>
                            <p>Architectural</p>
                            <p>A duplex house with its architectural plan with proper design and planning. It has various
                                elements and Customer was very pleased.</p>
                            <p>Address: Sironj city-Vidisha-MP</p>
                            <h4>Services Requested</h4>
                            <table className="table mt-5 mb-4 responsive">
                                <tbody>
                                <tr>
                                    <td>2D Map</td>
                                    <td className="text-right">Completed</td>
                                </tr>
                                <tr>
                                    <td>Elevation</td>
                                    <td className="text-right">Completed</td>
                                </tr>
                                <tr>
                                    <td>3D Visualization</td>
                                    <td className="text-right">Completed</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-6 order-2 order-lg-2 mb-5 mb-lg-0">
                            <img className="img-fluid" src={im12} alt="0"/>
                            <div className="d-flex justify-content-between w-100 mt-4">
                                <div className="p-0">
                                    <img className="w-100" src={im15} alt="1"/>
                                </div>
                                <div className="p-0 mx-4">
                                    <img className="w-100" src={im16} alt="2"/>
                                </div>
                                <div className="p-0"><img className="w-100" src={im19} alt="3"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="mb-5">Gallery</h2>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src={im14} alt="1"/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src={im20} alt="2"/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src={im17} alt="3"/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src={im18} alt="4"/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src={im11} alt="5"/>
                        </div>
                        <div className="col-md-4 mb-4">
                            <img className="img-fluid" src={im21} alt="6"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Finproject;
