import React from 'react';
import {connect} from 'react-redux'

const ButtonContainer = (props) => (
  props.show ?
  <button onClick={props.clickHandler}>{props.text}</button>
  : null
)

const mapStateToProps = (state, ownProps) => ({
  show: state.activePath !== ownProps.hideOn
});

export default connect(mapStateToProps)(ButtonContainer);
