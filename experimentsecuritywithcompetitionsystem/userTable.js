var 
    AWS = require("aws-sdk"),
    DDB = new AWS.DynamoDB({
        apiVersion: "2012-08-10",
        region: "us-east-1"
    });

(function createADataBaseTable(){
var params = {
    AttributeDefinitions: [
       {
      AttributeName: "fullname", 
      AttributeType: "S"
     }, 
     {
      AttributeName: "email", 
      AttributeType: "S"
     },
     {
      AttributeName: "password", 
      AttributeType: "HASH"
     }, 
    ], 
    KeySchema: [
       {
      AttributeName: "user_id", 
      KeyType: "I"
     }, 
    ], 
    ProvisionedThroughput: {
     ReadCapacityUnits: 5, 
     WriteCapacityUnits: 5
    }, 
    TableName: "user"
   };
DDB.createTable(params, function(err, data){
    console.log(err, data);
});
})();