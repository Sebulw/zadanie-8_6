var a,
	b,
	value;

a = prompt("wpisz wartość a");
b = prompt("wpisz wartość b");
value = ((a * a) + (2 * a * b) - (b * b));
if (value > 0) {
	console.log("value is bigger than 0 and value is equal ", value);
}
else if (value < 0) {
	console.log("value is smaller than 0 and value is equal ", value);
}
else if (value == 0) {
	console.log("value is equal 0");
}
else {
	console.log("data incorrect");
}