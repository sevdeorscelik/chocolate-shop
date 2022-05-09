import { React } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BsFillArrowRightSquareFill, FaArrowRight } from "react-icons/fa";


function About() {
  let navigate = useNavigate()
  let { username } = useParams()

  return (
    <div className='About'>

      <div className="card " >
        <div className="d-flex justify-content-center ">
          <div className='img-div'>
            <img src="img/about-2.jpg" className="image" alt="..." />
          </div>
          <div className="">
            <div className="card-body d-flex flex-column">
              <h1 className="card-title text-center ">About us</h1>
              <p className="card-text m-5 letter ">

                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.


              </p>
              <div className=' to-product' onClick={() => { navigate('/product') }}>
                <p className='view'>
                  You can view our products here 
                  
                  <FaArrowRight className='' />
                </p>
                
                
                
                

              </div>


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