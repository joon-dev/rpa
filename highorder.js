const f1 = (f, val) => f(val);
f1(console.log, 'f1');

console.log('this is val')

const ff = v => v*10  // function ff(v) {return v*10}
console.log(f1(ff, 5));

f1(v =>console.log('v is', v), 'vvv');

//f(val)
console.log('v is', 'vvv');




const f2 = 
f => 
(...args) => 
  console.log(f.name, f(...args));

f2(Math.max)(1, 3, 2, 5, 4);

const fff = f1;

const fns = [f1, f2];
