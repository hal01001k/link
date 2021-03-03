import React from "react";
import ongoing1 from "../assets/pics/ongoing1.jpg";
import ongoing2 from "../assets/pics/ongoing3.jpg";
import ongoing3 from "../assets/pics/ongoing3.jpg";
import "../App.css"



function Onproject()
{
    return(
        <div>
            <section className="py-5">
                <div className="container text-center">
                    <h1 className="display-4 my-3">Our Ongoing projects and their details are present here.</h1>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-1">
                            <h2>Two Storey Home</h2>
                            <p>Residential</p>
                            <p>A 600 sq.ft. two storey home is under construction.</p>
                            <p>Sironj-Vidisha-MP</p>
                            <h4>Services Requested</h4>
                            <table className="table mt-5 mb-4 responsive">
                                <tbody>
                                <tr>
                                    <td>2D Map</td>
                                    <td className="text-right">Completed</td>
                                </tr>
                                <tr>
                                    <td>3D Elevation</td>
                                    <td className="text-right">Completed</td>
                                </tr>
                                <tr>
                                    <td>Construction</td>
                                    <td className="text-right">In-porgress</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-6 order-2 order-lg-2 mb-5 mb-lg-0 ongoing_image">
                            <img className="img-fluid" src={ongoing1} alt=""/>
                            <div className="d-flex justify-content-between w-100 mt-4 ongoing_images">
                                <div className="p-0">
                                    <img className="w-100" src={ongoing2} alt=""/>
                                </div>
                                <div className="p-0 mx-4">
                                    <img className="w-100" src={ongoing3} alt=""/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Onproject;
