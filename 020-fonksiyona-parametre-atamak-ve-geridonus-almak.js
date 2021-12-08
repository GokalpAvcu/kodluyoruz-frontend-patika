// ********** Fonksiyonlara Parametreler Atamak ve Fonksiyondan Geridonus Almak **********

// Temel Kurallar:
// 1: Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veya Hic Almayabilir
// 2: Bir Fonksiyon Disari Bilgi Gonderebilir(return) veya Gondermeyebilir
// 3: Mumkunse Fonksiyonun Bagimliliklarini Azaltmak Gerekir


let firstName = "Lorem"

function greetings(firstName="") {
    //console.log(`Merhaba ${firstName} ? firstName : ""}`)
    console.log(`Merhaba ${firstName}`)
}

console.log(firstName) // degisken
greetings("Apple") // fonksiyona parametre göndermedik ??
greetings("Parametre")


