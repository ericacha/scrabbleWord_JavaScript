var scrabbleWord = function(input_word) {
    var word_score = 0;
    input_word = input_word.toLowerCase();

    var letters = {
        a :1, e :1, i :1, o :1, u :1, l :1, n :1, r :1, s :1, t :1,
        d :2, g :2,
        b :3, c :3, m :3, p :3,
        f :4, h :4, v :4, w :4, y :4,
        k :5,
        j :8, x :8,
        q :10, z :10
    };


    var array_split_word = input_word.split('');

    array_split_word.forEach(function(letter_value) {
        word_score += letters[letter_value];
    });

    return word_score;
};

$(document).ready(function() {
    $("form#scrabble_word").submit(function(event) {
        var input_word = $("input#input_word").val();
        var result = scrabbleWord(input_word);

        $(".result_score").text(result);


        $("#result").show();
        event.preventDefault();

    });
});
