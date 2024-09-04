import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceAngry } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        // <footer className="footer mt-5 bg-light text-center text-lg-start d-block style={{ backgroundColor: '#a2b9bc' }}" >
        //     <div className="row ">
        //             <div className="text-center p-3 " >
        //                 copyright &copy; 2024 Anshika: All rights are Reserved.
        //             </div>
        //             {/* <a href="#top" ><h1>^</h1></a> */}
        //     {/* <div className="container text-center" >
                
        //             <div className="col-md-6">
        //                 <h5>Follow Us</h5>
        //                 <div className="social-icons">
        //                     <a href="https://facebook.com" target="_blank" 
        //                     rel="nonopener noreferrer">
        //                         <FontAwesomeIcon icon={faFaceAngry} />
        //                     </a>
        //                     <a href="https://twitter.com" target="_blank" 
        //                     rel="nonopener noreferrer">
        //                         <i className="fab fa-twitter"></i>
        //                     </a>
        //                     <a href="https://instagram.com" target="_blank" 
        //                     rel="nonopener noreferrer">
        //                         <i className="fab fa-instagram"></i>
        //                     </a>
        //                     <a href="https://linkedin.com" target="_blank" 
        //                     rel="nonopener noreferrer">
        //                         <i className="fab fa-linkedin-in"></i>
        //                     </a>    
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="row mt-4">
        //             <div className="col-12">
        //                 <p className="text-muted">copyright &copy; 2024 Anshika: All rights are Reserved.</p>
        //             </div>
        //         </div> */}
        //     </div>

        // </footer>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '20vh' }}>
    <div style={{ flex: '1' }}>
    </div>
    <footer className="footer mt-5 bg-light text-center text-lg-start d-block" style={{ backgroundColor: '#a2b9bc', marginTop: 'auto' }}>
        <div className="row">
            <div className="text-center p-3">
                copyright © 2024 Anshika: All rights are Reserved.
            </div>
        </div>
    </footer>
</div>


    );
}

export default Footer;