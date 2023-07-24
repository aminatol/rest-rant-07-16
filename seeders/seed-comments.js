const db = require("../models");

//To us await, we need to async function.
async function seed() {
  //Get the place, H-Thai-ML
  let place = await db.Place.findOne({ name: "H-Thai-ML" });

  //Create a Fake sample comment.
  let comment = await db.Comment.create({
    author: "Famished Fran",
    rant: false,
    starts: 5.0,
    contents: "Wow, simply amazing! Highly recommended!",
  });

  //Add that comment to the place's comment array
place.comments.push(comment.id)

  //save the place now that is has comment
  await place.save();

  //Exit the program
  process.exit();
}
seed();


