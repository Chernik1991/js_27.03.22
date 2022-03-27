import React from 'react';
import './App.css';

console.log (typeof "yo") //"string"
console.log (typeof 10)//"number"
console.log (typeof typeof 10)//"string"
console.log (typeof NaN)//"number"
console.log (Number.isNaN(NaN))//"true"
const infinity=10/0
console.log (typeof infinity)//"true"
console.log(typeof {})//object
console.log(typeof [])//object
console.log(Array.isArray([])) //true
console.log(typeof (()=>{})) //function

let user={ //#345
    name:"bob",
    age:10,
    isMarried:false,
    friends:["Alex","Jon"]


}
const donald={...user,friends: [...user.friends]}
console.log(donald)
//
// const donald={...user}
donald.name="Donald"
// console.log(donald===user)
// console.log(donald)
user.friends.push("Ann")
console.log(user)
console.log(donald)
const clone=[]
for (let i=0; i<user.friends.length;i++){
            const str=<li>${user.friends[i]}</li>;
    clone.push(str)
}
console.log(clone)

// www.youtube.com/watch?v=qMRhXenpz6Q&ab_channel=BoringFrontend
//
// const ted=user
// ted.age=12
// ted.name="ted"
// console.log(user.age)
// console.log(user.name)
// const zet={...user}
// zet.age=15
// console.log(user.age)
//




function App() {
    return (
        <>
    </>
    );
}

export default App;
