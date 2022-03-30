const colors = require('./nested');

function main() {
	console.log(colors.red('this is red'));
	console.log(colors.red.bold('this is bold red'));
}

main();
