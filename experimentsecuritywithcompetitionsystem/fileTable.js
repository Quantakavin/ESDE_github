AWS = require("aws-sdk"),
    DDB = new AWS.DynamoDB({
        apiVersion: "2012-08-10",
        region: "us-east-2"
    });
(function createADataBaseTable(){
    var params = {
        AttributeDefinitions: [
            {
                AttributeName: "design_title",
                AttributeType: "S"
            },
            {
                AttributeName: "design_description",
                AttributeType: "S"
            }
        ],
        KeySchema: [
            {
                AttributeName: "file_id",
                KeyType: "RANGE"
            },
            {
                AttributeName: "cloudinary_file_id",
                KeyType: "RANGE"
            },
            {
                AttributeName: "created_by_id",
                KeyType: "RANGE"
            }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5
        },
        TableName: "file"
    };
    DDB.createTable(params, function(err, data){
        console.log(err, data);
    });
    })();