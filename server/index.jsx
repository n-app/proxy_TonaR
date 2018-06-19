const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const url = require('url')

const app = express();

app.use(bodyParser.json());


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Mehods',
      'GET, POST, PUT, PATCH, DELETE'
    );
    return res.status(200).json({});
  }
  next();
});

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(express.static(path.join(__dirname, '../server')));

app.use('/listingDescription/:id', (request, response) => {
  const urlAddress = new url.URL( request.params.id , 'http://nappbnb-env-1.yykbu3dn27.us-east-1.elasticbeanstalk.com/');
  response.redirect(307, urlAddress);
});

app.use('/rooms/', (request, response) => {
  const urlAddress = new url.URL( request.originalUrl , 'http://nappbnb-env-1.yykbu3dn27.us-east-1.elasticbeanstalk.com/');
  response.redirect(307, urlAddress);
});

app.use('/reviews', (request, response) => {
  const urlAddress = new url.URL( request.originalUrl , 'http://nappbnbreviews.us-west-1.elasticbeanstalk.com/');
  response.redirect(307, urlAddress);
});

app.use('/theReviews', (request, response) => {
  const urlAddress = new url.URL( request.url , 'http://nappbnbreviews.us-west-1.elasticbeanstalk.com/');
  response.redirect(307, urlAddress);
});

app.use('/booking', (request, response) => {
  const urlAddress = new url.URL( request.originalUrl , 'http://booking-service-logan.us-west-1.elasticbeanstalk.com/');
  response.redirect(307, urlAddress);
});

app.use('/theBooking/:id', (request, response) => {
  const urlAddress = new url.URL( request.params.id , 'http://booking-service-logan.us-west-1.elasticbeanstalk.com/');
  response.redirect(307, urlAddress);
});

app.use('/filterListings', (request, response) => {
  const urlAddress = new url.URL( request.originalUrl , 'http://nappfilterlistingryan-env.n93dfz3d6f.us-west-1.elasticbeanstalk.com/');
  response.redirect(307, urlAddress );
});

app.use('/theFilterListing/:id', (request, response) => {
  const urlAddress = new url.URL( request.params.id , 'http://nappfilterlistingryan-env.n93dfz3d6f.us-west-1.elasticbeanstalk.com/');
  response.redirect(307, urlAddress);
});


app.use('/theTitleGallery/:id', (request, response) => {
  const urlAddress = new url.URL( request.params.id , 'http://airbnb-title-galley.us-west-1.elasticbeanstalk.com/');
  response.redirect(307, urlAddress );
});

app.use('/headerphotos/', (request, response) => {
  const urlAddress = new url.URL( request.originalUrl , 'http://airbnb-title-galley.us-west-1.elasticbeanstalk.com/');
  response.redirect(307, urlAddress);
});



const port = 8081;
app.listen(port, () => console.log(`listening on port ${port}`));
