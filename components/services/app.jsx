import React from "react";
import Video from "../landing/video";
import Backed from "../landing/backed";
import FooterBar from "../landing/footer";
import Hero from "../landing/hero";

const App = () => {
    return (
        <main>
            <div className='main'>
                <div className='gradient' />
            </div>

            <div className="app">
                <Hero />
                <Video videoLink="https://www.youtube.com/watch?v=zcuEpBanI6Q"/>
                <Backed />
                <FooterBar />
            </div>
        </main>
    );
};

export default App;