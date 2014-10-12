describe("groot:", function() {

  it('Я есть Грут!', function(){
    expect(groot).toBeDefined();
  });

  it('select function should be defined', function(){
    var elems = groot.select('html');
    expect(elems).toBeDefined();
  });

  it('addClass function should be defined', function(){
    var elems = groot.select('html');
    expect(elems).toBeDefined();
  });

  it('append function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.append).toBeDefined();
  });

  it('attr function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.attr).toBeDefined();
  });

  it('children function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.children).toBeDefined();
  });

  it('css function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.css).toBeDefined();
  });

  it('empty function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.empty).toBeDefined();
  });

  it('find function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.find).toBeDefined();
  });

  it('hasClass function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.hasClass).toBeDefined();
  });

  it('html function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.html).toBeDefined();
  });

  it('on function should be defined', function(){
    var elems = groot.select('html');
    expect(on).toBeDefined();
  });

  it('parent function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.parent).toBeDefined();
  });

  it('remove function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.remove).toBeDefined();
  });

  it('removeAttr function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.removeAttr).toBeDefined();
  });

  it('removeClass function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.removeClass).toBeDefined();
  });

  it('toggleClass function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.toggleClass).toBeDefined();
  });

  it('unbind function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.unbind).toBeDefined();
  });

  it('wrap function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.wrap).toBeDefined();
  });

  it('size function should be defined', function(){
    var elems = groot.select('html');
    expect(elems.size).toBeDefined();
  });

  it('html-tag count function should be 1', function(){
    var elems = groot.select('html');

    expect(elems.size()).toEqual(2);
  });
});
