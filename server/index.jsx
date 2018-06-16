const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const url = require('url')

const app = express();

app.use('/listingDescription/:id', (request, response) => {
  const urlAddress = new url.URL( request.params.id , 'http://127.0.0.1:3001/');
  response.redirect(307, urlAddress);
});

app.use('/reviews', (request, response) => {
  const urlAddress = new url.URL( request.originalUrl , 'http://127.0.0.1:3003/');
  response.redirect(307, urlAddress);
});

app.use('/theReviews', (request, response) => {
  const urlAddress = new url.URL( request.url , 'http://127.0.0.1:3003/');
  response.redirect(307, urlAddress);
});

app.use('/booking', (request, response) => {
  const urlAddress = new url.URL( request.originalUrl , 'http://127.0.0.1:3002/');
  response.redirect(307, urlAddress);
});

app.use('/theBooking/:id', (request, response) => {
  const urlAddress = new url.URL( request.params.id , 'http://127.0.0.1:3002/');
  response.redirect(307, urlAddress);
});

app.use('/filterListings', (request, response) => {
  const urlAddress = new url.URL( request.originalUrl , 'http://127.0.0.1:3004/');
  response.redirect(307, urlAddress );
});

app.use('/theFilterListing/:id', (request, response) => {
  const urlAddress = new url.URL( request.params.id , 'http://127.0.0.1:3004/');
  response.redirect(307, urlAddress);
});

app.use('/theTitleGallery/:id', (request, response) => {
  const urlAddress = new url.URL( request.params.id , 'http://127.0.0.1:3005/');
  console.log(request)
  response.redirect(307, urlAddress);
});

app.use('/theTitleGallery', (request, response) => {
  const urlAddress = new url.URL( request.originalUrl , 'http://127.0.0.1:3005/');
  response.redirect(307, urlAddress );
});

app.use('/headerphotos/:id', (request, response) => {
  const urlAddress = new url.URL( request.params.id , 'http://127.0.0.1:3005/headerphotos/');
  response.redirect(307, urlAddress);
});


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Mehods',
      'GET, POST, PUT, PATCH, DELETE',
    );
    return res.status(200).json({});
  }
  next();
});

app.use(express.static(path.join(__dirname, '../server')));
app.get('/favicon.ico', (req, res) => res.status(204));


const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
