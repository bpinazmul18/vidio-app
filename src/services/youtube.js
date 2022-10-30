import http from './http'

export const getVideos = (q) =>
  http.get('/search', {
    params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: process.env.REACT_APP_API_KEY,
      q,
    },
  })
