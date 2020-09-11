const express = require('express')

require('./services/passport')

const authRoutes = require('./routes/authRoutes')

const app = express();

app.get('/', (req, res) => {
    res.send({hello:'world'})
  })
authRoutes(app);
const port = process.env.PORT || 8080;
app.listen(port); 