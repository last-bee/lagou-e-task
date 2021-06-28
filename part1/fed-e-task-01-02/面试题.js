var list = [[1, 2, 3], [3, 2,1], [3, 4,6]]
console.log(Math.max(...list.map(arr => arr.reduce((m, n) => m + n), 0)))