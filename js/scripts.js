function Telefon(marka, cena, kolor, operator, pochodzenie) {
  this.marka = marka;
  this.cena = cena;
  this.kolor = kolor;
  this.operator = operator;
  this.pochodzenie = pochodzenie;
}

Telefon.prototype.printInfo = function() {
  console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ". Operator to " + this.operator + ". Kraj produkcji to " + this.pochodzenie + ".");
}

var iPhone6S = new Telefon("Apple", 2250, "srebrny", "Play", "Stany Zjednoczone");
var samsungGalaxyS6 = new Telefon("Samsung", 2000, "grafitowy", "Orange", "Korea Południowa");
var onePlusOne = new Telefon("OnePlus", 1000, "zielony", "T-Mobile", "Chiny");

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();