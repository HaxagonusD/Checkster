function findDate(text) {
  const matches = text.match(
    /[0-9\/]?[0-9\/](\/|\-)[0-9\/][0-9\/](\/|\-)([0-9\/][0-9\/])?([0-9\/][0-9\/])/
  )[0];
  return matches;
}
module.exports = findDate;
