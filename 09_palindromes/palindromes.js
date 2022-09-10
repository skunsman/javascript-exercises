const palindromes = function (text) {
    const pali = text.toLowerCase().replace(/[^a-z0-9]/gi,'');

    // for (let i = 0; i < Math.floor(pali.length / 2); i++){

    //     console.log(pali[i] + ' | ' + pali[(pali.length - 1) - i]);
    //     if (!(pali[i] == pali[(pali.length - 1) - i]))
    //         return false;
    // }
    
    // return true;

    return (
        pali
          .split("")
          .reverse()
          .join("") == pali
      );
};

// Do not edit below this line
module.exports = palindromes;
