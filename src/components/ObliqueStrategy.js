import React, { Fragment, Component } from "react";

class ObliqueStrategy extends Component {
  state = {
    strategies: [],
    strategyIndex: 0
  };

  getStrategy = () => {
    const { strategies } = this.state;
    const strategyIndex = Math.floor(Math.random() * strategies.length) + 1;

    return { strategyIndex };
  };

  getAnotherStrategy = () => {
    const { strategyIndex } = this.getStrategy();

    this.setState({ strategyIndex });
  };

  componentDidMount() {
    const { edition } = this.props;
    const strategies = require(`../editions/${edition}`).default;
    const { strategyIndex } = this.getStrategy();

    this.setState({ strategies, strategyIndex });
  }

  render() {
    const { strategies, strategyIndex } = this.state;

    if (strategies.length <= 0) {
      return <div>- blank -</div>;
    }

    return (
      <Fragment>
        <div>{strategies[strategyIndex]}</div>
        <a href="#" onClick={this.getAnotherStrategy}>
          Get another strategy
        </a>
      </Fragment>
    );
  }
}

export default ObliqueStrategy;
