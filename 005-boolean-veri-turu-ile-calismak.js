// ********** Boolean Veri Turu ile Calismak ********** 

// 0 ve 1'i Anlamak ->
let isActive = false // 0
isActive = true // 1
console.log(isActive)


let userName;
let isUserName = Boolean(userName)
console.log(isUserName)

Boolean("11") // boolean içerisine 11 gönderdik true dedi
Boolean("0") // boolean içerisine 0 gönderdik true dedi
Boolean("") // çift tırnak gönderdik false dedi (boş veri)

userName = "user"

console.log("User Name:", Boolean(userName)) // username içerisinde bilgi olduğu için "user" true verdi.

// 0 ,-0, null, false, NaN, undefined, ("") ->
Boolean(0) //  false
Boolean(-0) // false
Boolean(-0.1) // true
Boolean(0 === 0) // true

// Not: Karar Yapilari Kisminda Tekrar Anlatilacak
Boolean(userName.length > 0) // true

/* İçinde değer barındıran tüm ifadeler true'dur.



const b1 = Boolean(100);
const b2 = Boolean(3.14);
const b3 = Boolean(-15);
const b4 = Boolean("Hello");
const b5 = Boolean('false');
const b6 = Boolean(1 + 7 + 3.14);


Yukarıdaki tüm ifadelerin çıktısını true olarak görürüz.



İçinde değer barındırmayan tüm ifadeler false 'dur.



const c1 = Boolean(undefined);
const c2 = Boolean(null);
const c3 = Boolean("");
const c4 = Boolean(false);
const c5 = Boolean(NaN);
const c6 = Boolean(0);
const c6 = Boolean(-0);

*/