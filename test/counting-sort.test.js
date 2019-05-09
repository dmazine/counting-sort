const sort = require('../src/counting-sort');

test('test case #1', () => {
    const arr = [ 4, 2, 3, 1, 4 ];
    sort(arr);
    expect(arr).toEqual([ 1, 2, 3, 4, 4]);
});
