const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().split('\n');
const responseCode = Number(input[0]);
const interactorResponse = Number(input[1]);
const checkerResponse = Number(input[2]);
let response = -1;

if (interactorResponse === 0) {
    if (responseCode !== 0) response = 3;
    else response = checkerResponse;
}
if (interactorResponse === 1) response = checkerResponse;
if (interactorResponse === 4) {
    if (responseCode !== 0) response = 3;
    else response = 4;
}
if (interactorResponse === 6) response = 0;
if (interactorResponse === 7) response = 1;
if ([2, 3, 5].includes(interactorResponse)) response = interactorResponse;


console.log(response);