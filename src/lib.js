function buggyFunction(arg1, arg2) {
  console.log(arg1 + arg2 + undeclaredVariable);
}

module.exports = {
  buggyFunction
};
