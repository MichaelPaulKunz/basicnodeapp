/**
 * To get the package.json and package-lock.json files that tmake all this possible in your own project,
 * Do this in the terminal:
 * npm install
 * npm install axios
 * npm i express
 * npm init
 * hit enter until the prompts finish
 * You don't have to do it here. It's already been done. Probably just need to run npm install to get the node modules
 */
console.log('sanity test');
const axios = require('axios');
const express = require('express');
const app = express(); //invoke express
const errorHandler = e => {
  return console.log('How does it feel to be WRONG?');
}
app.get('/', (req, res) => {
  axios.get('https://en.wikipedia.org/wiki/Mohamed_M._Atalla')
  .then(({data}) => {
    console.log(data);
    res.send(data);
  })
  .catch(errorHandler);
})
const main = () => {
  axios.get('https://en.wikipedia.org/wiki/Mohamed_M._Atalla')
  .then(({data}) => {
    console.log(data);
  })
  .catch(errorHandler);
}
app.listen(4242);
//run node index.js in the terminal and enter
//http://127.0.0.1.4242/ in browser


//don't put axios in your tech stack image
//it's a given