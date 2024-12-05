const express = require('express');
const path = require('path');

const app = express();

// Define the path to the dist folder
const distPath = path.join(__dirname, 'dist/invien/browser');

// Middleware for serving static files
app.use('/:locale', (req, res, next) => {
  const locale = req.params.locale;
  const localizedPath = path.join(distPath, locale);

  if (['en', 'es'].includes(locale)) {
    express.static(localizedPath)(req, res, next);
  } else {
    next(); // If the locale is not valid, continue to the next middleware
  }
});

// Manage the root path
app.get('/:locale/*', (req, res) => {
  const locale = req.params.locale;

  if (['en', 'es'].includes(locale)) {
    res.sendFile(path.join(distPath, locale, 'index.html'));
  } else {
    res.status(404).send('Locale not found');
  }
});

// Listen to the server on port 8080
app.listen(8080, 'localhost', () => {
  console.log('Servidor ejecutándose en http://localhost:8080');
});
