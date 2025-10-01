const {
    createPerson,
    createManyPeople,
    findPeopleByName,
    findPeopleById,
    findPeopleByFood,
    findEditThenSave,
    findAndUpdate,
    removebyId,
    removeManyPeople,
    queryChain

} = require('./ops');


const arrayOfPeople = [
    { name: "Rami", age: 21, favoriteFoods: ["hamburger", "fries"] },
    { name: "Sami", age: 21, favoriteFoods: ["Pasta", "fries"] },
    { name: "Karim", age: 21, favoriteFoods: ["Pizza", "fries"] }
];

(async () => {
    try{
        await createPerson();
        
        await createManyPeople(arrayOfPeople);
        
        await findPeopleByName("Rami");
        
        // Note: Need valid ObjectId for these to work
        // await findPeopleById("VALID_OBJECT_ID_HERE");
        
        await findPeopleByFood("hamburger");
        
        // Note: Need valid ObjectId for this to work
        // await findEditThenSave("VALID_OBJECT_ID_HERE");
        
        await findAndUpdate("Rami");
        
        // Note: Need valid ObjectId for this to work
        // await removebyId("VALID_OBJECT_ID_HERE");
        
        await removeManyPeople("Rami");
        
        await queryChain();
        
    }catch(err){
    console.log(err);
    process.exit(1);
    }
  
})()