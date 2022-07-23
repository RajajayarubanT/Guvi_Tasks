
let log = console.log

// 3. 
class Person {
    constructor(name, age, gender, phone, location) {

        this.name = name;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.location = location;
    }

    changeEntities(key, entity) {
        this[key] = entity
    }

}

const person = new Person('Raja', 21, 'Male', 12345678, 'Theni')

person.changeEntities('name', 'Gokul')

log(person)

// 4.

class UberRide {
    constructor(id, start, end, defaultPricePerKm = 5) {

        this.id = id || 'gest_ride';
        this.start = start || 0
        this.end = end || 0
        this.defaultPricePerKm = defaultPricePerKm
        this.distanceCovered = 0;
        this.ridePrice = 0;
    }

    startRide(start) {
        this.start = start
    }

    endRide(end) {
        this.end = end
        return this.calculatePrice()
    }


    calculatePrice() {
        this.distanceCovered = this.end - this.start;

        this.ridePrice = this.distanceCovered * this.defaultPricePerKm;

        return this.ridePrice
    }

}

const Uber = new UberRide()

Uber.startRide(10)
Uber.endRide(15)

log('Rs. ' + Uber.ridePrice)