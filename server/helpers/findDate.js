function findDate(text) {
  const matches = text.match(
    /[0-9\/]?[0-9\/](\/|\-)[0-9\/][0-9\/](\/|\-)([0-9\/][0-9\/])?([0-9\/][0-9\/])/
  );
  return matches ? matches[0] : matches;
}
module.exports = findDate;
