var BaiduIndex = function() {
  var inputtext = element(by.id('kw'));
  var searchbutton = element(by.id('su'));
  var indexlink = element(by.css('#u a.toindex'));
  this.get = function() {
    browser.get('http://www.baidu.com');
  };

  this.setText = function(text) {
    inputtext.sendKeys(text);
  };

  this.search = function() {
    searchbutton.click();
  };

  this.getlink = function () {
    return indexlink.getText();
  }
};
 module.exports = BaiduIndex;
