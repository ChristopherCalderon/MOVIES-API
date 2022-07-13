const debug = require("debug")("chrisApi:server");
const moongoose = require("mongoose");

moongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => debug("Connected to database"))
  .catch((err) => debug("Error connecting to database -> ${err}"));
