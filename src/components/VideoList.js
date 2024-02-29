import React from "react";
import VideoItems from "./VideoItems";


const VideoList  =({videos, onVideoSelect }) =>{
    //props.videos

    const renderedList = videos.map((video) => {
        return <VideoItems video={video} onVideoSelect={onVideoSelect} key={video.id.videoId}/>;
    });

    return(
        <div className="ui relaxed divided list">{renderedList}</div>
    );

};

export default VideoList;