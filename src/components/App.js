import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component{

    state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.onTermSubmit('Data Structure using Java');
    }

    onTermSubmit = async (term) => {
       const response = await youtube.get('/search', {
            params:{
                q:term
            }
        });

        //console.log(response.data.items);
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };


    onVideoSelect = (video) =>{
        this.setState({ selectedVideo: video });
    };
    render(){
        return(
            <div className="ui container">
                <div style={{marginBottom:20}}>
                    <SearchBar onFormSubmit={this.onTermSubmit}/>
                </div>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect = {this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default App;