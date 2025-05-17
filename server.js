const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3010;

// Serve static files
app.use(express.static(path.join(__dirname, '/')));

// Send all requests to index.html for client-side routing
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Fallback route
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}); 