/**
 * Intheritance allows you to establish relationship between classes. Its a Object Oriented concept
 * 
 */

 class Device{
     constructor(name){
         this.name = name
     }
     input(){
         console.log("keystroke")
     }
     output(){
         console.log("lcd")
     }
 }

 class AudioDevice extends Device{
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

 const auDevice = new AudioDevice("audio1","20KW","5Ghz")
 console.log(auDevice)