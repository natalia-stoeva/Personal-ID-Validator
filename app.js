//html elements
const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");
const userOutput = document.getElementById("displayContent");

//validate EGN
const checkEGN = (egnNum) => {
  const weigths = [2,4,8,5,10,9,7,3,6];
  const checksum = egnNum.substring(9, 10);

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
    return true
  } else {
    return false
  }
};

//return EGN information
const returnEGNinfo = (egn) => {  
  egn = userInput.value; 
  const validEgn = checkEGN(egn)

  console.log(egn.length)
  if (egn.length != 10){
    userOutput.innerHTML = `<p>Неправилен формат на ЕГН.</p>`
    console.log('Please enter a valid EGN')    
  } else if(!validEgn) {
    userOutput.innerHTML = `<p>ЕГН номерът е невалиден.</p>`
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
  userInput.value = ""  
}

// const validEGN = "6101057509"
// checkEGN(validEGN)









