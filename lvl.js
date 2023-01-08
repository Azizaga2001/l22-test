function emotify(params1) {
    let arr = params1.split(' ')
    if (arr[2] === 'ulibnutsa') {
        arr[2] = ':D'
    }
    else if (arr[2] === 'qrustno') {
        arr[2] = ':('
    }
    return arr.join(' ')
}

console.log("1)", emotify('zastav menya ulibnutsa'))
console.log("1)", emotify('zastav menya qrustno'))

console.log('        ');
console.log('--------');
console.log('        ');

function mean(params2) {
    let sum = 0
    for (let x of params2) {
        sum += x
    }
    console.log("2)", (sum / params2.length).toFixed(2))
}

console.log("2)", mean([1, 2, 3, 4]))

console.log('        ');
console.log('--------');
console.log('        ');

function set(params3) {
    function uniq(item, index, arr) {
        return params3.indexOf(item) === index
    }

    let newArr = params3.filter(uniq)

    console.log("3)", newArr)
}

console.log("3)", set([1, 2, 3, 3, 4, 4]))

console.log('        ');
console.log('--------');
console.log('        ');

let arr = [3, 2, 5, 6];

function arraySum(params4) {
    let sum = 0;
    for (let i = 0; i < params4.length; i++) {
        sum += params4[i];
    }
    console.log("4)", sum);
}
console.log("4)", arraySum(arr))

console.log('        ');
console.log('--------');
console.log('        ');

let fruit = ['арбузы', 'бананы', 'Вишня'];

function sortByLength(params5) {
    return fruit.sort();
}

console.log("5)", sortByLength(fruit));