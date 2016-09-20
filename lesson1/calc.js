var values = [6, 2, 8, 4, 7, 5, 9];
var operators = ["+", "-", "*", "/", "-", "+"];
var result = 0;


var sum = function(a, b) {
	return a+b;
};
var min = function(a, b) {
	return a-b;
};
var mnozh = function(a, b) {
	return a*b;
};
var del = function(a, b) {
	return a/b;
};

for (var i = 0; i < operators.length; i++) {
	if (operators[i] == "*") {
		var m = mnozh(values[i], values[i+1]);
		operators.splice(i, 1);
		values.splice(i, 2, m);
		i--;
	}
	else if (operators[i] == "/") {
		var d = del(values[i], values[i+1]);
		operators.splice(i, 1);
		values.splice(i, 2, d);
		i--;
	}
}
for (var o = 0; 0 < operators.length; o++) {
	if (operators[o] == "+") {
		var s = sum(values[o], values[0+1]);
		operators.splice(o, 1);
		values.splice(o, 2, s);
		o--;
	}
	else if (operators[o] == "-") {
		var v = min(values[o], values[o+1]);
		operators.splice(o, 1);
		values.splice(o, 2, v);
		o--;
	}
}
result = values[0];
console.log("Результат = " + result);
