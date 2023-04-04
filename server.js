const cheerio = require("cheerio");
const axios = require("axios").default;
const fs = require("fs");
const converter = require("json-2-csv");

//const got = (...args) => import('got').then(({default: got}) => got(...args));
// You cannot use "require" with the latest version of got
// If you're using ES Module or TypeScript, just import got like this: import got from 'got'

const extractLinks = async (url) => {
  try {
    // Fetching HTML
    const response = await axios.get(url);
    const html = response.data;

    // Using cheerio to extract <a> tags
    const $ = cheerio.load(html);

    const linkObjects = $("a");
    // this is a mass object, not an array

    // Collect the "href" and "title" of each link and add them to an array
    const links = [];
    linkObjects.each((index, element) => {
      links.push({
        text: $(element).text(), // get the text
        url: $(element).attr("href"), // get the href attribute
      });
    });

    //console.log(links);
    // Write cars object to file..
    fs.writeFileSync("./bookmarks.json", JSON.stringify(links, null, 4));

    // Read back from the file...
    // const carsFromFile = JSON.parse(fs.readFileSync("./bookmarks.json", "utf8"));
    // console.log("Cars from file:", carsFromFile);
    // do something else here with these links, such as writing to a file or saving them to your database

    // II. convert JSON array to CSV file
    // (async () => {
    //     try {
    //         const csv = await converter.json2csv(links);

    //       // print CSV string
    //       //console.log(csv)

    //       // write CSV to a file
    //       fs.writeFileSync('bookmarks.csv', csv)
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   })()
  } catch (error) {
    console.log(error.response);
  }
};

// Try it
const URL = "http://127.0.0.1:8080/bookmarks_3_23_23.html"; //'http://books.toscrape.com/';
extractLinks(URL);
