function rot13(str) {
    const  obj1 = {
     "A" : "N",
     "B" : "O",
     "C" : "P",
     "D" : "Q",
     "E" : "R",
     "F" : "S",
     "G" : "T",
     "H" : "U",
     "I" : "V",
     "J" : "W",
     "K" : "X",
     "L" : "Y",
     "M" : "Z",
     "N" : "A",
     "O" : "B",
     "P" : "C",
     "Q" : "D",
     "R" : "E",
     "S" : "F",
     "T" : "G",
     "U" : "H",
     "V" : "I",
     "W" : "J",
     "X" : "K",
     "Y" : "L",
     "Z" : "M"
    };
    let check = [];
    for (let i = 0 ; i < str.length ; i++) {
      if (obj1.hasOwnProperty(str[i]) == true) {
        check.push(obj1[str[i]])
    } else {
      check.push(str[i])
    }
    }
    return check.join("");
  }

  console.log(rot13("SERR CVMMN!"));