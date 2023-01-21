const hasDuplicate = array => new Set(array).size != array.length; //boolean response
const example = [1,0. -1, -2, 0, 1,2, -1];
console.log('duplicate exists -', hasDuplicate(example));