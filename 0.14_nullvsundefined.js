let foo = null

console.log(foo)

//null expresses the lack of identification for a variable. it means literally 0, no string , object, number, boolean, or symbol is applicable

typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true

//unidentified is something that was never declared. 