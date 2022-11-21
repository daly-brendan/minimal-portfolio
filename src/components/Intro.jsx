import React from "react";

function Intro() {
    return (
        <div className = "flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className ="text-4xl md:text-7xl dark: text-white mb-1 md:md-3 font-bold">Brendan</h1>
            <p className ="text-base md:text-xl md-3 font-medium">Software engineer and web developer</p>
            <p className ="text-sm max-w-xl bm-6 font-bold">Bio</p>
        </div>
    )
}

export default Intro;