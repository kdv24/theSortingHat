// describe('houseTrait', function() {
//   it("click gryffindor, add 1", function() {
//     expect(houseTrait(1)).to.equal(1);
//   });
// });

describe('clickImage', function() {
    it("when user click gryffindor image, console.log the class of that image", function() {
        expect(clickImage('gryffindor')).to.equal('gryffindor');
    });
    // it("when user click gryffindor image, console.log the class of that image", function() {
    //     expect(clickImage('gryffindor')).to.equal('gryffindor');
    // });
});
