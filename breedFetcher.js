const request = require('request');

const fetcher = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) {
        reject(`error! something went wrong!`);
      }
      const data = JSON.parse(body);

      console.log('typeof data:', typeof data);
      if (data.length < 1) {
        reject(`No cat breed by that name!`);
      }

      resolve(data);
    });
  });
};


const searchBreedFetcher = (breedShortForm) => {
  fetcher(`https://api.thecatapi.com/v1/images/search?breed_id=${breedShortForm}`)
    .then((data) => {
      console.log('Success! Url: ', data[0].url);
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};

const userInput = process.argv.slice(2);
console.log('user input: ', userInput);

searchBreedFetcher(userInput);