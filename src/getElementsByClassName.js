// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var nodesList = [];
  var search = function (element) {
  	if (_.contains(element.classList, className)) {
  		nodesList.push(element);
  	}
  	element.childNodes.forEach(function(childNode){
  		search(childNode);
  	});
  }
  search(document.body);
  return nodesList;
};
