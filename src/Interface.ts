export interface IStack<T> {
    push(item: T): void;
    pop(): T;
    size(): number;
    isFull(): boolean;
}

export interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T;
    size(): number;
    isFull(): boolean;
}

export interface IList<T> {
    add(item: T): void;
    remove(index: number): void;
    get(index: number): void;
    set(index: number, item: T): void;
    contains(item: T): boolean;
    size(): number;
    isEmpty(): boolean;

}

export interface IPair<T,E> {
    left(): T;
    right(): E;
    }    