import React from 'react'

class SearchBar extends React.Component {
  state = {
    term: '',
  }

  onInputChange = ({ currentTarget: input }) => {
    const term = { ...this.state.data }
    term[input.name] = input.value
    this.setState(term)
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="term">Video Search</label>
            <input
              type="text"
              name="term"
              id="term"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
