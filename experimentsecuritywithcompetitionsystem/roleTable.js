var
  AWS = require("aws-sdk"),
  DDB = new AWS.DynamoDB({
    apiVersion: "2012-08-10",
    region: "us-east-1"
  });

(function createADataBaseTable(){
  var 
      params = {
        AttributeDefinitions: [
          {
            AttributeName: "role_name",
            AttributeType: "S"
          }
        ],
        KeySchema: [
          {
            AttributeName: "role_id",
            KeyType: "I"
          },
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5
        },
        TableName: "role"
  };
  DDB.createTable(params, function(err, data){
      console.log(err, data);
  });
})();
