import React from 'react'
import SearchBar from './components/SearchBar'
import { getVideos } from './services/youtube'

class App extends React.Component {
  onTermSubmit = async (term) => {
    const response = await getVideos(term)
    console.log(response)
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    )
  }
}
export default App
