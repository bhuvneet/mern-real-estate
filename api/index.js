import express from 'express';

const app = express()

// listen to a port
app.listen(3000, () =>
{
    console.log('Server is running on port 3000!!');
});

