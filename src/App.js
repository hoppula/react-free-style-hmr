import React, { Component } from 'react'
import { create } from 'react-free-style'
const Style = create()

const textStyle = Style.registerStyle({
  color: "blue"
})

class App extends Component {
  render() {
    return (
      <div>
        <h1 className={textStyle}>Hello, world.</h1>
      </div>
    )
  }
}

export default Style.component(App)
