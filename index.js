let text = "The quick brown fox jumps over the lazy dog. The dog was not amused."
let sentences = text.toLowerCase().split('. ').length;
//console.log(sentences)
let words = text.toLowerCase().split(/[\s.]+/);
words.splice(words.length - 1, 1);
console.log('word count', words.length);
let wordCount_Mapping = {};

for (let w of words) {
    if (wordCount_Mapping[ w ])
      wordCount_Mapping[ w ] =   wordCount_Mapping[ w ] + 1;
    else
        wordCount_Mapping[ w ] = 1;
}
let max_occurrence_of_word = Math.max(...Object.values(wordCount_Mapping))
console.log(max_occurrence_of_word);

let word_entries = Object.entries(wordCount_Mapping);
let max_Ocurred_word = word_entries.find(
  (w) => w[1] === max_occurrence_of_word
);
max_Ocurred_word = max_Ocurred_word[ 0 ];
console.log(max_Ocurred_word);

let longest_word_length = 0;
let longest_word = '';

words.forEach((w) => {
    if (w.length > longest_word_length) { 
        longest_word_length = w.length;
        longest_word = w;
    }
  });
console.log(longest_word_length);
console.log(longest_word);