import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

/*eslint-disable no-console*/

process.env.NODE_ENV = "production";

console.log('generating minified bundle for prod via webpack'.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack Stats: ${stats}`);

  //if we got this far the build succedded
  console.log('your app has been compiled in prod mode and written to /dist'.green);

  return 0;
});