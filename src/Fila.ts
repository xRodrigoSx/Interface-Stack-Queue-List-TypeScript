import { IQueue } from "./Interface";

export class Fila implements IQueue {
  item: string[]
  capacidade: number

  constructor(capacidade: number) {
    this.item = []
    this.capacidade = capacidade
  }

  // Adiciona um item a fila
  enqueue(item: string): void {
    if (this.isFull()) {
      console.log("Fila esta cheia")
    }
    this.item.push(item)
  }

  // Remove o primeiro item da fila
  dequeue(): string {
    if (this.size() === 0) {
      console.log("Fila esta vazia")
    }
    return this.item.shift()
  }

  size(): number {
    return this.item.length
  }

  isFull(): boolean {
    if(this.size() === this.capacidade)
    return true
  }
}