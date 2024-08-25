console.log("Hello!");

// Object-Oriented Programming

/** OOP, sau Programarea Orientata pe Obiect (in engleză, Object-Oriented Programming), este o paradigma de 
 programare care utilizeaza conceptul de obiecte pentru 
 a organiza si structura codul sursa. 
 */

 /** OOP - Clase
  * Clasele sunt tipare pentru obiecte si sunt folosite 
  *pentru a crea obiecte cu proprietati si comportament similar.
  */

  /** Sintaxa: class NumeClasa { constructor(){} alteMembre… }

  class - defineste inceputul definitiei unei clase;
NumeClasa - numele dat de noi clasei (trebuie sa fie un nume reprezentativ pentru clasa). 
Acesta trebuie sa respecte notatia PascalCase;

constructor - este o metoda (functie ce apartine clasei) speciala ce se apelează in momentul crearii unui nou 
obiect din clasa si are rol de initializare obiect. Scopul principal al constructorului este sa 
configureze obiectul si sa atribuie valori initiale proprietatilor acestuia.
   */

class Product {
    constructor(productName, price, stockQuantity) {
        this.productName = productName;
        this.price = price;
        this.stockQuantity = stockQuantity;
    }

    addToStock(quantity) {
        this.stockQuantity += quantity;
        this.logStockToConsole();
    }

    removeFromStock(quantity) {
        this.stockQuantity -= quantity;
        this.logStockToConsole();
    }

    logStockToConsole() {
        console.log(`Current stock for ${this.productName} is now ${this.stockQuantity}.`);
    }
}

class DiscountProduct extends Product {
    constructor(productName, price, stockQuantity, discount) {
        super(productName, price, stockQuantity);
        this.discount = discount;
    }

    getDiscountedPrice() {
        let price = this.price - this.price * (this.discount / 100);
        return price;
    }

    logDiscountedPrice() {
        let discountedPrice = this.getDiscountedPrice();
        console.log(`Price with discount for ${this.productName} is ${discountedPrice}.`);
    }
}

const bike = new Product("Bike", 750, 1000);
console.log(bike);


const product2 = {
    productName : "Bike",
    price: 750,
    stockQuantity: 1000
}; 
//exemplu de tip Object - key: value
console.log(product2);

const laptop= new Product("Laptop", 2500, 300);
console.log(laptop);

/** Metodele sunt functii asociate cu un obiect/clasa si pot fi apelate pentru a efectua anumite actiuni 
 * pe obiect sau pentru a returna o valoare.
  
 * Metodele au acces la cuvantul special this care in contextul unei clase reprezinta instanta (obiectul) 
  curent pe care se apeleaza metoda cu toate proprietatile initializate in constructor.
 */

  bike.addToStock(100);
  console.log(bike);

  laptop.removeFromStock(200);
  console.log(laptop);

  laptop.addToStock(300);
  laptop.removeFromStock(300);
  laptop.addToStock(200);

/** Mostenirea este un concept fundamental in OOP si se refera la capacitatea de a defini proprietati si 
 * functionalitati comune ale unor clase intr-o singura clasa numita clasa parinte pe care ulterior
 *  aceste clase le pot mosteni (extinde), astfel eliminand repetitia.
  
Mostenirea se realizeaza prin cuvintele cheie extends si super.

extends se foloseste pentru a specifica clasa din care noua clasa mosteneste proprietatile.
super() - se folosește pentru a apela constructorul clasei parinte.

Sintaxa: class ClasaCopil extends ClasaParinte { constructor() { super() } }
 */

const smartphone = new DiscountProduct("Smartphone", 3000, 200, 20);
console.log(smartphone);

smartphone.removeFromStock(23);
// const smartphoneDiscountedPrice =smartphone.getDiscountedPrice();
// console.log(`Price with discount for ${smartphone.productName} is ${smartphoneDiscountedPrice}.`);

smartphone.logDiscountedPrice();



