import { React } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



function About() {
    let navigate = useNavigate()
    let { username } = useParams()
  return (
  <div>
    This is a about page for {username}
    <button onClick={()=>{
        navigate('/menu')
    }}
    >
    {' '}
    Change to menü page</button>
  </div>
  )
}



export default About
