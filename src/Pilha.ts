import { IStack } from "./Interface";

export class Pilha implements IStack {
    item: string[]
    capacidade: number
    topo: number = 0

    constructor(capacidade: number) {
        this.item = []
        this.capacidade = capacidade
    }

    // colocar um item no topo da pilha
    push(item: string): void {
        if (this.isFull()) {
            console.log("Pilha esta cheia")
        } else {
            this.item.push(item)
            this.topo++
        }
    }

    // Remove um item do topo da pilha(ultimo adicionado)
    pop(): string{
        if (this.size() === 0) {
            return `{Pilha esta vazia}`
        } else {
            return this.item.pop();
        }
    }
    
    size(): number {
        return this.item.length
    }

    isFull(): boolean {
        if (this.size() === this.capacidade)
            return true
    }
}