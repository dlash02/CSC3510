const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Enables handlebars to use shorter .hbs extension
app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

const port = 3000;

//Serves static files (we need it to import a css file)
app.use(express.static('public'))
//Sets a basic route
app.get('/', (req, res) => res.send('Hello World !'));

// add this route
app.get('/hbs', (req, res) => {
    //Serves the body of the page aka "hbshome.hbs" in views
    //           to the layout "views/layouts/main2.hbs"
    res.render('hbshome', { layout: 'main2' });
});
// ---------------------- hbs2 ------------
fakeApi = () => {
    return [
      {
        name: 'Hawks',
        lane: 'midlaner'
      },
      {
        name: 'Sox',
        lane: 'toplaner'
      },
      {
        name: 'Bears',
        lane: 'toplaner'
      },
      {
        name: 'Cubs',
        lane: 'midlaner'
      },
      {
        name: 'Bulls',
        lane: 'midlaner'
      }
    ];
  }
  app.get('/hbs2', (req, res) => {
  res.render('hbshome2', {layout: 'main2', suggestedChamps: fakeApi(), listExists: true});
  });

  app.get('/hbs3', (req, res) => {
  res.render('hbshome3', {layout: 'main2', first: "Dave", last: "Lash", role: "Professor" });
  });
//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));