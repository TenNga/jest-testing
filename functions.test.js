const sort= require('./functions');

test('Sort the array in Increasing Order:', () => {
    expect(sort.sortUp([2,5,1,23,3,0,12])).toEqual([0,1,2,3,5,12,23]);
});

test('Sort must return empty array when passed empty array:', () => {
    expect(sort.sortUp([])).toEqual([]);
});

test('Sort the array in Decreasing Order: ', () => {
    expect(sort.sortDown([1,2,3])).toEqual([3,2,1]);
});

test('Reverse String: ', () => {
    expect(sort.reverseString("apple")).toBe("elppa");
});

