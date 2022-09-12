const palindromes = function (a) {
    const whitelistedChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","x","z"];
    let forwards = "";
    for(let char = 0; char < a.length; char++){
        if(whitelistedChars.includes(a[char].toLowerCase() )){
            forwards += a[char].toLowerCase();
        }
    }
    let backwards = "";
    for(let char = a.length - 1; char >= 0; char--){
        if(whitelistedChars.includes(a[char].toLowerCase() )){
            backwards += a[char].toLowerCase();
        }
    }
    return forwards === backwards;
};

// Do not edit below this line
module.exports = palindromes;
