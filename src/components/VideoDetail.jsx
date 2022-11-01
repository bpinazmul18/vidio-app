import React from 'react'
import Loader from './common/Loader'
import './VideoDetail.css'

const VideoDetail = ({ video }) => {
  if (!video) return <Loader />
  return <div>{video.snippet.title}</div>
}

export default VideoDetail
