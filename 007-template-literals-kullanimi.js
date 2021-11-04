// ********** Template Literals Kullanimi ********** 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let username = "hakan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

// console.log("Merhaba", username, "sitemize hoşgeldin", "mail adresin:", email)

let info = `
merhaba ${username} sitemize hoşgeldin..
mail adresin: ${email}

mail adresinin uzunluğu: ${email.length}
borcunuz: ${(2 + 3) * 20} TL
günün saat bilgisi : ${new Date().getHours()}

kısa isminiz: ${username[0]}.
`

console.log(info)

// ÖRNEKLER

let ad= `Gökalp`;
let soyad= `Avcu`;

//Eski kullanım
console.log("Benim adım "+ad+" "+ soyad);

//Yeni kullanım
console.log(`Benim adım ${ad} ${soyad}`);

let a = 99;
let b= 999;

console.log(`${a} çarpı ${b} eşittir ${a*b}`);


// Eski kullanım, Template Literals kullanmadan:

/* const kisi = "<p>"+ad+"</p>"+
              "<p>"+soyad+"</p>"+
              "<p>"+gozRengi+"</p>"+
              "<p>"+yas+"</p>"

document.body.innerHTML = kisi;
*/

// Yeni kullanım, Template Literals kullanarak:

/* const kisi = `
<p>${ad}</>
<p>${soyad}</>
<p>${gozRengi}</>
<p>${yas}</>
`;

document.body.innerHTML = kisi;
*/