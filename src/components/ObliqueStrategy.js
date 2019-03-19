import React, { Component } from 'react'
import Button from './Button'
import stategiesSet from '../editions'

import './ObliqueStrategy.scss'

console.log('React version:', React.version)

const editions = {
  1: 'First Edition',
  2: 'Second Edition',
  3: 'Third Edition',
  4: 'Fourth Edition'
}

class ObliqueStrategy extends Component {
  state = {
    edition: 4,
    strategies: [],
    strategyIndex: 0
  }

  getStrategy = strategies => {
    const strategyIndex = Math.floor(Math.random() * strategies.length) + 1

    return { strategyIndex }
  }

  getAnotherStrategy = () => {
    const { strategyIndex } = this.getStrategy(this.state.strategies)

    this.setState({ strategyIndex })
  }

  changeEdition = edition => {
    const strategies = stategiesSet[edition]
    this.setState({ edition, strategies })
  }

  componentDidMount() {
    const { edition } = this.state
    const strategies = stategiesSet[edition]
    const { strategyIndex } = this.getStrategy(strategies)

    this.setState({ strategies, strategyIndex })
  }

  render() {
    const { strategies, strategyIndex, edition: currentEdition } = this.state
    const strategy = strategies[strategyIndex]

    if (strategies.length <= 0) {
      return <div>- blank -</div>
    }

    return (
      <div className="app">
        <h1 className="title">Oblique Strategies</h1>

        <div className="card-container">
          <div className="strategy">{strategy}</div>

          <Button bordered onClick={this.getAnotherStrategy}>
            Get Another Strategy
          </Button>
        </div>

        <div className="footer">
          <div className="switch-edition">
            Switch Edition:
            {Object.keys(editions).map((edition, index) => (
              <Button
                className="edition-button"
                key={index}
                disabled={currentEdition.toString() === edition}
                onClick={() => this.changeEdition(edition)}
              >
                {editions[edition]}
              </Button>
            ))}
          </div>

          <div className="credit">
            Original content by Brian Eno and Peter Schmidt. Website by Waiyan
            Yoon.
          </div>
        </div>
      </div>
    )
  }
}

export default ObliqueStrategy
