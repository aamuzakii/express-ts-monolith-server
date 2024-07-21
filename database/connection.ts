const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_SRV);

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));
