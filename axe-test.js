var axe = require('axe-core');
 
describe('Some component', function() {
    it('should have no accessibility violations', function(done) {
        axe.run('.some-component', {}, function(error, results) {
            if (error) return error;
     
         expect(results.violations.length).toBe(0);
        });
    });
});