const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = str.split("").reduce((acc, item, index, arr) => {
    if (arr[index - 1] !== item) {
      const nextCharIndex = arr.slice(index).findIndex((el) => el !== item);
      return [
        ...acc,
        [
          arr.slice(
            index,
            nextCharIndex > 0 ? nextCharIndex + index : undefined
          ).length,
          item,
        ],
      ];
    } else {
      return acc;
    }
  }, []);
  let result = res.flat().join("");
  for (let i = 0; i < result.length; i++) {
    result = result.replace(1, "");
  }
  return result;
}

module.exports = {
  encodeLine,
};
