const mongoose=require('mongoose');
const bcrypt=require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const userSchema = Schema({
	email:{type: String},
	name:{type: String},
	user:{type: String},
	password:{type: String},
	code:{type: String}
});

module.exports = mongoose.model('users',userSchema);
