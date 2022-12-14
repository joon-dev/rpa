const printInfo = function (name) {
  console.log(`ID is ${this.id}, Name is ${name}.`);
};

const hong = { id: 1, name: 'Hong' };
const kim = { id: 2, name: 'Kim' };

printInfo(kim.name);
printInfo.call(kim);
printInfo.call(hong, hong.name);
// printInfo.apply(kim, kim.name);
printInfo.apply(hong, [hong.name]);
printInfo.apply(hong, [...hong.name]); // ?

const printOne = printInfo.bind(hong);
printOne('Park');

const printHong = printInfo.bind(hong);
printHong('Kil-dong');
