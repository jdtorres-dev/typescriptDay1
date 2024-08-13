"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayFilterData = exports.displayData = void 0;
let nationDetails = [];
const addDetails = (inputData) => {
    nationDetails.push(inputData);
    (0, exports.displayData)();
};
const displayData = () => {
    let list = document.getElementById("myList");
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
        nationDetails.forEach((element) => {
            let li = document.createElement("li");
            li.innerText = `Country: ${element.country}, City: ${element.city}, Population: ${element.population}`;
            if (list) {
                list.appendChild(li);
            }
        });
    }
};
exports.displayData = displayData;
const filterByCountry = (searchValue) => {
    const filterCountry = nationDetails.filter((countryInfo) => countryInfo.country.toLowerCase().includes(searchValue.toLowerCase()) ||
        countryInfo.city.toLowerCase().includes(searchValue.toLowerCase()));
    (0, exports.displayFilterData)(filterCountry);
};
const displayFilterData = (data) => {
    const list = document.getElementById("myList2");
    if (list) {
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }
        data.forEach((element) => {
            const li = document.createElement("li");
            li.innerText = `Country: ${element.country}, City: ${element.city}, Population: ${element.population}`;
            list.appendChild(li);
        });
    }
};
exports.displayFilterData = displayFilterData;
//TASK 2
function isValidISBN(isbn) {
    isbn = isbn.toString();
    if (isbn.length !== 10) {
        return false;
    }
    var sum = 0;
    for (let i = 0; i < 10; i++) {
        if (i < 9) {
            if (!/^\d$/.test(isbn[i])) {
                return false;
            }
            sum += (parseInt(isbn[i], 10) * (i + 1));
        }
        else {
            if (isbn[i] === 'X') {
                sum += 10 * 10;
            }
            else if (/^\d$/.test(isbn[i])) {
                sum += (parseInt(isbn[i], 10) * 10);
            }
            else {
                return false;
            }
        }
    }
    return (sum % 11 === 0);
}
var inputISBN = 1112223339;
console.log(`ISBN: ${inputISBN} = ${isValidISBN(inputISBN)}`);
//TASK 3 
function changeString(input) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const vowels = 'aeiou';
    const nextLetter = (word) => {
        if (alphabet.includes(word)) {
            const nextIndex = (alphabet.indexOf(word) + 1);
            return alphabet[nextIndex];
        }
        return word;
    };
    return input.split('').map(char => {
        const lowerChar = char.toLowerCase();
        const nextChar = nextLetter(lowerChar);
        if (vowels.includes(nextChar)) {
            return nextChar.toUpperCase();
        }
        else if (alphabet.includes(nextChar)) {
            return nextChar.toLowerCase();
        }
        else {
            return char;
        }
    }).join('');
}
const output = changeString("a1");
console.log(output);
//TASK 4
function moveZero(listOfAnyObj) {
    const nonZeroElements = listOfAnyObj.filter(element => element !== 0);
    const zeroCount = listOfAnyObj.length - nonZeroElements.length;
    const zeros = new Array(zeroCount).fill(0);
    return nonZeroElements.concat(zeros);
}
const result = moveZero([897, 1, 0, 0, 0, 0, 1, 3, "a"]);
console.log(result);
