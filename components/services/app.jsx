import React from "react";
import Video from "../video";
import Backed from "../backed";
import FooterBar from "../footer";
import Hero from "../hero";

const App = () => {
    return (
        <main>
            <div className='main'>
                <div className='gradient' />
            </div>

            <div className="app">
                <Hero />
                <Video videoLink="https://www.youtube.com/watch?v=8HmbjASuvMI"/>
                <Backed />
                <FooterBar />
            </div>
        </main>
    );
};

export default App;