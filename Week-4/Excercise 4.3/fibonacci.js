// Fibonacci Series with Iterator

const fibonacci = (number) => ({
    [Symbol.iterator]: () => {
            let [i, oldValue , newValue] = [1, 0, 0];
            return {
                next: () => {
                    if( i++ <=  number){
                        [oldValue, newValue] = [newValue , (oldValue + newValue) || 1 ];
                        return { value: oldValue , done: false};
                    }
                    else{
                        return {done : true}
                    }
                }
            }
    }
});

for (let num of fibonacci(7)) {
    console.log(num);
}