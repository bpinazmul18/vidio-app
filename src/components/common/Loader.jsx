import React from 'react'
import './Loader.css'

const Loader = () => (
  <div className="my__loader ui segment">
    <div className="ui active inverted dimmer">
      <div className="ui text loader">Loading</div>
    </div>
    <p></p>
  </div>
)

export default Loader
