import { IList } from "./Interface";

export class Lista implements IList {
  item: string[]

  constructor(capacidade: number) {
    this.item = []
  }
  add(item: string): void {
    this.item.push(item)
  }

  remove(index: number): void {
    if (this.isEmpty()) {
      console.log("Lista esta vazia")
    } else {
      this.item.splice(index, 1)
    }
  }

  get(index: number): string {
    if (index < 0 || index >= this.size()) {
      console.log("lista não possui tal Index")
    }
    return this.item[index]
  }

  set(index: number, item: string): void {
    if (index < 0 || index >= this.size()) {
      console.log("lista não possui tal Index")
    }
    this.item[index] = item
  }

  contains(item: string): boolean {
    for (let i = 0; i < this.size(); i++) {
      if (this.item[i] === item) {
        return true
      }
    }
    return false
  }

  // Retorna o número de itens na lista
  size(): number {
    return this.item.length
  }

  // Verifique se a lista está vazia
  isEmpty(): boolean {
    if (this.size() === 0)
      return true
  }
}