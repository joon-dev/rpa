// ⇔ function declareFn(name) {
    const declareFn = function(name) {
        // if, 'use strict'?
        this.name = name;
        console.log(this);
        console.log(new.target)
        //console.log(this, new.target, this.name, name);
      }
      
      
      //nst arrowFn = (name) => {
      //this.name = name;
      //console.log(this, new.target, this.name, name);
      //}
      
     declareFn('dfn');
    // arrowFn('afn');
      
      const dfn = new declareFn('D');
      //const afn = new arrowFn('A'); // error!