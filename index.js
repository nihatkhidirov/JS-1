// Istifadeci once qeydiyyatdan kecmelidir //

var firstmeeting = prompt(
  "Kapital Bank'a Xoş Gəlmişsiniz! Davam etmək üçün Enter düyməsinə clickləyin!"
);
console.log("Kapital Bank'a Xoş Gəlmişsiniz! ");

var qeydiyyat = prompt(
  "İlk növbədə qeydiyyatdan keçməlisiniz. Davam etmək üçün Enter düyməsinə clickləyin!"
);
var maaş = Number(prompt("Ayliq əməkhaqqinizi daxil edin!")); ///1000
console.log(`Sizin emekhaqqiniz : ${maaş} `);

var sifre = Number(prompt("Şifrə təyin edin!"));
console.log(`Sizin sifreniz: ${sifre}`);

console.log("Siz artiq qeydiyyatdan kecdiniz!");
var pulcekmek = "P";
var kredit = "K";
var count = 3;
var isContinue = true;
var isAccepted = true;
var kreditbalance = 0;

var balance = 0;

balance += maaş;

console.log(balance);
var mewbalans = 0;
var kp = "";

while (count > 0) {
  var giris = Number(
    prompt("Hesabiniza daxil olmaq ucun sifrenizi daxil edin!")
  );

  if (giris === sifre) {
    console.log("Siz artiq hesabiniza daxil oldunuz!");
    kp = prompt(
      "Kredit odenisi etmek isteyirsinizse K, pul cekmek isteyirsinizse P-herfini daxil edin!"
    );

    while (maaş >= 0)
      if (kp === kredit) {
        var kreditodenisi = prompt("Odemek istediyiniz meblegi daxil edin:");

        if (kreditodenisi <= balance) {
          balance -= kreditodenisi;
          kreditbalance -= kreditodenisi;
          console.log(`Kartinizdaki qalan mebleg: ${balance}`);

          isContinue = confirm("Davam etmek isteyirsinizmi?");

          if (!isContinue) {
            break;
          }
        } else {
          console.log(
            "Balanisinizda kredit odenisi etmek ucun kifayet qeder vesait yoxdur!"
          );
        }
      } else if (kp === pulcekmek) {
        var nagdlasdirmaq = prompt("Cekmek istediyiniz meblegi daxil edin:");

        if (nagdlasdirmaq <= balance) {
          balance -= nagdlasdirmaq; //1000-500=500
          console.log(`Sizin qalan balansiniz: ${balance}`);

          isContinue = confirm("Davam etmek isteyirsinizmi?");
          if (!isContinue) {
            break;
          }
        } else if (balance === 0 || nagdlasdirmaq > balance) {
          isAccepted = confirm("Kredit Isteyirsinizmi?");
          if (isAccepted) {
            if (kreditbalance === 0) {
              balance += maaş * 0.441; //1500

              var faizhesablanmasi = maaş * 0.441;

              kreditbalance += faizhesablanmasi;

              console.log(
                `Sizə Maaşinizin 45%-i qədər kredit vesaiti ayrildi. Elave olaraq 2% komisiyya-ya hesablandi. Size verilecek kredit meblegi:${faizhesablanmasi} manat`
              );
              console.log(`Yeni Balans: ${balance}`);
            } else {
              console.log(
                `Borcunuzu Odeyin- siz keçmiş borcunuzu ödəmədiyiniz üçün sizə yeni borc verilmir! Borcunuz: ${kreditbalance}`
              );
            }
          } else {
            break;
          }
        } else {
          break;
        }
      } else {
        console.log("Duzgun Secim Etmediniz!");
        break;
      }

    kp = prompt(
      "Kredit odenisi etmek isteyirsinizse K, pul cekmek isteyirsinizse P-herfini daxil edin!?"
    );
    break;
  } else {
    count--;
    console.log("Sifrenizi yanlis daxil etdiniz, yeniden cehd edin", count);

    if (count === 0) {
      console.log("Kartiniz Bank terefinden bloklandi");
      break;
    }
  }
}
