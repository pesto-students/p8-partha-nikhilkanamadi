function createIncrement(){

    let count = 0; //! 1.Declared in global scope.
    function increment(){
        count++;
        console.log(count); // 2.Checking count value in function #output : 1, 2, 3
    }

    let message = `Count is -${count}`; //3.Considering count variable declared in parent scope. As increment() is independent of this message. 
    function log(){
        console.log(message); // Output is 0 because of closure.
            //increment(); Output is 4 
            //console.log(message);Again Output is 0
    }

return [increment,log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();