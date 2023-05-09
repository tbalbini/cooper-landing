import React from "react";
import { useState } from 'react';

function Video({ videoLink }) {
    const youtubeId = videoLink.split('v=')[1];
    const embedLink = `https://www.youtube.com/embed/${youtubeId}`;
    
    return (
        <div className="video-block w-container">
        <div style={{ paddingTop: "5%"}} className="video-2 w-video w-embed">
            <iframe
            className="embedly-embed"
            src={embedLink}
            scrolling="no"
            allowFullScreen=""
            title="YouTube video player"
            width="750"
            height="450"
            style={{ maxWidth: "100%" }}
            ></iframe>
        </div>
        </div>
    );
}

export default Video;