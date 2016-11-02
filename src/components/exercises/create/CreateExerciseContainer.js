import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as exerciseActions from '../../../actions/exerciseActions';
import MyButton from './MyButton';

class CreateExerciseContainer extends Component {
  constructor(props) {
    super(props);
    this.props.actions.initStep();
    this.nextStep = this.nextStep.bind(this);
  }

  nextStep() {
    this.props.actions.nextStep(this.props.step);
  }

  render() { 
    // console.log(this.props.step);
    // console.log('^^');
    // debugger;
    switch(this.props.step) {
      case 1:
        return <div> <MyButton step={this.nextStep} value="continue" /> <p> first step </p> </div>;
      case 2:
        return <div> <MyButton  step={this.nextStep} value="continue" /> <p> second step </p> </div>;
      case 3:
        return <div> <MyButton  step={this.nextStep} value="continue" /> <p> third step </p> </div>;
      case 4:
        return <div> <MyButton  step={this.nextStep} value="continue" /> <p> fourth step </p> </div>;
      default:
        return <div> <MyButton  step={this.nextStep} value="continue" /> <p> done. save n ow </p> </div>;
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    step: state.step
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(exerciseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateExerciseContainer);