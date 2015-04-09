var scrabbleWord = function(input_word) {

    var word_score = 0;

    var array_of_arrays = [array_ones, array_twos];

        //  array_threes, array_fours, array_fives, array_eights, array_tens];

    var array_ones = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
    var array_twos = ["d", "g"];
    // var array_threes = ["b", "c", "m", "p"];
    // var array_fours = ["f", "h", "v", "w", "y"];
    // var array_fives = ["k"];
    // var array_eights = ["j", "x"];
    // var array_tens = ["q", "z"];

    var array_split_word = input_word.split('');

        for (var i = 0; i < array_of_arrays.length; i++) {
            if (array_split_word[i] === array_ones[i]) {

                word_score += 1;

                // array_ones are passing and returning the correct word_score
            } else if (array_split_word[i] === array_twos[i]) {

                word_score += 2;

            }
        }



        return word_score;
};
