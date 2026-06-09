function add7(x){
    return 7+x;
}
console.log(add7(10))


function multiply(a,b){
    return a*b;
}

console.log(multiply(2,3))

function capitilize(s){
   
    return s.charAt(0).toUpperCase()+ s.slice(1).toLowerCase();
}
console.log(capitilize("abcd"))
console.log(capitilize("ABCD"))
console.log(capitilize("aBcd"))

function lastLetter(s){
    let l = s.length
    return s[l-1];
}
console.log(lastLetter("abcd"))
