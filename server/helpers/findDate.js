function findDate(text) {
  return text.match(
    /[0-9\/]?[0-9\/](\/|\-)[0-9\/][0-9\/](\/|\-)([0-9\/][0-9\/])?([0-9\/][0-9\/])/
  )[0];
}
module.exports = findDate;
