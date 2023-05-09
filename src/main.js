const { db } = require("../db/connection.js");
const Pokemon = require("./model.js")

async function main() 
    {
        await db.sync({force: true});

        const pikachu = await Pokemon.create({
            name: "Pikachu",
            type: "Electric",
            weight: 6
        });
    }

    console.log(Pokemon);

main();