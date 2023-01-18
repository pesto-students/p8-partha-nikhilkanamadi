// ! refactored stack in a way that referencing stack.items should be encapsulated.

function createStack(){
 const items = [];  //items is only accesible in function scope.
 return {
    push: function(item){
        items.push(item);
    },
    pop: function(){
        return items.pop();
    }
 };
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); //! 5
console.log(stack.items);  //! undefined  - Encapsulation is working.
