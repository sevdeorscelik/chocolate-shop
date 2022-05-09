import { React } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";


function About() {
  let navigate = useNavigate()
  let { username } = useParams()

  return (
    <div className='About d-flex justify-content-center align-items-center'>
        <div class="card mb-3 " style={{ maxWidth: "1200px" }}>
            <div class="row g-5">
                <div class="col-md-5">
                    <img src="img/about-2.jpg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <h2 class="card-title text-center">About us</h2>
                        <p class="card-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</p>
                        <p class="card-text icon-bar w-50  text-center" onClick={() => { navigate('/product') }}>
                          <small>You can view our products here</small>
                            <FaArrowRight  className='arrow-icon'/>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
)
}



export default About


/* 
*/