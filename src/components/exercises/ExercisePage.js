import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as exerciseActions from '../../actions/exerciseActions';
import ExerciseList from './ExerciseList';

class ExercisePage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { exercises } = this.props;
    return (
      <ExerciseList exercises={exercises}/>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    exercises: state.exercises
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(exerciseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisePage);