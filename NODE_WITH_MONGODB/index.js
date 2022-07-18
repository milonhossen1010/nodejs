const MongoClient = require("mongodb").MongoClient;
const URL = "mongodb+srv://milonpc:Milonpc12@firstcluster.ijwew.mongodb.net/?retryWrites=true&w=majority";


MongoClient.connect(URL, function (error, myMongoClient) {
    if (error){
        console.log("database connection fail");
    }else {
        console.log("database connect successful.");
          // dataInsert(myMongoClient);
        //deleteOneData(myMongoClient);

         // DeleteAllItem(myMongoClient);
        // FindOneMethod(myMongoClient);
        // FindAllMethod(myMongoClient);
        // FindAllDataByProjection(myMongoClient);
        // FindAllDataByQuery(myMongoClient);
        // FindAllDataByLimit(myMongoClient);
        FindAllDataBySort(myMongoClient);
    }
});


let dataInsert = (myMongoClient)=> {
    let myDatabase = myMongoClient.db("school");
    let myCollection = myDatabase.collection("students");
    let  myData = {
        id:"2",
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


//Find one
let FindOneMethod = (myMongoClient) => {
    let MyDatabase = myMongoClient.db("school");
    let MyCollection = MyDatabase.collection("students");

    let findData = {id: "2"}
    MyCollection.findOne(findData, function (error, result) {

        console.log(result);

    });
}


//Find all data
let FindAllMethod = (myMongoClient) => {
    let MyDatabase = myMongoClient.db("school");
    let MyCollection = MyDatabase.collection("students");


    MyCollection.find().toArray( function (error, result) {

        console.log(result);

    });
}

//Find all data by projection
let FindAllDataByProjection = (myMongoClient) => {
    let MyDatabase = myMongoClient.db("school");
    let MyCollection = MyDatabase.collection("students");

    let ItemObject = {};
    let ItemProjection = {projection:{ name: 1 }};


    MyCollection.find(ItemObject, ItemProjection).toArray(function(error, result) {

        console.log(result);

    });


};


//Find all data by Query
let FindAllDataByQuery = (myMongoClient) => {
    let MyDatabase = myMongoClient.db("school");
    let MyCollection = MyDatabase.collection("students");

    let query = {location: "Joypurhat"};


    MyCollection.find(query).toArray(function(error, result) {

        console.log(result);

    });


};



//Find all data by Limit
let FindAllDataByLimit = (myMongoClient) => {
    let MyDatabase = myMongoClient.db("school");
    let MyCollection = MyDatabase.collection("students");

    MyCollection.find().limit(2).toArray(function(error, result) {

        console.log(result);

    });

};


//Find all data by sort
let FindAllDataBySort = (myMongoClient) => {
    let MyDatabase = myMongoClient.db("school");
    let MyCollection = MyDatabase.collection("students");

    let sortPattern = {id: -1};

    MyCollection.find().sort(sortPattern).toArray(function(error, result) {

        console.log(result);

    });

};