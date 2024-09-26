const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

//now any files in public are routed
app.use(express.static('public'))

//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to My Website' });
});

app.post('/feedback', (req, res) => {
    console.log('Received POST request to /feedback');
    let name = req.body.name;
    let icecreamtype = req.body.icecreamtype;
    let rating = req.body.rating;
    let feedback = req.body.feedback;
    console.log(`Data includes: ${name}, ${icecreamtype}, ${rating}, ${feedback}`);

    res.render('thankyou', {
        title: 'Ice Cream Review', 
        name: name,
        icecreamtype: icecreamtype,
        rating: rating,
        feedback: feedback
    });
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
