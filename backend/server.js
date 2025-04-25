const express = require('express');
const cors = require('cors');

const app = express();

// --- Middleware ---
// Enable CORS for requests from your Firebase Hosting domain (or '*' for testing)
// TODO: Replace '*' with your actual Firebase Hosting URL in production
app.use(cors({ origin: '*' }));
app.use(express.json()); // Middleware to parse JSON request bodies

// --- Routes ---
// Basic health check endpoint
app.get('/api/health', (req, res) => {
  console.log("Health check requested");
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

// Placeholder for future task routes
// app.get('/api/tasks', (req, res) => { /* ... fetch tasks from Firestore ... */ });
// app.post('/api/tasks', (req, res) => { /* ... add task to Firestore ... */ });

// --- Server ---
const PORT = process.env.PORT || 8080; // Cloud Run provides PORT env var
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});