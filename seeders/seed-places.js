const db= require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: "Seattle",
    state: "WA",
    cuisines: "Thai, Pan-Asian",
    pic:"/images/h-thai-ml-tables.jpg",
    founded: 1989
}])
.then(()=>{
console.log("Success!")
process.exit()
})
.catch(()=>{
    console.log("Failure!", err)
    process.exit()
})