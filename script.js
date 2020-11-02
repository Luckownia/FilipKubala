 //Element button o classie burger
 const hamburger = document.querySelector(".burger");
 // Element nava ul
 const nav = document.querySelector("ul");
 //Dodaje do burgera nasłuchiwanie na zdarzenie klik, jeśli nastąpi kliknięcie to wykona się funkcja
 hamburger.addEventListener("click", function () {
     //dodaje klase move do hamburgera jesli jej nie ma a odbieram jesli jest
     hamburger.classList.toggle("move");
     //dodaje klase active do navbar jesli jej nie ma a odbieram jesli jest
     nav.classList.toggle("active");

 })

 //Element scrollUp który po kliknięciu przenosi na góre strony
 const scrollUp = document.querySelector(".scrollUp");
 //Element header w którym znajduje się background image
 const headerHeight = document.querySelector("header");
 //Element navbar w którym znajduję się nawigacja strony
 const navbar = document.querySelector("nav");

 //Na obiekcie window(czyli całej stronie), daje nasłuchiwanie na zdarzenie scroll 
 window.addEventListener("scroll", function () {
     //Sprawdzam czy strone została przeskrolowana o 100px w dół
     if (window.scrollY > 100) {
         //Jesli jest przeskrolowana o 100px w dół dodaje klase visibleScrollUp i scrollUp pokazuje się na stronie
         scrollUp.classList.add("showScrollUp");
     } else {
         //Usuwam klase visibleScrollUp gdy strona nie jest przesunieta  100px w dół
         scrollUp.classList.remove("showScrollUp");
     }
     // sprawdzam czy strona została przeskrolowana o odleglośc headera wzgledem góry strony(przeskrolowanie całego zdjęcia)
     if (window.scrollY > 50) {
         //jezeli tak to dodaje klase  navColor aby dodać navbaru kolor niebieski(inaczej navbar byłby niewidoczny)
         navbar.classList.add("navColor");
     } else {
         //jezeli nie usuwam klase navColor
         navbar.classList.remove("navColor");
     }
 })
