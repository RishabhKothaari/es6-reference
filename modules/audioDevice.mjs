import { Device } from './device.mjs'
export class AudioDevice extends Device{
    constructor(name,power,frequency){
        super(name) //important to all super
        this.power = power
        this.frequency = frequency
    }
    input(){
        console.log("speech")
    }
    output(){
        console.log("audio")
    }
}