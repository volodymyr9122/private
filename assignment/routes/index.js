const express = require('express');
const router = express.Router();

const company_controller = require('../controller/companyController');

/* GET users listing. */

router.get('/companies', company_controller.all_companies);

router.post('/companies', company_controller.add_company);

router.get('/companies/:id', company_controller.company);

router.put('/companies/:id', company_controller.company_update);

router.delete('/companies/:id', company_controller.company_delete);

/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

module.exports = router;