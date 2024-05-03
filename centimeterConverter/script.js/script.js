const feetToCent = (feet, inch) => {
   if (feet < 0){
       console.log('Please enter a feet value greater than 0!')
       return
   }
   if (inch < 0 || inch >= 12){ // Error: changed > to >=, will not allow 12 inches as valid input
       console.log('Please enter an inches value between 0 and 12!')
       return
   }

   const feetToInch = feet * 12
   const totalInch = feetToInch + inch
   const centimeters = (totalInch * 2.54).toFixed(2)
   let isPlural = 'es'

   if (inch == 1){ // Error: using '==' instead of '==='
       isPlural = ''
   }

   return `${feet} feet and ${inch} inch${isPlural} is equal to ${centimeters} centimeters`
}

const centimeters = feetToCent(5, 11) // Changed from 13 to 11 to prevent triggering the error message

if (centimeters === undefined){ // This logic is fine, but may confuse due to earlier potential bugs
   console.log('There was an error! Try again!')
} else {
console.log(centimeters)
}



///this code has so many inonsistencies and errors it needs to be fixed i will try this again to fix the errors and also fix its functioalities