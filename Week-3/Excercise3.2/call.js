const fellow = {
  fellowMetrics: function (){
       return this.fullName + " " + this.creditScore + " " + this.payDueDate;
    }
}

const clientOne = {
    fullName:'Nikhil Kanamadi',
    creditScore:900,
    payDueDate:'19th Jan'
}

const clientTwo = {
    fullName:'Ramesh Kulkarni',
    creditScore:800,
    payDueDate:'23rd Jan'
}

console.log('Calling individual client:');
// ! call() method takes arguements seperately
console.log(fellow.fellowMetrics.call(clientOne));
console.log(fellow.fellowMetrics.call(clientTwo));

// !Output
// Nikhil Kanamadi 900 19th Jan
// Ramesh Kulkarni 800 23rd Jan