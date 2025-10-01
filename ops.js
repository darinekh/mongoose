require('./db');
const Person = require('./models/Person');

async function createPerson() {
    try {
        const person = new Person({
            name: 'Darine',
            age: 28,
            favoriteFoods: ['milawi', 'chikens']
        });

        const data = await person.save();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}


async function createManyPeople(arrayOfPeople, done) {
    try {
        const data = await Person.create(arrayOfPeople);
        if (done) done(null, data);
        return data;
    } catch (err) {
        console.log(err);
        if (done) done(err);
        throw err;
    }
}

async function findPeopleByName(name) {
    try {
        const data = await Person.find({name: name});
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function findPeopleById(personId, done) {
    try {
        const person = await Person.findById(personId);
        if (done) done(null, person);
        return person;
    } catch (err) {
        console.log(err);
        if (done) done(err);
        throw err;
    }
}

async function findPeopleByFood(food, done) {
    try {
        const person = await Person.findOne({favoriteFoods: food});
        if (done) done(null, person);
        return person;
    } catch (err) {
        console.log(err);
        if (done) done(err);
        throw err;
    }
}

async function findEditThenSave(personId, done) {
    try {
        const person = await Person.findById(personId);
        person.favoriteFoods.push('hamburger');
        const data = await person.save();
        if (done) done(null, data);
        return data;
    } catch (err) {
        console.log(err);
        if (done) done(err);
        throw err;
    }
}

async function findAndUpdate(personName, done) {
    try {
        const update = {age: 20};
        const options = {new: true};
        const person = await Person.findOneAndUpdate({name: personName}, update, options);
        if (done) done(null, person);
        return person;
    } catch (err) {
        console.log(err);
        if (done) done(err);
        throw err;
    }
}

async function removebyId(personId, done) {
    try {
        const person = await Person.findByIdAndRemove(personId);
        if (done) done(null, person);
        return person;
    } catch (err) {
        console.log(err);
        if (done) done(err);
        throw err;
    }
}

async function removeManyPeople(personName, done) {
    try {
        const data = await Person.deleteMany({name: personName});
        if (done) done(null, data);
        return data;
    } catch (err) {
        console.log(err);
        if (done) done(err);
        throw err;
    }
}


async function queryChain(personName, done) {
    try {
        const data = await Person.find({favoriteFoods: 'burritos'})
            .sort({name: 1})
            .limit(2)
            .select({age: 0})
            .exec();
        if (done) done(null, data);
        return data;
    } catch (err) {
        console.log(err);
        if (done) done(err);
        throw err;
    }
}

module.exports = {
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
}