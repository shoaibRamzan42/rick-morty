import React from "react"
import Navbar from "./Navbar"
import Banner from "./Banner"
import Stake from "./Stake"
import Achive from "./Achive"
import Tokenomics from "./Tokenomics"
import Road from "./Road-map"
import RoadMap from "./Road-map"
import Footer from "./Footer"
import Grow from "./Grow"


function App() {
 

  return (
 <>
 <div
        
        className="min-h-screen  bg-[#09090e] max-w-[100vw]  overflow-hidden "
      >
        <div  className=" max-w-[1700px] mx-auto  ">
        <Navbar />
        <Banner />
        <Stake/>
        <Grow/>
        <Achive />
        <Tokenomics/>
        <RoadMap/>
        <Footer/>
</div>
</div>
 </>
  )
}

export default App
