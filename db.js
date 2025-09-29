const mongoose  = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGO_URI || 'mongodb+srv://issaBourasse:KIRITo162534$@mydatabse.ygotoux.mongodb.net/myDB';

mongoose.connect(uri)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => {console.log(err);
process.exit(1);
})


module.exports = mongoose;