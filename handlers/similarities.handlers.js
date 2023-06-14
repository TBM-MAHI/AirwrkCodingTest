function calculate_Similarity(text1, text2) {
  text1 = text1.toLowerCase();
  text2 = text2.toLowerCase();

  let text1_words = text1.split(/[\s.]+/);
  let text2_words = text2.split(/[\s.]+/);

  let text1_unique_words = [...new Set(text1_words)];
  let text2_unique_words = new Set(text2_words);

  let common_count = 0;
  text1_unique_words.forEach((w) =>
    text2_unique_words.has(w) ? common_count++ : common_count
  );

  let similarity = common_count / text1_unique_words.length;
  return similarity;
}

module.exports = {
  calculate_Similarity,
};
