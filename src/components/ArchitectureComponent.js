import React from "react";
import Button from "reactstrap/lib/Button";
import im11 from "../assets/pics/11.png";
import im12 from "../assets/pics/12.png";
import "../App.css"


function Architecture ()
{
    return(
        <div>
            <section className="py-5">
                <div className="container space architecture_includes">
                    <h2 className="mb-5 text-center">Map Includes</h2>
                    <div className="card-deck">
                        <div className="card border-0">
                            <img className="card-img-top mb-2" src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                            <div className="card-body">
                                <small className="text-muted">Electrical</small>
                                <h5 className="card-title my-2">Wiring path</h5>
                            </div>
                        </div>
                        <div className="card border-0">
                            <img className="card-img-top mb-2" src="https://images.pexels.com/photos/268362/pexels-photo-268362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                            <div className="card-body">
                                <small className="text-muted">Plumbing</small>
                                <h5 className="card-title my-2">Plumbing Plan</h5>
                            </div>
                        </div>
                        <div className="card border-0">
                            <img className="card-img-top mb-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOFmQ9DSko9Qy6G5P1Th2BkDXaIsb6ZyxkAA&usqp=CAU" alt=""/>
                            <div className="card-body">
                                <small className="text-muted">3D and 2D</small>
                                <h5 className="card-title my-2">Better Visualization</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row architectural_plan">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <h2>Architectural Plan </h2>
                            <p>Includes</p>
                            <ul className="list-inline d-flex flex-column flex-sm-row align-items-center nav nav-pills mt-5 mb-4">
                                <li className="nav-item d-flex nav-link active">Vastu Oriented</li>
                            </ul>
                            <p>Our plans include every minor and precise elements needed
                                and every detail is very precisely added as per your demands.</p>
                            <table className="table mt-5 mb-4 responsive">
                                <tbody>
                                <tr>
                                    <td>2D MODELS</td>
                                    <td className="text-right">Provided</td>
                                </tr>
                                <tr>
                                    <td>ELEVATIONS</td>
                                    <td className="text-right">Provided</td>
                                </tr>
                                <tr>
                                    <td>3D MODELS</td>
                                    <td className="text-right">Available</td>
                                </tr>
                                </tbody>
                            </table>
                            <Button color="primary" href="tel:8269874598"> Call Now!</Button> <Button color="primary" href="/website/#/finproject"> Check More of our work</Button>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0">
                            <img className="img-fluid" src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="0"/>
                            <div className="d-flex justify-content-between w-100 mt-4">
                                <div className="p-0"><img className="w-100" src="https://images.pexels.com/photos/1404948/pexels-photo-1404948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="1"/></div>
                                <div className="p-0 mx-4"><img className="w-100" src="https://images.pexels.com/photos/3825540/pexels-photo-3825540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="2"/></div>
                                <div className="p-0"><img className="w-100" src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="3"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5">
                <div className="container text-center architecture_works">
                    <h2 className="mb-5">Our Works</h2>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <img className="img-fluid" src={im11} alt="arch 1"/>
                        </div>
                        <div className="col-md-6 mb-4">
                            <img className="img-fluid" src={im12} alt="arch 2"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Architecture;
