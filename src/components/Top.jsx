import React from "react";
import Me from "../components/photos/Mee.png"
import facebook from "../components/photos/facebook-logo.png"
import Linkedin from "../components/photos/Linkedin-logo.png"
import Whatsapp from "../components/photos/Whatsapp-logo.png"

function Top() {
    return <div id="top">
        <h3 className="text-center mt-8">Hello, I'm</h3>
        <h1 className="text-center sm:text-7xl text-5xl ">RAJESHWAR SINGH</h1>
        <h3 className="text-center mt-5 sm:text-3xl">Fullstack-Developer</h3>  
        <span className="flex justify-center sm:pt-20 pt-16 "> 
        <img src={Me} alt="" className="  sm:pt-16  sm:px-12 sm:bg-gradient-to-t from-slate-200 to-blue-800 sm:h-96 sm:rounded-t-full " />  
        {/* relative mx-96 mt-16 px-64    */}
        
     <img src={facebook} alt="" className="sm:h-32 h-20 relative sm:absolute hidden bottom-20 left-0  sm:block sm:bottom-40 sm:left-10" />
        <img src={Linkedin} alt="" className="sm:h-32 h-20  relative bottom-0 left-20 hidden sm:absolute sm:block sm:bottom-20   sm:left-10" />
        <img src={Whatsapp} alt="" className="sm:h-32 h-20 relative left-40 sm:absolute hidden sm:block sm:bottom-0 sm:left-10" /> 
    {/* the first box that divide into two part one for image and second for form */}
        </span> 
    </div>
}
// flex justify-center mt-8 text-3xl
export default Top;
