function Dog(nm){  // nm:매개변수(argument)
    this.name = nm;
}

const lucy = new Dog('Lucy');
const Maxx = new Dog('Maxx');

console.log(lucy, lucy instanceof Dog);
console.log(Maxx);

function hello() {
    return 'Hello, World';
}

const fn = hello(),
 obj = {fn:hello},
 a = [hello];
 console.log(fn);
 console.log(obj);
 console.log(a);


 (function hellowworld(){    //즉시호출(실행)함수 - 한번만 실행.불필요한 전역변수와 메모리 낭비를 줄일 수 있다.
    console.log('Hello,World!')
 })();
