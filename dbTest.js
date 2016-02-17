var db = require('./models');

// create a user
db.user.create({
	name: 'Kat',
	email: 'kat@gmail.com',
	password: 'boobaz'
}).then(function(user) {
	console.log(user.get());
	// find a user
	db.user.findById(1).then(function(user) {
		console.log(user.get());
	});
});