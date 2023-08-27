// spread
let number = [ 1,2,3 ];
let newNumber = [ 4,5,6 ];
console.log([...number,...newNumber]);

// live code
// 1

function tahunKabisat(year){
    if( year%4 === 0 ){
        return console.log(`${year} adalah tahun kabisat`);
    } else return console.log(`${year} bukan tahun kabisat`);
}

tahunKabisat(2015);
tahunKabisat(2012);

// 2 
function hapusSimbol(string) {
    let cleaned = '';
    for (let char of string) {
        if (char.match(/[a-z0-9]/gi)) {
            cleaned += char;
        }
    }
    return cleaned;
}

// TEST CASE
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100

// 3
function MajoritySweeper(arr){
    const count = {};
    let modus = [];
    let max = 0;
    for(let value of arr){
        count[value] = count[value]? count[value] + 1 : 1;
        if( count[value] > max ){
            max = count[value];
            modus = [value];
        } else if (count[value] === max) modus.push(value);
    }
    // pop si modus
    for( let value of modus ){
        let idx = arr.indexOf(value);
        while( idx !== -1 ){
            arr.splice(idx,1);
            idx = arr.indexOf(value);
        }
    }
    return arr;
}

console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])); // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])); // [ 22, 22, 2000 ]
console.log(MajoritySweeper([2, 2])); // []
console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])); // [ 1, 1, 1, 2, 2 ]
