let multiplo = undefined



function multiplicar(multiplo) {
for (let i = 1; i < 10; i++) {
    document.write("<p>" + multiplo + " x " + i + ":" + multiplo * i + "</p>")    

}}

document.write("<h4> " + "Tabla del 11" + " </h4>")
multiplicar(11);
document.write("<h4> " + "Tabla del 10" + " </h4>")
multiplicar(10);
document.write("<h4> " + "Tabla del 9" + " </h4>")
multiplicar(9);


