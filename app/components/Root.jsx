import React, { Component } from 'react'
import { connect } from 'react-redux'

import { findSingleVoter, predictVoter } from '../reducers'
import Form from './Form'
import Voter from './Voter'
import VoterPrefs from './VoterPrefs'


/* -=-=-=-=-=-= STATEFUL COMPONENT =-=-=-=-=-=-=-=-  */

class Root extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Form getVoter={this.props.getVoter} />
            <Voter voter={this.props.voter} />
          </div>
          <div className="col-md-6">
            <VoterPrefs voter={this.props.voter} predictions={this.props.predictions} predict={this.props.predict} />
          </div>
        </div>
      </div>
    )
  }

}


/* -=-=-=-=-=-= MAPPING =-=-=-=-=-=-=-=-  */

const mapState = ({ voter, predictions }) => ({
  voter,
  predictions
});

const mapDispatch = (dispatch) => {
  return {
    getVoter: (id) => { dispatch(findSingleVoter(id)) },
    predict: (id) => { dispatch(predictVoter(id)) }
  }
}

const RootContainer = connect(
  mapState,
  mapDispatch
)(Root);

export default RootContainer;
