module.exports = function reverse (n) {
    let result,
    buf,
    len,
    str = n.toString(10),
    arr = str.split('');

if (arr.length % 2 != 0) {
    len = arr.length - 1;
} else {
    len = arr.length;
}

for (let i = 0; i < len / 2; i++) {
    buf = arr[i];
    arr[i] = arr[len - i];
    arr[len - i] = buf;
}
arr = arr.join('');

result = parseInt(arr);

return result;
}
