'use strict';

console.log('happening')

describe('Well of HTML', function () {

  it('should have a title A Well of HTML', function () {
    expect($('.hidden title').text()).to.equal('A Well of HTML');
  });

  it('should have an <a> tag', function () {
    expect($('.hidden a').length).to.be.above(0);
    
    // browser.assert.elements('a', {atLeast: 1}, 'You\'re missing a <a> tag');
  });
  
  it('should have an <img> tag', function () {
    expect($('.hidden img').length).to.be.above(0);
  });
  
  it('should have an <h1> tags', function () {
    expect($('.hidden h1').length).to.be.above(0);
  });
  
  it('should have an <h2> tags', function () {
    expect($('.hidden h2').length).to.be.above(0);
  });
  
  it('should have an <h3> tags', function () {
    expect($('.hidden h3').length).to.be.above(0);
  });
  
  it('should have an <h4> tags', function () {
    expect($('.hidden h4').length).to.be.above(0);
  });
  
  it('should have an <h5> tags', function () {
    expect($('.hidden h5').length).to.be.above(0);
  });
  
  it('should have an <h6> tags', function () {
    expect($('.hidden h6').length).to.be.above(0);
  });

  it('should have a <p> tag', function () {
    expect($('.hidden p').length).to.be.above(0);
  });

  it('should have a <b> tag', function () {
    expect($('.hidden b').length).to.be.above(0);
  });

  it('should have an <i> tag', function () {
    expect($('.hidden i').length).to.be.above(0);
  });

  it('should have an <em> tag', function () {
    expect($('.hidden em').length).to.be.above(0);
  });

  it('should have a <strong> tag', function () {
    expect($('.hidden strong').length).to.be.above(0);
  });

  it('should have an <ol> tag', function () {
    expect($('.hidden ol').length).to.be.above(0);
  });

  it('should have a <ul> tag', function () {
    expect($('.hidden ul').length).to.be.above(0);
  });

  it('should have an <li> tag', function () {
    expect($('.hidden li').length).to.be.above(0);
  });

  it('should have a <dl> tag', function () {
    expect($('.hidden dl').length).to.be.above(0);
  });

  it('should have a <dt> tag', function () {
    expect($('.hidden dt').length).to.be.above(0);
  });

  it('should have a <dd> tag', function () {
    expect($('.hidden dd').length).to.be.above(0);
  });

  it('should have a <form> tag', function () {
    expect($('.hidden form').length).to.be.above(0);
  });

  it('should have a <label> tag', function () {
    expect($('.hidden label').length).to.be.above(0);
  });

  it('should have an <input> tag', function () {
    expect($('.hidden input').length).to.be.above(0);
  });

  it('should have a <textarea> tag', function () {
    expect($('.hidden textarea').length).to.be.above(0);
  });

  it('should have a <button> tag', function () {
    expect($('.hidden button').length).to.be.above(0);
  });

  it('should have a <table> tag', function () {
    expect($('.hidden table').length).to.be.above(0);
  });

  it('should have a <thead> tag', function () {
    expect($('.hidden thead').length).to.be.above(0);
  });

  it('should have a <tbody> tag', function () {
    expect($('.hidden tbody').length).to.be.above(0);
  });

  it('should have a <tfoot> tag', function () {
    expect($('.hidden tfoot').length).to.be.above(0);
  });

  it('should have a <tr> tag', function () {
    expect($('.hidden tr').length).to.be.above(2);
  });

  it('should have a <th> tag', function () {
    expect($('.hidden th').length).to.be.above(0);
  });

  it('should have a <td> tag', function () {
    expect($('.hidden td').length).to.be.above(2);
  });

  it('should have a <div> tag', function () {
    expect($('.hidden div').length).to.be.above(1);
  });

  it('should use flexbox', function () {
    expect($('.hidden .flex-row').length).to.be.above(0);
    expect($('.hidden .flex-row > *').length).to.be.above(1);
  });

  it('should use a bootstrap grid', function () {
    expect($('.hidden .row').length).to.be.above(0);
    expect($('.hidden .row > *').length).to.be.above(1);
  });

});

mocha.run();