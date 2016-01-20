var BaiduIndex = require('/Users/lqi/work/test/protractor-demo/baidu/baiduindex.po.js');
describe('angularjs homepage', function() {

  it('should input some text and search ', function() {
    var baiduindex = new BaiduIndex();
    baiduindex.get();

    baiduindex.setText('Julie');
    baiduindex.search();
  });
});
