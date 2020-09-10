 // this
 function foo() {
    this.baz = 'hello';
    console.log(this);
   }
   function bar() {
    console.log(this);
   }
   
   foo(); // window global object
   bar(); // same window global object
   console.log(baz); // hello
   
  var myObject = {
    name: 'Bruce Object',
    me: function () {
      this.name = 'Joker Object';
      console.log(this);
    }
  }
  myObject.me(); // { name: 'Joker Object', me: [Function: me] }
  
  var myObject = {
    name: 'Bruce Object',
    me: function () {
      this.name = 'Joker Object';
      console.log(this);
  
      var setName = function (name) {
        this.name = name;
      }
      setName('Robin Object');
      console.log(this); // { name: 'Joker Object', me: [Function: me] }
    }
  }
  myObject.me();