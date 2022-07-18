const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb+srv://milonpc:Milonpc12@firstcluster.ijwew.mongodb.net/?retryWrites=true&w=majority";


MongoClient.connect(URL, function (error, myMongoClient) {
    if (error){
        console.log("database connection fail");
    }else {
        console.log("database connect successful.");
        dataInsert(myMongoClient);
    }
});


let dataInsert = (myMongoClient)=> {
    let myDatabase = myMongoClient.db("school");
    let myCollection = myDatabase.collection("students");
    let  myData = {
        name: "Milon Hossen",
        location: "Joypurhat",
        email : "milonhossen1010@gmail.com",
        phone : "01750850216"
    };

    myCollection.insertOne(myData, function (error) {

        if (error){
            console.log("Data insert fail.");
        }else  {
            console.log("Data insert Successful");
        }

    });

};


