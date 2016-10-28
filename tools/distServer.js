import express from 'express';
import path from 'path';
import open from 'open';
import appConfig from '../src/config/config';

/* eslint-disable no-console */

const port = appConfig.port;
const app = express();

app.use(express.static('dist'));

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
