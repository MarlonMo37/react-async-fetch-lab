// create your App component here

import React from 'react'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            people: []
        }
    }

    render() {
        return(
            <div></div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
          .then(response => response.json())
          .then(({people}) => this.setState({ people: people }))
    }
}

export default App
