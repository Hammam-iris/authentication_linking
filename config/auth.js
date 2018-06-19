// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '1739975719426934', // your App ID
		'clientSecret' 	: '21c3de196beaa795915ec061574a3b70', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'J64ymbnjw0QND8OW6gmeq0CeU',
		'consumerSecret' 	: 'cvjG76ut6qbneD6bFSbNkCsNzqLVqtTqvkVztL3ARtjjT8sbDD',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '173587755816-h9hmho9svan9tnkeoj1iqfjb7fqmbo95.apps.googleusercontent.com',
		'clientSecret' 	: 'e4oqtajdBx4KUlo65-WIWW4x',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};