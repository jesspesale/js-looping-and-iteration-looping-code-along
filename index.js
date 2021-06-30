// Code your solutions in this file

// const names = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(names, event) {
    let thankYou = [ ]
    for (let i=0; i < names.length; i++) {
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYou;
}


function countDown(integer) {
    while (integer > 0) {
        console.log(integer);
        integer--
    }
console.log(integer);
}

