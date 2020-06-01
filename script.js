// https://github.com/awsdocs/aws-doc-sdk-examples/tree/master/javascript/example_code/sns
var AWS = require('aws-sdk');
var credentials = new AWS.SharedIniFileCredentials({profile: 'snuser'});
AWS.config.credentials = credentials;
