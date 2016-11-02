import React, {PropTypes} from 'react';

const ExerciseRow = ({exercise}) => {
  let currentClass = "";
  switch (exercise.category) {
    case 0:
      currentClass = "exercise zero";
      break;
    case 1:
      currentClass = "exercise one";
      break;
    default:
      currentClass = "exercise two";
  }
  return (
    <div className="row">
      <div className={currentClass + " col-xs-6 col-md-6 col-lg-4 col-xs-offset-3 col-md-offset-3 col-lg-offset-4 well well-sm"}>
        <h1>{exercise.name}</h1>
        <h2>{exercise.weight}</h2>
        <p>{exercise.sets} sets of {exercise.reps}</p>
      </div>
    </div>
  );
};

ExerciseRow.propTypes = {
  exercise: PropTypes.object.isRequired
};

export default ExerciseRow;