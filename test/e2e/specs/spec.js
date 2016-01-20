// var AngularHomepage = require('/Users/lqi/work/test/protractor-demo/test/e2e/homepage/homepage.po.js');
var BaiduIndex = require('/Users/lqi/work/test/protractor-demo/test/e2e/baidu/baiduindex.po.js');
// describe('angularjs homepage', function() {
//   it('should greet the named user', function() {
//     var angularHomepage = new AngularHomepage();
//     angularHomepage.get();
//
//     angularHomepage.setName('Julie');
//
//     expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
//   });
// });

describe('angularjs homepage', function() {
  beforeEach(function() {
   isAngularSite(false); // isAngularSite(true), if it's an Angular app!
});
  it('should input some text and search ', function() {
    var baiduindex = new BaiduIndex();
    baiduindex.get();
    baiduindex.setText('test');
    baiduindex.search();
    expect(baiduindex.getlink()).toEqual('百度首页');

    });
});
