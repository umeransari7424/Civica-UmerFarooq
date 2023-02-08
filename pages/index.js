import Head from 'next/head'
import Image from 'next/image'
import Global from '../Components/Elements/Global'

// import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle"
import Personalised from '../Components/Elements/Personalised'
import Worldwide from '../Components/Elements/Worldwide'
import Zimo from '../Components/Elements/Zimo'
import Official from '../Components/Elements/Official'
import Header from '../Components/Layout/Header'
import Hero from '../Components/Elements/Hero'
import Experience from '../Components/Elements/Experience'

export default function Home() {
  return (
    <div >
      <Header/>
      <Hero/>
      <Experience/>
      <Official/>
      <Zimo/>
      <Worldwide/>
      <Personalised/>
      <Global/>
    </div>
  )
}
