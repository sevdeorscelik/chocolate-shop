import { React } from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import {BsGeoAltFill, BsFillTelephoneFill} from 'react-icons/bs'



function Contact() {

    
    return (

        <div className="Contact d-flex justify-content-center align-items-center" style={{ 'backgroundImage': `linear-gradient(rgb(0,0,0, 0.9), rgb(0,0,0,0.5)), url(img/photo-15.jpg)` }}>

            <div className='container'>
                <h2>Contact us</h2>
                <div className="row mt-5 ">
                    <div className="col-md-12 col-lg-6  ">
                        <form className="row ">

                            <div className="col-6 ">
                                <div className="input-group">
                                    <div className="input-group-text rounded-0 ">
                                        <i className="bi bi-person-fill"></i>
                                    </div>
                                    <input type="text" className="form-control rounded-0  "
                                        placeholder="NAME *" required />
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="input-group">
                                    <div className="input-group-text rounded-0 ">
                                        <i className="bi bi-at"></i>
                                    </div>
                                    <input type="email" className="form-control rounded-0   "
                                        placeholder="EMAIL *" required />
                                </div>
                            </div>

                            <div className="col-12 py-5">
                                <div className="input-group">
                                    <div className="input-group-text rounded-0  ">
                                        <i className="bi bi-envelope-fill"></i>
                                    </div>
                                    <textarea className="form-control rounded-0  "
                                        placeholder="MESSAGE *" rows="5" required></textarea>
                                </div>
                            </div>

                            <div className="d-grid">
                                <button className="btn rounded-0 text-uppercase" type="submit">
                                    send message
                                </button>
                            </div>

                        </form>
                    </div>

                    <div className="col-md-12 col-lg-6 ">
                        <table className="table border-0 d-flex h-100 flex-column justify-content-center">
                            <tbody>
                                <tr>
                                    <td colspan="7" className="align-middle">
                                        <span className="">Vancouverstraße 2a 20457 Hamburg, Deutschland</span>
                                    </td>
                                    <th scope="row" className=" lead text-center">
                                        <BsGeoAltFill style={{ fontSize: "1.5rem", color:"#FEF7DC"}}/>
                                        
                                    </th>
                                </tr>
                                <tr>
                                    <td colspan="7" className="align-middle">
                                        <span className="">+90 555 - 444 - 333 - 222 - 111</span>
                                    </td>
                                    <th scope="row" className="lead text-center">
                                        <BsFillTelephoneFill style={{ fontSize: "1.5rem", color:"#FEF7DC"}}/>
                                    </th>
                                </tr>

                                <tr>
                                    <td className="align-middle"><span className=""><FaFacebook style={{ fontSize: "1.5rem" }} /></span></td>
                                    <td className="align-middle"><span className=""><FaTwitter  style={{ fontSize: "1.5rem" }}/></span></td>
                                    <td className="align-middle"><span className=""><FaInstagram style={{ fontSize: "1.5rem" }} /></span></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )

}



export default Contact