import appConfig from '../config/config';

export default class ExerciseApi {
  static getAllExercises(cb) {
    return $.get(appConfig.appUrl + '/api/exercises', function(data) {
      // console.log(data);
      cb(data);
    });
  }
}

