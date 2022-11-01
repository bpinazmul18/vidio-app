import React from 'react'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'
import { getVideos } from './services/youtube'

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  onTermSubmit = async (term) => {
    const response = await getVideos(term)
    this.setState({ videos: response.data.items })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    )
  }
}
export default App
