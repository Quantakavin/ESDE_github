// Import controlers
const authController = require('./controllers/authController');
const userController = require('./controllers/userController');
const checkUserFn = require('./middlewares/checkUserFn');
const checkUserFnSolution = require('./middlewares/checkUserFnSolution');
const validationFn = require('./middlewares/validationFn');


// Match URL's with controllers
exports.appRoute = router => {

    router.post('/api/user/login', validationFn.validateLogin, authController.processLogin);
    router.post('/api/user/register', validationFn.validateRegister,authController.processRegister);
    router.post('/api/user/process-submission', checkUserFnSolution.checkForValidUserRoleUser, validationFn.validateSubmission, userController.processDesignSubmission);
    router.put('/api/user/', checkUserFnSolution.checkForValidUserRoleUser, validationFn.validateRole, userController.processUpdateOneUser);
    router.put('/api/user/design/',checkUserFnSolution.checkForValidUserRoleUser, validationFn.validateUpdateSubmission, userController.processUpdateOneDesign);
    router.post('/api/user/processInvitation/',checkUserFnSolution.checkForValidUserRoleUser, validationFn.validateInvitation, userController.processSendInvitation);

    router.get('/api/user/process-search-design/:pagenumber/:search?', checkUserFnSolution.checkForValidUserRoleUser,validationFn.validateSearchSubmission, userController.processGetSubmissionData);
    router.get('/api/user/process-search-user/:pagenumber/:search?', checkUserFnSolution.checkForValidUserRoleUser, validationFn.validateSearchUser, userController.processGetUserData);
    router.get('/api/user/process-search-user-design/:pagenumber/:search?', checkUserFnSolution.checkForValidUserRoleUser, validationFn.validateSearchByEmail, userController.processGetSubmissionsbyEmail);
    router.get('/api/user/:recordId', validationFn.validateProfile, userController.processGetOneUserData);
    router.get('/api/user/design/:fileId', validationFn.validateGetDesign, userController.processGetOneDesignData);

};