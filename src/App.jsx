import React from 'react'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import { getVideos } from './services/youtube'

class App extends React.Component {
  state = { videos: [] }

  onTermSubmit = async (term) => {
    const response = await getVideos(term)
    console.log(response)
    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}
export default App
