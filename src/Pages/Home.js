import { React } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



function Home() {
  let navigate = useNavigate()


  return (
    <div className='Home'>
      This is a home page
      <br />
      <button onClick={()=>{
        navigate('/profile')
      }}>to profile</button>
    </div>
  )
}



export default Home
