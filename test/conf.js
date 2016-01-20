// Tests for the calculator.
exports.config = {
  framework: 'jasmine',
   seleniumAddress: 'http://localhost:4444/wd/hub',
   suites: {

   homepage: './e2e/specs/spec.js'
 },
 onPrepare: function() {
   global.isAngularSite = function(flag) {
      browser.ignoreSynchronization = !flag;
   };
},
   multiCapabilities: [
  // {
  //    browserName: 'firefox'
  //  },
   {
     browserName: 'chrome'
   }]
};
