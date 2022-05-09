import { React} from 'react'

import Slideshow from '../components/Slideshow';


function Home() {
 

  return (
    <div className='Home'>

      <div className='slider'>

      <Slideshow  />
      </div>
    </div>
  )

}



export default Home

/*
 This is a home page
      <br />
      <button onClick={()=>{
        navigate('/profile')
      }}>to profile</button>
  
*/
