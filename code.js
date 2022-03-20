const fs = require("fs");
const fsProm = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "homework.txt");

async function insertText() {

    if(!fs.existsSync(filePath)) {
        console.log("The file was successfuly created!");
    }else {
        // fs.appendFile(filePath, '\nSome new text', function(err, result){
        //     if(err) console.log('error', err);
        // });
        fs.writeFile(filePath, 'Some new text', 'ascii', (err) => {
            if (err) throw err;
        });
        console.log('The file was updated!');
    }

    fs.writeFile(filePath, "Hello from our first Node homework", 
    (err) => { 
        if (err) throw err;
        console.log("FINISHED!"); 
    });


    await readFile();
        
}

async function readFile() {
    const data = await fsProm.readFile(filePath);
    console.log(data.toString());
    return data.toString();
}

module.exports = {
    insertText,
    readFile,
};