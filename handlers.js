let charactersCount = (text) => {
    let charCount = 0;
    for (let i = 0; i < text.length; i++) {
        let codeUnit = text.charCodeAt(i);
        if (codeUnit >= 97 && codeUnit <= 122) 
            charCount++;
    }
    return charCount;
};

let wordsCount = (text) => {
    let words = text.split(/[\s.]+/);
    words.splice(words.length - 1, 1);
    return words.length;
};
let sentenceCount = (text) => text.split(". ").length;

let calculate_mostFrequentWord = (text) => {
     let words = text.split(/[\s.]+/);
     words.splice(words.length - 1, 1);
    let wordCount_Mapping = {};

    for (let w of words) {
      if (wordCount_Mapping[w]) wordCount_Mapping[w] = wordCount_Mapping[w] + 1;
      else wordCount_Mapping[w] = 1;
    }
    let most_frequent_word_occurrence= Math.max(...Object.values(wordCount_Mapping));
    
    let word_entries = Object.entries(wordCount_Mapping);
    let most_frequent_word = word_entries.find(
        (w) => w[ 1 ] === most_frequent_word_occurrence
    );
    most_frequent_word = most_frequent_word[0];
    //console.log({ most_frequent_word, most_frequent_word_occurrence })
    return {
      frequency: most_frequent_word_occurrence,
      word: most_frequent_word,
     };
}

let find_longest_word = (text) => {
     let words = text.split(/[\s.]+/);
     words.splice(words.length - 1, 1);
    let longest_word_length = 0;
    let longest_word = "";

    words.forEach((w) => {
      if (w.length > longest_word_length) {
        longest_word_length = w.length;
        longest_word = w;
      }
    });
    return {
        word: longest_word,
        length: longest_word_length
    }
}
module.exports = {
  charactersCount,
  wordsCount,
  sentenceCount,
  calculate_mostFrequentWord,
  find_longest_word,
};
