const mongoose = require('mongoose');


const connectMongo = () => {
    mongoose.connect('mongodb+srv://app-grm:XJ2r6ixpQcimMf4W@cluster0.c3yq6mn.mongodb.net/?retryWrites=true&w=majority')
        .then(() => {
            //don't show the log when it is test
            if (process.env.NODE_ENV !== "test") {
                console.log("Connected to %s");
                console.log("App is running ... \n");
                console.log("Press CTRL + C to stop the process. \n");
            }
        })
        .catch(err => {
            console.error("App starting error:", err.message);
            // process.exit(1);
        });
}

module.exports = connectMongo