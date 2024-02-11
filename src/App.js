import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
// import { robots as robotsArray } from './robots'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      robots: [],
      searchfield: '',
    }
  }

  // prettier-ignore
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase()

    this.setState({
      searchfield: searchValue,
    })
  }

  render() {
    const { robots, searchfield } = this.state

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield)
    })

    if (robots.length === 0) {
      return <h1>Loading Robots</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchfield={searchfield} searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      )
    }
  }
}

export default App
