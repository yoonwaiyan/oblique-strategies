import React, { Fragment, Component } from 'react';
import Button from './Button';
import stategiesSet from '../editions';

import './ObliqueStrategy.scss';

const editions = {
  1: 'First Edition',
  2: 'Second Edition',
  3: 'Third Edition',
  4: 'Fourth Edition'
};

class ObliqueStrategy extends Component {
  state = {
    edition: 4,
    strategies: [],
    strategyIndex: 0
  };

  getStrategy = strategies => {
    const strategyIndex = Math.floor(Math.random() * strategies.length) + 1;

    return { strategyIndex };
  };

  getAnotherStrategy = () => {
    const { strategyIndex } = this.getStrategy(this.state.strategies);

    this.setState({ strategyIndex });
  };

  changeEdition = edition => {
    const strategies = stategiesSet[edition];
    this.setState({ edition, strategies });
  };

  componentDidMount() {
    const { edition } = this.state;
    const strategies = stategiesSet[edition];
    const { strategyIndex } = this.getStrategy(strategies);

    this.setState({ strategies, strategyIndex });
  }

  render() {
    const { strategies, strategyIndex } = this.state;
    const strategy = strategies[strategyIndex];

    if (strategies.length <= 0) {
      return <div>- blank -</div>;
    }

    return (
      <Fragment>
        <div className="card-container">
          <div className="strategy">{strategy}</div>

          <Button bordered onClick={this.getAnotherStrategy}>
            Get Another Strategy
          </Button>
        </div>

        <div className="switch-edition">
          {Object.keys(editions).map((edition, index) => (
            <Button
              className="edition-button"
              key={index}
              onClick={() => this.changeEdition(edition)}
            >
              {editions[edition]}
            </Button>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default ObliqueStrategy;
