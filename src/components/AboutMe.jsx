import React from "react";

import Me from "../components/photos/me.jpg"
import Medal from "../components/photos/medal.png"
import Client from "../components/photos/client.png"
import Projects from "../components/photos/projects.png"

function AboutMe() {
    return <div id="About-Me">
    
        <p className="text-center mt-24 ">Get to know</p>
        <p className="text-center sm:text-7xl text-5xl">About Me</p>
    {/* the first and upper most div in about section */}
         <div className="sm:flex sm:justify-around mt-16 ">

            {/* section one for img and it shadow */}
            <div className="-z-10 sm:w-2/5 sm:ml-24 ">
                <div className="sm:h-96 h-64 sm:rounded-3xl flex justify-center sm:bg-slate-700 sm:relative sm:w-96 -z-30">
                    <div className="h-64 rounded-3xl bg-slate-700  sm:relative sm:w-96 w-64 absolute -z-30"></div>
                <img src={Me} className="sm:h-96 h-64 sm:w-96  w-64 rounded-3xl rotate-6 -z-10  " alt="" />
                </div>
            </div>

            {/*second div for information section  */}
            <div className="sm:flex-col sm:w-3/5 sm:mr-10 md:w-full">

                {/* For the img and box for detail */}
               <div className="flex sm:flex-row flex-col mt-10 sm:mt-0 sm:gap-5">
                       <div className="sm:w-60 sm:h-52 w-52 h-48 m-auto rounded-3xl bg-cyan-800">
                        <img src={Medal} className="sm:h-20 sm:mt-7 sm:ml-20 h-14 m-auto mt-10" alt="" />
                        <p className="text-center text-white font-semibold">Experience</p>
                        <p className="text-center">2+ years working</p>
                       </div>
                       <div className="sm:w-60 sm:h-52 w-52 h-48 m-auto sm:mt-0 mt-10  rounded-3xl bg-cyan-800">
                        <img src={Projects} className="sm:h-20 sm:mt-7 sm:ml-20 h-14 m-auto mt-10" alt="" />
                        <p className="text-center text-white font-semibold">Projects</p>
                        <p className="text-center">10+ completed</p>
                       </div>
                       <div className="sm:w-60 sm:h-52 sm:mt-0 w-52 h-48 m-auto mt-10  rounded-3xl bg-cyan-800">
                        <img src={Client} className="sm:h-20 sm:mt-7 sm:ml-20 h-14 m-auto mt-10" alt="" />
                        <p className="text-center text-white font-semibold">Clients</p>
                        <p className="text-center">10+ around world</p>
                       </div>
               </div>

               {/* for the written information and button */}
               <div className="sm:w-5/6 sm:mt-7 mt-5 mx-4">
                 <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas soluta nihil dolore assumenda, amet commodi cupiditate odit quos expedita inventore voluptatum eligendi ullam, deleniti perferendis eius dolor cumque non libero illum modi minima tenetur obcaecati. Aspernatur, ab excepturi nostrum officia tempore aut atque repellat ut beatae blanditiis autem reprehenderit assumenda?</p>
                 <button className="sm:p-4 sm:m-4 p-2 mx-auto mt-4  flex bg-cyan-800 rounded-lg text-white hover:bg-cyan-600" >Let's Talk</button>
               </div>
            </div>



         </div>


    </div>
};


export default AboutMe;
