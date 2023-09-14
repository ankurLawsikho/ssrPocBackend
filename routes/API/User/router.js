const router      = require('express').Router()
const controller  = require('./controller')


router.post('/create', controller.create);
router.post('/get-all-user', controller.getAllUser);

router.post('/add-course', controller.createCourse);
router.get('/get-all-course', controller.getAllCourse);

router.post('/user-login', controller.login);


// Sign Related Apis



module.exports = router