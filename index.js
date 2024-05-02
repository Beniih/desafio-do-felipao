let heroName: string = "";
let heroXP: number = 0;
let heroLevel: string = "";
let heroCR: number = 0;


function heroLevelCalc(xp) {
  switch(true) {
    case xp <= 1000:
      heroLevel= "ferro";
      break;
      
    case xp <= 2000:
      heroLevel= "bronze";
      break;
      
    case xp <= 5000:
      heroLevel= "prata";
      break;
      
    case xp <= 7000:
      heroLevel= "ouro";
      break;

    case xp <= 8000:
      heroLevel= "platina";
      break;

    case xp <= 9000:
      heroLevel= "ascendente";
      break;

    case xp <= 10000:
      heroLevel= "imortal";
      break;

    default:
      heroLevel= "radiante";
      break;
  }
}
