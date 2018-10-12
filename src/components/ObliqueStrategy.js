import React, { Component } from "react";

class ObliqueStrategy extends Component {
  state = {
    strategies: [],
    strategyIndex: 0
  };

  componentDidMount() {
    const { edition } = this.props;
    const strategies = require(`../editions/${edition}`).default;

    this.setState({ strategies });
  }

  render() {
    const { strategies } = this.state;

    if (strategies.length <= 0) {
      return <div>- blank -</div>;
    }

    return <div>{strategies[0]}</div>;
  }
}

export default ObliqueStrategy;
