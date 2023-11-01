const { createClient } = require("redis")

class RedisCache {
    constructor() {
        this.client = null;
    }

    async connect() {
        this.client = await createClient()
            .on('error', err => console.log('Redis Client Error', err))
            .connect()
    }

}
const redisConnection = new RedisCache()

module.exports = redisConnection