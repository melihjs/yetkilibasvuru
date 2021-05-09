const isteBu = event => require(`../event/${event}`);

module.exports = client => {
  client.on("message", isteBu("message"));
};
