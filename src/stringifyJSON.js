// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number') {
  	return obj = obj.toString();
  } else if (obj === null) {
  	return 'null';
  } else if (typeof obj === 'boolean') {
  	return obj ? 'true' : 'false';
  } else if (typeof obj === 'string') {
  	return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
  	var outputArr = obj.reduce(function(arr, ele) {
  		arr.push(stringifyJSON(ele));
  		return arr;
  	}, []);
  	return '[' + outputArr.join(',') + ']';
  } else if (typeof obj === 'object') {
  	var outputArr = Object.keys(obj).reduce(function(arr, key){
  		if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
  			arr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
  		}
  		return arr;
  	}, []);

  	return '{' + outputArr.join(',') + '}';
  }
};
