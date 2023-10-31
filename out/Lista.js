"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lista = void 0;
class Lista {
    constructor(capacidade) {
        this.item = [];
    }
    add(item) {
        this.item.push(item);
    }
    remove(index) {
        if (this.isEmpty()) {
            console.log("Lista esta vazia");
        }
        else {
            this.item.splice(index, 1);
        }
    }
    get(index) {
        if (index < 0 || index >= this.size()) {
            console.log("lista não possui tal Index");
        }
        return this.item[index];
    }
    set(index, item) {
        if (index < 0 || index >= this.size()) {
            console.log("lista não possui tal Index");
        }
        this.item[index] = item;
    }
    contains(item) {
        for (let i = 0; i < this.size(); i++) {
            if (this.item[i] === item) {
                return true;
            }
        }
        return false;
    }
    size() {
        return this.item.length;
    }
    isEmpty() {
        if (this.size() === 0)
            return true;
    }
}
exports.Lista = Lista;
//# sourceMappingURL=Lista.js.map