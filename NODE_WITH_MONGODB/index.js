const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb+srv://milonpc:Milonpc12@firstcluster.ijwew.mongodb.net/?retryWrites=true&w=majority";


MongoClient.connect(URL, function (error, myMongoClient) {
    if (error){
        console.log("database connection fail");
    }else {
        console.log("database connect successful.");
         // dataInsert(myMongoClient);
        //deleteOneData(myMongoClient);

         DeleteAllItem(myMongoClient);
    }
});


let dataInsert = (myMongoClient)=> {
    let myDatabase = myMongoClient.db("school");
    let myCollection = myDatabase.collection("students");
    let  myData = {
        id:"3",
        name: "Milon",
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


let deleteOneData = (myMongoClient)=>{
    let myDatabase = myMongoClient.db("school");
    let myCollection = myDatabase.collection("students");

    let deleteData = {id: "2"}
    myCollection.deleteOne(deleteData, function (error) {

        if (error){
            console.log("Data delete fail");
        }else {
            console.log("Data delete successful");
        }

    });
};

let DeleteAllItem = (myMongoClient) => {
    let Database = myMongoClient.db("school");
    let MyCollection = Database.collection("students");
    MyCollection.deleteMany(function (error, resultObj) {

        if (error){
            console.log("Data delete fail");
        }else {
            console.log(resultObj.deletedCount + " items deleted.");
        }

    });
};


