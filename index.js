// //const cheerio = require('cheerio');
// //const rp = require('request-promise');
// import cheerio from 'cheerio'
// import rp from 'request-promise'

// const url = 'http://127.0.0.1:8080/mac_bookmarks_02_03_2023.html';
// // I use Wikipedia just for testing purpose

// rp(url).then(html => {
//   const $ = cheerio.load(html);
//     const linkObjects = $('a');
//     // this is a mass object, not an array

//     const total = linkObjects.length;
//     // The linkObjects has a property named "lenght"

//     const links = [];
//     // we only need the "href" and "title" of each link

//     for(let i = 0; i < total; i++){
//         links.push({
//             href: linkObjects[i].attribs.href,
//             title: linkObjects[i].attribs.title
//         });
//     }

//     console.log(links);
//     // do something else here with links
// })
// .catch(err => {
//     console.log(err); 
// })

// // //file:///C:/Users/Admin/Downloads/mac_bookmarks_02_03_2023.html

// // var cheerio = require('cheerio'),
// //     request = require('request');

// // request('http://www.stackoverflow.com', function (error, response, body) {
// //   if (!error && response.statusCode == 200) {
// //     var $ = cheerio.load(body);

// //     var linkHrefs = $('link').map(function(i) {
// //       return $(this).attr('href');
// //     }).get();
// //     var scriptSrcs = $('script').map(function(i) {
// //       return $(this).attr('src');
// //     }).get();


// //     console.log("links:");
// //     console.log(linkHrefs);
// //     console.log("scripts:");
// //     console.log(scriptSrcs);
// //   }
// // });

import express from 'express';
import 'dotenv/config';
import cors from 'cors';
const app = express()
const port = process.env.PORT || 3000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`)
})