import { React } from 'react'
import { useNavigate} from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";


function About() {
  let navigate = useNavigate()


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
                        <p class="card-text">Happy Chocolates has been on the tables of millions of people around the world for more than 50 years, spreading good moments to start the day. A piece of Happy Chocolates tastes great. Thanks to our unique and inimitable recipe, our chocolates has become the most popular and iconic chocolate mark in the world. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</p>
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
