"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilha = void 0;
class Pilha {
    constructor(capacidade) {
        this.topo = 0;
        this.item = [];
        this.capacidade = capacidade;
    }
    push(item) {
        if (this.isFull()) {
            console.log("Pilha esta cheia");
        }
        else {
            this.item.push(item);
            this.topo++;
        }
    }
    pop() {
        if (this.size() === 0) {
            return `{Pilha esta vazia}`;
        }
        else {
            return this.item.pop();
        }
    }
    size() {
        return this.item.length;
    }
    isFull() {
        if (this.size() === this.capacidade)
            return true;
    }
}
exports.Pilha = Pilha;
//# sourceMappingURL=Pilha.js.map