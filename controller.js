let analyzeHandler = require("./handlers/analyze.handlers");
let similarityHandler = require("./handlers/similarities.handlers");

function handleAnalyze(req, res) {
    let { text } = req.body;
    if (!text)
        return res.status(400).json({ message: "Input empty!" });
  if (typeof text !== "string")
    return res.status(400).json({ message: "Invalid Input" });
  text = text.toLowerCase();
  let charCount = analyzeHandler.charactersCount(text);
  let wordsCount = analyzeHandler.wordsCount(text);
  let sentenceCount = analyzeHandler.sentenceCount(text);
  let mostFrequentWord = analyzeHandler.calculate_mostFrequentWord(text);
  let longestWord = analyzeHandler.find_longest_word(text);
  res.status(200).json({
    charCount,
    wordsCount,
    sentenceCount,
    mostFrequentWord,
    longestWord,
  });
}

function handleSimilarity(req, res) {
  if (!req.body) return res.status(400).json({ message: "Input empty!" });
  let { text1, text2 } = req.body;
  if (typeof text1 !== "string" || typeof text2 !== "string")
    return res.status(400).json({ message: "Invalid Input!" });

  let text1_similarity_text2 = similarityHandler.calculate_Similarity(
    text1,
    text2
  );
  let text2_similarity_text1 = similarityHandler.calculate_Similarity(
    text2,
    text1
  );
  let average_Similarity =
    ((text1_similarity_text2 + text2_similarity_text1) / 2) * 100;
  /*  console.log({
    text1_similarity_text2,
    text2_similarity_text1,
    average_Similarity,
  }); */
  return res.status(200).json({
    similarity: average_Similarity,
  });
}

module.exports = {
  handleAnalyze,
  handleSimilarity,
};
