require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');

app.use(cors());
app.use(express.urlencoded({ extended: true }));

const API_KEY = process.env.API_KEY;

// Function to fetch news from the API
function fetchNews(url, res) {
    axios.get(url)
        .then(response => {
            if (response.data.totalResults > 0) {
                res.json({
                    status: 200,
                    success: true,
                    message: 'News fetched successfully',
                    data: response.data
                });
            } else {
                res.json({
                    status: 200,
                    success: true,
                    message: 'No more results',
                });
            }
        })
        .catch(error => {
            res.json({
                status: 500,
                success: false,
                message: 'Error fetching news from the API',
                error: error.message
            });
        });
}

// Fetch news
app.get('/everything', (req, res) => {
    let pageSize = parseInt(req.query.pageSize) || 40;
    let page = parseInt(req.query.page) || 1;
    let url = `https://newsapi.org/v2/everything?q=page=${page}&pageSize=${pageSize}&apiKey=${process.env.API_KEY}`;
    fetchNews(url, res);
});

// Top Headlines
app.options('/top-headlines', cors());
app.get('/top-headlines', (req, res) => {
    let pageSize = parseInt(req.query.pageSize) || 80;
    let page = parseInt(req.query.page) || 1;
    let category = req.query.category || 'general';
    let url = `https://newsapi.org/v2/top-headlines?category=${category}&language=en&page=${page}&pageSize=${pageSize}&apiKey=${process.env.API_KEY}`;
    fetchNews(url, res);
});

// Country-specific headlines
app.options('/country/:iso', cors());
app.get("/country/:iso", (req, res) => {
    let pageSize = parseInt(req.query.pageSize) || 80;
    let page = parseInt(req.query.page) || 1;
    const country = req.params.iso;
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&pageSize=${pageSize}&apiKey=${process.env.API_KEY}`;
    fetchNews(url, res);
});

// Server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});