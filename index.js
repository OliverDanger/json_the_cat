
const { fetcher } = require('./breedFetcher');

const userInput = process.argv.slice(2);
console.log('user input: ', userInput);

const searchBreedFetcher = (breedShortForm) => {
  fetcher(`https://api.thecatapi.com/v1/images/search?breed_id=${breedShortForm}`)
    .then((data) => {
      console.log('Success! Url: ', data[0].url);
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};

searchBreedFetcher(userInput);