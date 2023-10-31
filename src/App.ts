import { Fila } from "./Fila";
import { Lista } from "./Lista";
import { Pair } from "./Par";
import { Pilha } from "./Pilha";


let livros = new Pilha(3)
console.log("Pilha")

livros.push("AC")

livros.push("HP")

livros.push("GOT")

console.log(livros.item)

livros.pop()

console.log(livros.item)

//

let lista = new Lista(3)
console.log("Lista")

lista.add("AC")

lista.add("HP")

lista.add("GOT")

console.log(lista.item)

lista.remove(1)

console.log(lista.item)

//

let fila = new Fila(3)
console.log("Fila")

fila.enqueue("Rosangela")

fila.enqueue("Dolores")

fila.enqueue("Gertrudes")

console.log(fila.item)

fila.dequeue()

console.log(fila.item)

//

let pair: Pair<number,string> = new Pair(1, "Valor");
console.log("Par")

console.log(pair.left())

console.log(pair.right())