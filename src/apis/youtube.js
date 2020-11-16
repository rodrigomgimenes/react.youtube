import axios from 'axios';
import youtube from './youtube.json';

export default axios.create ( {
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: youtube.apiKey
  }
});