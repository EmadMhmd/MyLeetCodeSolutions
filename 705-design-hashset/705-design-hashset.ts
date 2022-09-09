class MyHashSet {
    hashSet : Array<number>
    constructor() {
        this.hashSet = []
    }

    add(key: number): void {
        if(!this.contains(key)){
            this.hashSet[key] = key
        }
    }

    remove(key: number): void {
        delete this.hashSet[key]
    }

    contains(key: number): boolean {
        return this.hashSet[key] === key
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */