describe('addClass', function() {
    it('should add class to element', function() {
        var element = { className: '' };

        addClass(element, 'test-class');

        chai.assert.equal(element.className, 'test-class');
    });

    it('should not add a class which already exists');
});