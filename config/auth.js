// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '601724253537943', // your App ID
		'clientSecret' 	: '82eb78f4a6fe50939eafdf9e9504bb68', // your App Secret
		'callbackURL' 	: 'https://nodeauthentication.azurewebsites.net/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'J64ymbnjw0QND8OW6gmeq0CeU',
		'consumerSecret' 	: 'cvjG76ut6qbneD6bFSbNkCsNzqLVqtTqvkVztL3ARtjjT8sbDD',
		'callbackURL' 		: 'https://nodeauthentication.azurewebsites.net/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '173587755816-h9hmho9svan9tnkeoj1iqfjb7fqmbo95.apps.googleusercontent.com',
		'clientSecret' 	: 'e4oqtajdBx4KUlo65-WIWW4x',
		'callbackURL' 	: 'https://nodeauthentication.azurewebsites.net/auth/google/callback'
	}

};