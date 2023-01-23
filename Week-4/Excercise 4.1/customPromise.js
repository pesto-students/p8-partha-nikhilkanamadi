const promiseState = {
  FULLFILLED: "FULLFILLED",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED",
};

class CustomPromise {
 //! constructor function to set values of promiseState
  constructor(fn) {
    this.promiseState = promiseState.FULLFILLED;
    this.resolverFunction = this.resolverFunction.bind(this);
    this.rejectorFunction = this.rejectorFunction.bind(this);
    this.thenFunction = null;
    this.catchFunction = null;
    fn(this.resolverFunction, this.rejectorFunction);
  }

  //! custom resolve function
  resolverFunction(resolvedResponse) {
    if (this.promiseState === promiseState.FULLFILLED) {
      this.thenFunction && this.thenFunction(resolvedResponse);
    }
    this.promiseState = promiseState.RESOLVED;
  }

  // ! custom reject function   
  rejectorFunction(rejectResponse) {
    if (this.promiseState === promiseState.FULLFILLED) {
      this.catchFunction && this.thenFunction(rejectResponse);
    }
    this.promiseState = promiseState.REJECTED;
  }
 //! custom then function   
  then(thenFunction) {
    this.thenFunction = thenFunction;
    return this;
  }
 //! custom catch function
  catch(catchFunction) {
    this.catchFunction = catchFunction;
    return this;
  }
}

// !function to get random number 
const getRandomNumber = () => {
  return new CustomPromise((resolve, reject) => {
    let randomNumber = parseInt(Math.random() * 100);
    setTimeout(() => {
      if (randomNumber % 5 === 0) {
        reject(`${randomNumber} rejected.`);
      }
      resolve(`${randomNumber} resolved.`);
    }, randomNumber * 10);
  });
};

// ! calling custom method for response
getRandomNumber()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });