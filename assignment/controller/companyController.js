const Log = require('log'),
    log = new Log('info');

const Company = require('../model/company');

// Display list of all companies
exports.all_companies = ((req, res, next) => {

    Company.find({})
        .then(company_list=>res.json(company_list))
        .catch(err=>console.log(err))
});




// Display definite  company
exports.company = ((req, res, next) => {

    Company.findById({
            _id: req.params.id
        })
        .then(company_list=>res.json(company_list))
        .catch(err=>console.log(err))
});



//Add company
exports.add_company = ((req, res, next) => {

    let company = new Company({
        name: req.body.name,
        earnings: req.body.earnings,
        childCompanies: req.body.childCompanies
    })

    company.save((err) => {
        if (!err) {
            res.statusCode = 201;
            log.info("new company created");
            return res.send(company);
        } else {

            if (err.name === 'ValidationError') {
                res.statusCode = 400;
                res.send({ error: 'Validation error' });
            } else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
            }
            log.error('Internal error (%d): (%s)', res.statusCode, err.message);

        }
    });
});

//Update company
exports.company_update = ((req, res, next) => {

    Company.findById({
            _id: req.params.id
        })
        .then((company, err) => {
            if (!company) {
                res.statusCode = 404;
                return res.send({ error: 'Not found' })
            }
      if(req.body){
          company.name = req.body.name,
            company.earnings = req.body.earnings,
            company.childCompanies = req.body.childCompanies

         }
           company.save((err) => {
                if (!err) {
                    log.info("company updated");
                    res.statusCode = 200;
                    return res.send(company);
                } else {

                    if (err.name === 'ValidationError') {
                        res.statusCode = 400;
                        res.send({ error: 'Validation error' });
                    } else {
                        res.statusCode = 500;
                        res.send({ error: 'Server error' });
                    }
                    log.error('Internal error (%d): (%s)', res.statusCode, err.message);

                }
            });
        });
});

//delete company
exports.company_delete = ((req, res, next) => {

    Company.findById({
            _id: req.params.id
        })
        .then((company, err) => {
            if (!company) {
                res.statusCode = 404;
                return res.send({ error: 'Not found' })
            }

            company.remove((err) => {
                if (!err) {
                    log.info("company removed");
                    res.statusCode = 204;
                    return res.send({status: 'OK'});
                } else {
                    res.statusCode = 500;
                    log.error('Internal error (%d): (%s)', res.statusCode, err.message);
                    return res.send({ error: 'Server error' });
                }
            });
        });
});

exports.register = ((req,res) => {
    res.send({
        message: `User ${req.body.email} was registered`
    })
})
