import React from 'react'
import Banner from './Banner'
import Imagegrid from './Imagegrid'
import Service from './Service'
import Form from "./Form"
import Footer from 'Components/Footer'

function Home() {
  return (
    <React.Fragment>

      <div fluid className='home'>

          <Banner/>

          <Service/>

          <Imagegrid/>

          <Form/>

          <Footer/>

      </div>
  
    </React.Fragment>
  )
}

export default Home