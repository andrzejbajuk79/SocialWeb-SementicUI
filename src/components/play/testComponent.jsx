// rcc

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { increment, decrement } from './testActions';
import { Button } from 'semantic-ui-react';

class TestComponent extends Component {
  render() {
    const  {increment,decrement} =this.props
    return (
      <div>
        <h2>Testing</h2>
        <Button onClick={increment}
        positive
        >dodaj</Button>
        <Button onClick={decrement}
        negative
        >usun</Button>
        <p>Dane z reduxa :{this.props.data}</p>
      </div>
    )
  }
}
const actions = {
  increment,
  decrement
}
const mapStateToProps = (state) => ({
  data: state.test.data
})
export default connect(mapStateToProps, actions)(TestComponent);