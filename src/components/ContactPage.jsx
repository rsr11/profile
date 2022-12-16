import React from "react";
import Img from "./photos/contactPic.png"
// import facebook from "../components/photos/facebook-logo.png"
// import Linkedin from "../components/photos/Linkedin-logo.png"
// import Whatsapp from "../components/photos/Whatsapp-logo.png"

function ContactPage() {
    return <div id="Contact-me">
    <p className="text-center mt-20">Contact me</p>
    <p className="text-center text-5xl">If you want!</p>

    {/* <img src={facebook} alt="" className="sm:h-32 h-20 relative sm:absolute  -bottom-20 left-0  sm:visible sm:-bottom-96 sm:left-10" />
        <img src={Linkedin} alt="" className="sm:h-32 h-20  relative bottom-0 left-20  sm:visible sm:-bottom-80   sm:left-10" />
        <img src={Whatsapp} alt="" className="sm:h-32 h-20 relative -top-20   left-40  sm:visible sm:-bottom-64 sm:left-10" /> */}
    {/* the first box that divide into two part one for image and second for form */}
    <div className="sm:flex sm:justify-between sm:mt-10 sm:mr-40 sm:mb-20 mb-28 mx-5 sm:mx-0 ">

        {/* The image section of div */}
        <div><img src={Img} alt="" className="sm:ml-80" /></div>


        {/* the form section of div */}
        <div >
        <form action="https://formspree.io/f/xzbqppyv" method="POST" className="box-border border-2 px-10 flex-col  flex shadow-slate-50 shadow-xl" >
        <input type="text" placeholder="Name" name="Username" required autoComplete="off" className="mt-10 p-3 rounded-lg text-black" />
        <input type="email" placeholder="Email" name="Email" id="" required autoComplete="off" className="mt-10 p-3 rounded-lg text-black" />
        <textarea name="Message" placeholder="Message" id="" cols="30" required autoComplete="off" rows="5" className="mt-10 p-3 rounded-lg mb-10 text-black"></textarea>
         <button className="bg-cyan-900 mb-10 p-5 text-white hover:bg-cyan-600">Send Message</button>
         </form>
        </div>
    </div>
    </div>
}


export default ContactPage;