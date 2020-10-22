class Dado{
    lanzar(){
    return Math.ceil(Math.random() * 6);
    }
}
class Jugador{  
    constructor(nombre){
        this.nombre=nombre
        this.posicion=0
        this.avance=0
    }

    avanzar(numero){
        this.avance = numero + this.posicion;
        return this.avance; 
    }
}
class Tablero {
    vCasilla(numero) {

        switch (numero) {
            case 4:
                return 9;
            case 23: 
                return 50;
            case 23: 
                return 25;
            case 60: 
                return 37;
            case 40: 
                return 49;
            case 58: 
                return 4;
            case 66: 
                return 2;
            case 71: 
                return 5;
            case 9: 
                return 13;
            case 29: 
                return 25;
            case 76: //Serpientes
                return 64;
            case 99: 
                return 40;
            case 61: 
                return 48;
            case 50: 
                return 13;
            case 70: 
                return 22;
            case 85: 
                return 19;
            case 90: 
                return 10;
            case 21: 
                return 6;
            case 11: 
                return 5;
            default:
                return numero
        }
    }
}

let dado = new Dado();
let tablero = new Tablero();
let j1 = new Jugador('Gabino');
let j2 = new Jugador('Laura');

while (j1.posicion <= 100 && j2.posicion <= 100) {
    j1.posicion = tablero.vCasilla(j1.avanzar(dado.lanzar()));
    j2.posicion = tablero.vCasilla(j2.avanzar(dado.lanzar()));
    console.log(`${j1.nombre} avanza a la casilla: ${j1.posicion} , ${j2.nombre} avanza a la casilla: ${j2.posicion}`);
}
if (j1.posicion >= 100) {
    console.log(`${j1.nombre} ha ganado`);
} else if (j2.posicion >= 100) {
    console.log(`${j2.nombre} ha ganado`);
}