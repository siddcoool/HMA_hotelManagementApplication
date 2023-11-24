const ipConvertor = (req) => req.connection.remoteAddress.split(`:`).pop()

module.exports = {
    ipConvertor
}