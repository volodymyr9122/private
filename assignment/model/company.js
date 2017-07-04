const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/*const Earnings = Schema({
   annualEarnings:{
       type:Number,
       min: 0, 
       required:true
   }
});*/


const CompanySchema = new Schema({
    name: {type: String, required: true},
    earnings:/*[Earnings]*/{type: Number, required: true},
    childCompanies:  [{type: Schema.ObjectId, ref: 'Company'}]
});



const autoPopulateLead = function(next) {
  this.populate('childCompanies');
  next();
};

CompanySchema.
  pre('findOne', autoPopulateLead).
  pre('find', autoPopulateLead);

//Initializing model
const Company = mongoose.model('Company', CompanySchema,'Companys');


//Export model
module.exports = Company;




