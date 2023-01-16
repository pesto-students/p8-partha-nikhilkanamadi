const trackRecord = {
    trackHeart : function (){
        return this.age + " " + this.heartrate +" "+ this.cardiotime;
    }
}

athlete = {
    age: 43,
    heartrate:"72/88",
    cardiotime: 143
}

// ! apply() method takes arguements in array
const report = trackRecord.trackHeart.apply(athlete);
console.log(report);