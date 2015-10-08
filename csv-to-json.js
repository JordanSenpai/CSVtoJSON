var fs     = require('fs')
var input  = fs.readFileSync(process.argv[2], 'utf-8')
var output = process.argv[3]
var arr    = input.split('\n')


// key generation
var keys = arr[0].split(',')


// object generation
var json = []

for (var i = 1; i < arr.length; i++) {
	var helper ={}
	var csv    = arr[i].split(',')
	for (var j = 0; j < keys.length; j++) {
		helper[keys[j]] = csv[j]
	};
	json.push(helper)
	helper = {}
};

console.log('Output: ', json)
fs.writeFileSync(output, JSON.stringify(json))