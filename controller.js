let handlers = require("./handlers");
function handleAnalyze(req, res) {
  let { text } = req.body;
  if (typeof text !== "string")
    return res.send(400).json({ message: "Invalid Input" });
  text = text.toLowerCase();
  let charCount = handlers.charactersCount(text);
  let wordsCount = handlers.wordsCount(text);
  let sentenceCount = handlers.sentenceCount(text);
  let mostFrequentWord = handlers.calculate_mostFrequentWord(text);
  let longestWord = handlers.find_longest_word(text);
    res.status(200).json({
      charCount,
    wordsCount,
    sentenceCount,
    mostFrequentWord,
    longestWord,
  });
}

function handleSimilarity() {}

module.exports = {
  handleAnalyze,
  handleSimilarity,
};
