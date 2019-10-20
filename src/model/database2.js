const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const equipoSchema = Schema ({
	status:{
		type:Boolean,
		default: false
	}
});

module.exports=mongoose.model('equipo',equipoSchema);
