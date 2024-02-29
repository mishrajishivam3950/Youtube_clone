import axios from "axios";

const KEY= 'AIzaSyARlSkXgZkxS4dzDbJLlIvWNevJkN484rs';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
            part:'snippet',
            type:'video',
            maxResults:5,
            key: KEY
    }
});