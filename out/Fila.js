"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fila = void 0;
class Fila {
    constructor(capacidade) {
        this.item = [];
        this.capacidade = capacidade;
    }
    enqueue(item) {
        if (this.isFull()) {
            console.log("Fila esta cheia");
        }
        this.item.push(item);
    }
    dequeue() {
        if (this.size() === 0) {
            console.log("Fila esta vazia");
        }
        return this.item.shift();
    }
    size() {
        return this.item.length;
    }
    isFull() {
        if (this.size() === this.capacidade)
            return true;
    }
}
exports.Fila = Fila;
//# sourceMappingURL=Fila.js.map