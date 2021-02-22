import React from 'react';
function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Contact Details:</h5>
                        <ul className="list-unstyled">

                            <li>MP: +919826109598</li>
                            <li>UP: +916388010825</li>
                            <li>Bangalore: +918105621284</li>
                            <li>Rajasthan: +919079311469</li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            Chhatri naka<br />
                            Hanuman Path <br />
                            Sironj-Vidisha-MP<br />
                            <i className="fa fa-phone fa-lg"></i>: +91 8269874598<br />
                            <i className="fa fa-mobile fa-lg"></i>: +91 9826109598<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="https://google.com/gmail">cornerstones.in@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            {/*<a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>*/}
                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/111069890654661?referrer=whatsapp"><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/cornerstones_inc/"><i className="fa fa-instagram"></i></a>
                            {/*<a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>*/}
                            <a className="btn btn-social-icon" href="https://google.com/gmail"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p><i className="fa fa-copyright" aria-hidden="true"></i> 2020 Cornerstones Inc</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
