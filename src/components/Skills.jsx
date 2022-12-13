import React from "react";

function Skills() {
    return <div id="Skills">
        <p className="text-center sm:mt-28 mt-20">The Tools</p>
        <p className="text-center sm:text-7xl text-5xl">I Know</p>
        <div className="sm:flex sm:justify-center sm:gap-20 sm:pt-20 mt-10 sm:mt-0">
            <div className="sm:pr-20 sm:pl-10 sm:w-96 w-80 m-auto h-56 sm:h-72 sm:py-7  border-white border-2 bg-cyan-800 rounded-3xl">
                <p className=" text-center font-extrabold  text-white text-xl mt-3 sm:mt-0">Frontend Development</p>
                <ul className=" sm:mt-5 text-white ml-10 sm:ml-0 list-disc mt-5"> 
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Tailwindcss</li>
                </ul>
            </div>
            <div className="sm:pr-20 sm:pl-10 sm:w-96 sm:h-72 sm:py-7 w-80 m-auto h-56 mt-10 sm:mt-0 border-white border-2 bg-cyan-800 rounded-3xl">
            <p className=" text-center font-extrabold text-white text-xl mt-3 sm:mt-0">Backend Development</p>
                <ul className="text-white sm:mt-5 list-disc ml-10 sm:ml-0 mt-5">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                </ul>
            </div>
        </div>
    </div>
}


export default Skills