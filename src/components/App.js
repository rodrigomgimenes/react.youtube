import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
// import youtube from '../apis/youtube';
import useVideos from '../hooks/useVideos';

const App = () => {
  // const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // useEffect(() => {
  //   onTermSubmit('studio ghibli');
  // }, []);

  // const onTermSubmit = async (term) => {
  //   const response = await youtube.get('/search', {
  //     params: {
  //       q: term
  //     }
  //   });

  //   setVideos(response.data.items);
  //   setSelectedVideo(response.data.items[0]);
  // };

  // Custom Hook
  const [videos, searchListVideos] = useVideos('studio ghibli');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      {/* <SearchBar onFormSubmit={onTermSubmit} /> */}
      <SearchBar onFormSubmit={searchListVideos} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} /> 
          </div>
          
          <div className="five wide column">
            <VideoList 
              videos={videos} 
              // onVideoSelect={(video) => setSelectedVideo(video))}
              onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

// class App extends React.Component {
//   // state = {
//   //   videos: [],
//   //   selectedVideo: null
//   // };

//   // componentDidMount() {
//   //   this.onTermSubmit('studio ghibli');
//   // }

//   // onTermSubmit = async (term) => {
//   //   console.log(`This is what you are looking for: ${term}`);

//   //   const response = await youtube.get('/search', {
//   //     params: {
//   //       q: term
//   //     }
//   //   });

//   //   console.log(response);
//   //   this.setState({ 
//   //     videos: response.data.items,
//   //     selectedVideo: response.data.items[0] 
//   //   });
//   // };

//   // Callback function
//   // onVideoSelect = (video) => {
//   //   // console.log('From the App!', video);

//   //   this.setState({ selectedVideo: video });
//   // }

//   render() {
//     // return (
//     //   <div className="ui container">
//     //     <SearchBar onFormSubmit={this.onTermSubmit} />
//     //     {/* Found: {this.state.videos.length} videos. */}

//     //     <div className="ui grid">
//     //       <div className="ui row">
//     //         <div className="eleven wide column">
//     //           <VideoDetail video={this.state.selectedVideo} /> 
//     //         </div>
            
//     //         <div className="five wide column">
//     //           <VideoList 
//     //             videos={this.state.videos} 
//     //             onVideoSelect={this.onVideoSelect}
//     //           />
//     //         </div>
//     //       </div>
//     //     </div>
        
//     //   </div>
//     // );
//   }
// }

export default App;