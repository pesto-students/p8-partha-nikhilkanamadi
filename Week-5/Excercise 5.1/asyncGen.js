// generator using async await

function doTask1 () {
    return new Promise(function (resolve) {
      setTimeout(()=> resolve('Task1 is completed!'),1000)
    })
  }
  function doTask2 () {
    return new Promise(function (resolve) {
      setTimeout(()=> resolve('Task2 is completed!'),2000)
    })
  }
  function doTask3 () {
    return new Promise(function (resolve) {
      setTimeout(()=> resolve('Task3 is completed!'),3000)
    })
  }

function* asyncGenrator(){
    yield doTask1();
    yield doTask2();
    yield doTask3();

}


const asyncFunction = async () =>{
    let asyncGen = asyncGenrator();
     for await (let value of asyncGen) {
        console.log(value);
     }
}

// async function using generators

asyncFunction();


