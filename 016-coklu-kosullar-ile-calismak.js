// ********** Coklu Kosullarla Calismak **********

let userName = prompt("Kullanici Adiniz:")
let age = prompt("Yasiniz:")
let info = document.querySelector("#info")

if (userName && age >= 18) { 
  info.innerHTML("ehliyet alabilirsiniz")
} else if (!userName) {  // != yoksa anlamına gelir (not)
  info.innerHTML("Kullanici Adiniz Yok")
} else if ( !(age >= 18) ) {
  info.innerHTML("Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz")
}

// --------------------------------------------------------

let havadurumu = prompt("Hava Durumunu Giriniz")
let hava = document.querySelector("#info")
switch(havadurumu) {
  case "Yagmurlu":
      info.innerHTML = "Semsiyeni yanina almayi unutma"
      break;
  case "Gunesli":
      info.innerHTML = "Hafif giyin"
      break;
  case "Bulutlu":
      info.innerHTML = "Disari cik"
      break;
  case "Karlı":
      info.innerHTML = "Kalin giyin"
      break;
  case "Firtinali":
      info.innerHTML = "Bir süre disari cikma"
      break;
  default:
      info.innerHTML = `Bilinmeyen Hava Durumu: ${havadurumu}`
}

// ----------------- HESAP MAKİNESİ -----------------------

// let islem = function(a, b, operator) {
//     switch(operator) {
//         case 'topla':
//             return a + b;
//         break;
//         case 'cikar':
//             return a - b;
//         break;
//         case 'carp':
//             return a * b;
//         break;
//         case 'bol':
//             return a / b;
//         break;
//         default:
//             return 'Tanimlanmamis islem';
//         break;
//     }
// };
// console.log(islem(23, 14, 'topla'));  // 37
// console.log(islem(10, 3, 'carp'));     // Tanimlanmamis islem