const sort= require('./functions');

test('Sort the array in Increasing Order:', () => {
    expect(sort.sortUp([2,5,1,23,3,0,12])).toEqual([0,1,2,3,5,12,23]);
});
