JS Data types
    Primitive - immutable - passed by value
        String
        Boolean
        Number
            NaN
        Undefined
        null
    Complex - mutable - passed by reference
        Object
        Array
        Functions - First Class
            Use it just like any other variable

const apples = {
    apple1: "green apple"
    apple2: "red apple"
}
const box - "yellow apple"
const box - "yellow apple"
console.log(apples)
console.log(box)


let wizard1 = "Harry"
let wizard2 = wizard1

wizard2 = "Dimbledore"



Types of functions
    2 ways to declare a function
        1. Function Declarations
            function myFunction(){
                console.log("I have been hoisted")
            }
        2. Function Expressions
            const function myOtherFunction = () => {
                console.log("I wont be run")
            }

            Anonymous - a function without a name
                form.addEventListener("submit", () )

            Callback - a function passed to another as a parameter
                function alertHi(){
                    console.log("hi")
                }
                function countTo2ThenSayHi(callback){
                    setInterval(callback, 2000)
                }
                countTo2ThenSayHi(alertHi)

            Methods - It's a function that's a property of an object
                const person = {
                    name: "Rick",
                    speak: () = =>
                }

                const age - 20
                

