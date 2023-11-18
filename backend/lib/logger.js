const requestTimestamps = {};

const reqlog = (req, res, next) => {
  const requestType = `${req.method}-${req.path}`;
  const currentTime = Date.now();
  const value = requestTimestamps[requestType];
  const timeSinceLastRequest = value ? currentTime - value : 0;

  requestTimestamps[requestType] = currentTime;

  const originalSend = res.send;

  res.send = function (body) {
    const responseTime = Date.now() - currentTime;

    console.log(
      `Status: ${res.statusCode} | 
      Response Time: ${responseTime} |
      Time since last request: ${requestType} = ${timeSinceLastRequest}ms
    `);

    originalSend.call(this, body);
  };

  next();
};

module.exports = reqlog;