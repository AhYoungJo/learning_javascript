const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
// const id1 = arr[0][0].id;

const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;

console.log(id1, id2, id3);
