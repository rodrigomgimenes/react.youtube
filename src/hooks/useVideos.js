import { useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    searchListVideos(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const searchListVideos = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    setVideos(response.data.items);
  };

  return [videos, searchListVideos];
};

export default useVideos;