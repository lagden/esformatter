foo.bar.Baz({
  method2: function() {},
  prop: 'dolor amet',
  prop2: 123
});


function foo(a) {
  amet(123, a, {
    flag: true
  });
}
ipsum({
  flag: true
});
ipsum({
  flag: true,
  other: false
});
ipsum({
  flag: true,
  other: false
}, 789, 'bar');


var obj = {
  foo: "bar",
  'lorem': 123,
  dolor: new Date(),
  "re": /\w+/g
};

// ObjectEpression within CallExpression needs to indent comments
declare({
  // comment
  create: {}
});

this.element
  .add()
  .set({
    // line comment
    // one more
    prop: "value"
  });

define(name, {
  _create: function() {
    this.element
      .add()
      .set({
        // line comment
        // one more
        prop: "value"
      });
  }
});

x = {
  props: {
    // comment
    x: 1
  }
};



// issues #47
Ext.define('VMS.model.User', {
  extend: 'Ext.data.Model',
  idProperty: 'UserID',
  fields: [
    {
      name: 'UserID',
      type: 'int'
    },
    {
      name: 'FirstName',
      type: 'string'
    },
    {
      name: 'LastName',
      type: 'string'
    }
  ]
});

