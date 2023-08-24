const express = require('express');


const router = express.Router();

router.get('/new', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'new.html'));
});

module.exports = router;