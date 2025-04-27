// const express = require('express');
// const app = express(); // Create an Express application
// const port = 3000; // Set the port for the server

// // Basic route
// app.get('/', (req, res) => {
//     res.send('Hello, World!'); // Send a response when accessing the root URL
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });




// const express = require('express');
// const app = express();
// const port = 3000;

// // Import your program file here
// const program = require('./program');

// // Basic route
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// // Another route that uses logic from program.js
// app.get('/run-program', (req, res) => {
//     const result = program.run();
//     res.send(result);  // Send the result of your program
// });

// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });

// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 3000;

// // Serve the HTML files
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.get('/signup', (req, res) => {
//     res.sendFile(path.join(__dirname, 'signup.html'));
// });

// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'loginpage.html'));
// });

// app.get('/requesthelp', (req, res) => {
//     res.sendFile(path.join(__dirname, 'requesthelp.html'));
// });

// app.get('/volunteer', (req, res) => {
//     res.sendFile(path.join(__dirname, 'volunteer.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'about.html'));
// });

// app.get('/dashboard', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dashboard.html'));
// });



// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });


const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});

app.get('/loginpage', (req, res) => {
    res.sendFile(path.join(__dirname, 'loginpage.html'));
});

app.get('/requesthelp', (req, res) => {
    res.sendFile(path.join(__dirname, 'requesthelp.html'));
});

app.get('/volunteer', (req, res) => {
    res.sendFile(path.join(__dirname, 'volunteer.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.get('/reliefcenters', (req, res) => {
    res.sendFile(path.join(__dirname, 'reliefcenters.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
