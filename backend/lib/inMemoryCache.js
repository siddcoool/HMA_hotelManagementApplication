class InMemoryCache {
    constructor(){
        this.cache = {}
    }

    set(key, value){
        this.cache[key] = value
    }

    get(key){
        return this.cache[key]
    }

    delete(key){
        delete this.cache[key]
    }
}

module.exports = InMemoryCache