import { IPair } from "./Interface";

export class Pair<T,E> implements IPair<T,E> {
    a: T;
    b: E;
    
    constructor(a: T, b: E) {
      this.a = a;
      this.b = b;
    }

    left(): T {
        return this.a
    }

    right(): E {
        return this.b
    }
    }
    