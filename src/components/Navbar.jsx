import React from "react";

function Navbar() {
    return <div>
        <div className="bottom-5 cursor-pointer fixed flex  justify-center text-slate-50 w-full scroll-smooth ">
            <div className="absolute h-20 w-96 rounded-full blur-sm bg-slate-800"></div>
            <ul className="flex justify-center gap-4  p-7 rounded-full z-50 font-semibold">
                <a href="#top">Home</a>
                <a href="#About-Me">About me</a>
                <a href="#Skills">Skills</a>
                <a href="#Contact-me">Contact me</a>
            
            </ul>
        </div>
    </div>
}



export default Navbar;