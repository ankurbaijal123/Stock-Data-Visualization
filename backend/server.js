const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const path = require('path'); // Import path module
const app = express();
const port = 3000;

let results = [];

// Read and parse the CSV file
fs.createReadStream(path.join(__dirname, '../data/dump.csv')) // Adjusted path
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '../frontend'))); // Adjusted path

// Endpoint to get companies
app.get('/companies', (req, res) => {
  const companies = results.map(row => row['index_name']);
  console.log('Companies:', companies);
  res.json(companies);
});

// Endpoint to get data for a specific company
app.get('/data/:company', (req, res) => {
  const companyName = req.params.company;
  const companyData = results.filter(row => row['index_name'] === companyName);
  res.json(companyData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
