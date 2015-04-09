describe('scrabbleWord', function() {
    it("returns a score of 1 if the input letter is 'a'", function() {
        expect(scrabbleWord('a')).to.equal(1);
    });

    it("returns a score of 2 if the input letters are 'ae'", function() {
        expect(scrabbleWord("ae")).to.equal(2);
    });
    it("returns a score of 3 if the input letters are all in the array_ones", function() {
        expect(scrabbleWord("aei")).to.equal(3);
    });
});
