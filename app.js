//html elements
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const userOutput = document.getElementById("displayContent");

//validate EGN
const checkEGN = (egnNum) => {

  // if(egnNum.length != 10){
  //   return false
  // }
  const weigths = [2,4,8,5,10,9,7,3,6];
  // const year = egnNum.substring(0, 2);
  // const month = egnNum.substring(2, 4);
  // const day = egnNum.substring(4, 6);
  const checksum = egnNum.substring(9, 10);
  console.log(checksum + "is the checksum from the string")

  let egnsum = 0;
  for(let i = 0; i < weigths.length; i++){    
    egnsum += egnNum.substring([i], [i +1]) * weigths[i];
  }
  let validChecksum = egnsum % 11;
  console.log(validChecksum + "is the validchecksum");
  if(validChecksum === 10){
    validChecksum = 0
  }
  console.log(validChecksum)
  if (checksum == validChecksum) {
    // console.log("ЕГН номерът е валиден");
    return true
  } else {
    // console.log("ЕГН номерът не е валиден");
    return false
  }
};

// const validEGN = "6101057509"
// checkEGN(validEGN)

//return EGN information
const returnEGNinfo = (egn) => {  
  egn = userInput.value;
  const validEgn = checkEGN(egn)
  console.log(validEgn)

  if(!validEgn){
    userOutput.innerHTML = `<p>ЕГН номерът е невалиден.</p>`
  } else if (validEgn.length != 10){
      `<p>Въвели сте невалидно ЕГН. Моля опитайте отново. </p>`
  } else {
      const yearNum = parseInt(egn.substring(0, 2));
      const monthNum = parseInt(egn.substring(2, 4));
      const day = parseInt(egn.substring(4, 6));
      const regionNum = parseInt(egn.substring(6,9));
      const sexNum = parseInt(egn.substring(8,9))
      //calculate the results
      const month = determineMonth(monthNum);
      const year = determineYear(monthNum, yearNum);
      const sex = determineSex(sexNum);
      const region = determineRegion(regionNum);
      //display the results
      userOutput.innerHTML = `<p>Лицето е родено на ${day} ${month} през ${year} в региона на ${region} и е от ${sex} пол. </p>`;

  }
  

  //calculate the year of birth
  // if(monthBorn > 40){
  //   monthBorn -= 40;
  //   yearBorn +=  2000;
  // } else if(monthBorn > 20){
  //   monthBorn -= 20;
  //   yearBorn += 1800;
  // } else {
  //   yearBorn += 1900
  // }




  
  //gender 
  // let sex = parseInt(egn.substring(8,9))
  // if(sex % 2 === 0){
  //   sex = "мъж"
  // } else {
  //   sex = "жена"
  // }

  
}



// const myegn = "9406054577"
// returnEGNinfo(validEGN)






