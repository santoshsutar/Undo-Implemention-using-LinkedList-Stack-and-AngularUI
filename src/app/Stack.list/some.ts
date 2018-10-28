export class MyIterator {
    constructor() {
    }

    First() {
    }

    Next() {
    }

    IsDone() {
    }

    CurrentItem() {
    }
}

export class ConcreteIterator extends MyIterator {
    private index: number;
    aggregate: ConcreteAggregate;

    constructor(aggregate) {
        super()
        this.index = 0;
        this.aggregate = aggregate
    }

    First() {
        return this.aggregate.list[0];
    }

    Next() {
        this.index += 1;
        return this.aggregate.list[this.index];
    }

    CurrentItem() {
        return this.aggregate.list[this.index];
    }
}

export class Aggregate {
    constructor() {
    }

    CreateIterator() {
    }
}

export class ConcreteAggregate extends Aggregate {
    list: number[];
    iterator: ConcreteIterator;
    constructor(list) {
        super()
        this.list = list;
    }

    CreateIterator() {
        this.iterator = new ConcreteIterator(this);
    }
}

