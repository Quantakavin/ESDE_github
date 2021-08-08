var validator=require('validator');
var validationFn={
validateRegister:function(req,res,next){
//Validation code to check register form input values
//return response with status 400 if validation fails
    var fullName = req.body.fullName;
    var email = req.body.email;
    var password = req.body.password;
    fullnameRegex = new RegExp(`^[a-zA-Z\s,']+$`);
    passswordRegex = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$`);
    if (fullnameRegex.test(fullName) && passswordRegex.test(password) && validator.isEmail(email)) {
        next()
    } else {
        res.status(400);
        res.send(`{"Message":"Error!"}`)
    }


},

validateLogin:function(req,res,next){
    //Validation code to check register form input values
    //return response with status 400 if validation fails
        //var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        textFieldRegex = new RegExp(`^[a-zA-Z0-9 ,]+$`);
        if (textFieldRegex.test(password) && validator.isEmail(email)) {
            next()
        } else {
            res.status(400);
            res.send(`{"Message":"Error!"}`)
        }
    
    
},

validateSubmission:function(req,res,next){
    //Validation code to check register form input values
    //return response with status 400 if validation fails
        var designTitle = req.body.designTitle;
        var designDescription = req.body.designDescription;
        var userId = req.body.userId;
        userIdRegex = new RegExp(`^[1-9][0-9]*$`);
        //textFieldRegex = new RegExp(`^[a-zA-Z\s,']+$`);
        textFieldRegex = new RegExp(`^[a-zA-Z0-9 ,]+$`);
        if (textFieldRegex.test(designTitle) && textFieldRegex.test(designDescription) && userIdRegex.test(userId)) {
            next()
        } else {
            res.status(400);
            res.send(`{"Message":"Error!"}`)
        }
    
    
},

validateUpdateSubmission:function(req,res,next){
    //Validation code to check register form input values
    //return response with status 400 if validation fails
        var designTitle = req.body.designTitle;
        var designDescription = req.body.designDescription;
        var fileId = req.body.fileId;
        userIdRegex = new RegExp(`^[1-9][0-9]*$`);
        //textFieldRegex = new RegExp(`^[a-zA-Z\s,']+$`);
        textFieldRegex = new RegExp(`^[a-zA-Z0-9 ,]+$`);
        if (textFieldRegex.test(designTitle) && textFieldRegex.test(designDescription) && userIdRegex.test(fileId)) {
            next()
        } else {
            res.status(400);
            res.send(`{"Message":"Error!"}`)
        }
    
    
},



validateInvitation:function(req,res,next){
    //Validation code to check register form input values
    //return response with status 400 if validation fails
        var recipientEmail = req.body.recipientEmail;
        var recipientName = req.body.recipientName;
        var userId = req.body.userId;
        //textFieldRegex = new RegExp(`^[a-zA-Z\s,']+$`);
        textFieldRegex = new RegExp(`^[a-zA-Z0-9 ,]+$`);
        userIdRegex = new RegExp(`^[1-9][0-9]*$`);
        if (textFieldRegex.test(recipientName) && userIdRegex.test(userId) && validator.isEmail(recipientEmail)) {
            next()
        } else {
            res.status(400);
            res.send(`{"Message":"Error!"}`)
        }
    
    
},

/*
validateUserid: function (req, res, next) {
//Validation code to check userid from req.params
//return response with status 400 if validation fails
    var userid = req.params.userid;
    reUserid = new RegExp(`^[1-9][0-9]*$`);
    if (reUserid.test(userid)) {
        next();
    } else {
        res.status(400);
        res.send(`{"Message":"Error!"}`)
    }
},
*/

validateSearchUser:function(req,res,next){
    //Validation code to check register form input values
    //return response with status 400 if validation fails
        var search = req.params.search;
        var pageNumber = req.params.pagenumber;
        userIdRegex = new RegExp(`^[1-9][0-9]*$`);
        //textFieldRegex = new RegExp(`^[a-zA-Z\s,']+$`);
        textFieldRegex = new RegExp(`^[a-zA-Z0-9 ,]+$`);
        if (textFieldRegex.test(search)&& userIdRegex.test(pageNumber)) {
            next()
        } else {
            res.status(400);
            res.send(`{"Message":"Error!"}`)
        }
    
    
},

validateSearchSubmission:function(req,res,next){
    //Validation code to check register form input values
    //return response with status 400 if validation fails
        var pageNumber = req.params.pagenumber;
        var search = req.params.search;
        var userId = req.body.userId;
        //textFieldRegex = new RegExp(`^[a-zA-Z\s,']+$`);
        textFieldRegex = new RegExp(`^[a-zA-Z0-9 ,]+$`);
        userIdRegex = new RegExp(`^[1-9][0-9]*$`);
        if (textFieldRegex.test(search) && userIdRegex.test(userId) && userIdRegex.test(pageNumber)) {
            next()
        } else {
            res.status(400);
            res.send(`{"Message":"Error!"}`)
        }
    
    
},

validateSearchByEmail:function(req,res,next){
    //Validation code to check register form input values
    //return response with status 400 if validation fails
        var search = req.params.search;
        var pageNumber = req.params.pagenumber;

        userIdRegex = new RegExp(`^[1-9][0-9]*$`);

        if (validator.isEmail(search) && userIdRegex.test(pageNumber)) {
            next()
        } else {
            res.status(400);
            res.send(`{"Message":"Error!"}`)
        }
    
    
},

validateRole:function(req,res,next){
    //Validation code to check register form input values
    //return response with status 400 if validation fails
        var recordId = req.body.recordId;
        var newRoleId = req.body.roleId;
        userIdRegex = new RegExp(`^[1-9][0-9]*$`);

        if (userIdRegex.test(recordId) && userIdRegex.test(newRoleId)) {
            next()
        } else {
            res.status(400);
            res.send(`{"Message":"Error!"}`)
        }
    
    
},

validateProfile:function(req,res,next){
    //Validation code to check register form input values
    //return response with status 400 if validation fails
        var recordId = req.params.recordId;

        userIdRegex = new RegExp(`^[1-9][0-9]*$`);

        if (userIdRegex.test(recordId)) {
            next()
        } else {
            res.status(400);
            res.send(`{"Message":"Error!"}`)
        }
    
    
},
validateGetDesign:function(req,res,next){
    //Validation code to check register form input values
    //return response with status 400 if validation fails
        var recordId = req.params.fileId;

        userIdRegex = new RegExp(`^[1-9][0-9]*$`);

        if (userIdRegex.test(recordId)) {
            next()
        } else {
            res.status(400);
            res.send(`{"Message":"Error!"}`)
        }
    
    
},


sanitizeResult:function(result){
//Sanitize each record’s values from the database result

    for (i=0; i< result.length;i++) {
        var row = result[i];
        console.log(row);
        for (var key in row) {
            val = row[key];
            if (typeof val === "string") {
                row[key] = validator.blacklist(val, '\<|\>|\'|\"|\&');
                //row[key] = validator.escape(val);
            }

        }
    }
}


}
module.exports=validationFn;