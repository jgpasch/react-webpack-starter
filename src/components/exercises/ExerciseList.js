import React, {PropTypes} from 'react';
import ExerciseRow from './ExerciseRow';

const ExerciseList = ({exercises}) => {
  
  return (
    <div>
      {exercises.map((exercise, i) => <ExerciseRow key={i} exercise={exercise}/>)}
    </div>
  );
};

ExerciseList.propTypes = {
  exercises: PropTypes.array.isRequired
};

export default ExerciseList;