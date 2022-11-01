import React from 'react'
import Loader from './common/Loader'
import './VideoDetail.css'

const VideoDetail = ({ video }) => {
  if (!video) return <Loader />
  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
