var index

for (index = 0; index < 1; ++index) {
    doSomething(getInput);
}

function getInput() {
    var input = require('./input');
}

/*
function getInput(callback) {
    var input = require('./input');
    callback();
}

getInput(function () {
    
});
*/

console.log('Testing: ' + input.game());