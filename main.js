const path = require('path');
const {readFile, writeFile} = require('fs').promises;

async function main()
    {
        let pokemon = 
            {
                name: "Pikachu",
                type: "Electric"
            };

        let dbs = [];

        dbs.push(pokemon);

        console.log(dbs)

        console.log("*ASYNCHRONOUS*");
        console.log(__dirname);
        const buffer = await readFile(path.join(__dirname, "pokemon.txt"))
        const db = JSON.parse(buffer);

        console.log(db);

        db.push(pokemon);

        console.log(db);

        const stringToSave = JSON.stringify(db);
        await writeFile(path.join(__dirname, "pokemon.txt"), stringToSave)

        console.log("done");
    }

main();