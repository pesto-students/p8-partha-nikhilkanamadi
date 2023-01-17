//Example demonstrate binding value to existing functions

const orderDetails = {

    userFirstName:"Nikhil",
    userLastName:"Kanamadi",
    orderedItem:'Watch',
    price:100,
    itemDetails : function (){
        return `Order details: ${this.orderedItem} - ${this.price}`;
    }

}

const updateRequest = {
    orderedItem:'iPhone 14 Max Pro',
    price:999,
}

console.log('Prior update -', orderDetails.itemDetails()); // Watch - 100
let updateDetails = orderDetails.itemDetails.bind(updateRequest);
console.log('After update  -',updateDetails()); //iPhone 14 Max Pro - 999

