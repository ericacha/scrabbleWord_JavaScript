var scrabbleWord = function(input_word) {

    var word_score = 0;

    var array_ones = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];

    var array_split_word = input_word.split('');

        for (var i = 0; i < array_ones.length; i++) {
            if (array_split_word[i] === array_ones[i]) {

                word_score += 1;
            
            }
        }
    return word_score;
};
