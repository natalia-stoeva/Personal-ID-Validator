const determineMonth = (num) => {
    let month;
    switch(num){
        case 1:
            month = "Януари";
            break;
        case 2:
            month = "Февруари";
            break;
        case 3:
            month = "Март";
            break;
        case 4:
            month = "Април";
            break;
        case 5:
            month = "Май";
            break;
        case 6:
            month = "Юни";
            break;
        case 7:
            month = "Юли";
            break;
        case 8:
            month = "Август";
            break;
        case 9:
            month = "Септември";
            break;
        case 10:
            month = "Октомври";
            break;
        case 11:
            month = "Ноември";
            break;
        case 12:
            month = "Декември";
            break;
        default:
                false;                     
    }
    return month;
};  

const determineYear = (month, year) => {
  if(month > 40){
    month -= 40;
    year +=  2000;
  } else if(month > 20){
    month -= 20;
    year += 1800;
  } else {
    year += 1900
  }  
  return year
};

const determineSex = (sex) => {
    if(sex % 2 === 0){
        sex = "мъжки"
      } else {
        sex = "женски"
      }
  return sex;    
};


const determineRegion = (num) => {
    let region
    switch (true) {
      case num >= 0 && num < 44 :
        region = "Благоевград";        
        break;
      case num >= 44 && num < 94:
        region = "Бургас";
        break;
    case num >= 94 &&  num < 140:
        region = "Варна";
        break;
    case num >= 140 && num < 170:
        region = "Велико Търново";
        break;
    case num >= 170 && num < 184:
        region = "Видин";
        break;
    case num >= 184 && num < 218:
        region = "Враца";
        break;
    case num >= 218 && num < 234:
        region = "Габрово";
        break;
    case num >= 234 && num < 282:
        region = "Кърджали";
        break;
    case num >= 282 && num < 302:
        region = "Кюстендил";
        break;
    case num >= 302 && num < 320: 
        region = "Ловеч";
        break;
    case num >= 320 && num < 342:
        region = "Монтана";
        break;
    case num >= 342 && num < 378:
        region = "Пазарджик";
        break;
    case num >= 378 && num < 396:
        region = "Перник";
        break;
    case num >= 396 && num < 436:
        region = "Плевен";
        break;
    case num >= 436 && num < 502:
        region = "Пловдив";
        break;
    case num >= 502 && num < 528:
        region = "Разград";
        break;
    case num >= 528 && num < 556:
        region = "Русе";
        break;
    case num >= 556 && num < 576:
        region = "Силистра";
        break;
    case num >= 576 && num < 602:
        region = "Сливен";
        break;
    case num >= 602 && num < 624:
        region = "Смолян";
        break;
    case num >= 624 && num < 722:
        region = "София – град";
        break;
    case num >= 722 && num < 752:
        region = "София – окръг";
        break;
    case num >= 752 && num < 790:
        region = "Стара Загора";
        break;
    case num >= 790 && num < 822:
        region = "Добрич (Толбухин)";
        break;
    case num >= 822 && num < 844:
        region = "Търговище";
        break;
    case num >= 844 && num < 872:
        region = "Хасково";
        break;
    case num >= 872 && num < 904:
        region = "Шумен";
        break;
    case num >= 904 && num < 926:
        region = "Ямбол";
        break;               
    default :
    region = "Друг/Неизвестен"
    } 
    return region; 
  };




