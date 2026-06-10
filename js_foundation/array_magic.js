// question 1

function camelize(s){
    let t = "";
    let check = 0;
    for(let i =0 ; i<s.length; i++){
      if(s[i]==='-'){
        check =1;
        continue;
      } 
      else{
        if(check===1){
            t+=s[i].toUpperCase();
            check = 0;
        }
        else{
            t+=s[i]
        }
      } 
    }
    return t;
}
console.log(camelize("-webkit-transition"))


