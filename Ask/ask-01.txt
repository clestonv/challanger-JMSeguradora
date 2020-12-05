function shift(arr, position) {
    position -= arr.length * Math.floor(position / arr.length);
    arr.push.apply(arr, arr.splice(0, position));
    return arr;
}

let array = shift(A, -1)

console.log(array)