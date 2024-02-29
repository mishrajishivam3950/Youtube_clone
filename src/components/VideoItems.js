import './VideoItems.css';
import React from "react";

const VideoItems = ({ video, onVideoSelect })=> {

    return(
            <div onClick={() => onVideoSelect(video)} className="video-item item">
                <img  className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                <div className="content">
                    <div>
                        <div className="header">{video.snippet.title} </div>
                    </div>
                </div> 

            </div>);

};

export default VideoItems;