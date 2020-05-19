const hive = require('@hiveio/hive-js');

hive.api.getAccounts(['equaliser'], function(err, result) {
	console.log(err, result);
});
