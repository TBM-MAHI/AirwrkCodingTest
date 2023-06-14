//task 1
let text = "The quick brown fox jumps over the lazy dog. The dog was not amused."
let characters = text.split('');
console.log(characters)
console.log(characters.length)
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
console.log(wordCount_Mapping)

//task 2
function calculate_Similarity(text1,text2 ) {
    text1 = text1.toLowerCase();
    text2 = text2.toLowerCase();

  let text1_words = text1.split(/[\s.]+/);
  let text2_words = text2.split(/[\s.]+/);

  text1_words.splice(text1_words.length - 1, 1);
  text2_words.splice(text2_words.length - 1, 1);

  console.log(text1_words);
  let text1_unique_words = [...new Set(text1_words)];
  let text2_unique_words = new Set(text2_words);
  console.log(text1_unique_words);
  console.log(text2_unique_words);

  let common_count = 0;
  text1_unique_words.forEach((w) =>
    text2_unique_words.has(w) ? common_count++ : common_count
  );
  let similarity = ( common_count / text1_unique_words.length) *100;
  console.log(common_count);
  console.log(`${ similarity}%`);
}
  let text2 = "The quick brown fox jumps over the lazy dog.";
  let text1 = "The dog was not amused.";
//calculate_Similarity(text1, text2);