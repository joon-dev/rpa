//다음과 같은 정수 배열이 주어졌을 때, 각 요소를 다음의 순서로 처리하시오.
//배열의 각 요소를 제곱 (f1)
//배열 각 요소의 제곱근 (f2)
//배열의 각 요소를 세제곱 (f3)


const arr = [1, 2, 3, 4, 5];

const f1 = v => v ** 2;
const f2 = v => Math.sqrt(v);
const f3 = v => v ** 3;

const result = [f1, f2, f3].reduce((pre, f) => pre.map(f), arr);
/*        pre        f         map
0 ==>  [1,2,3]       f1       [1,2,3].map(v => v ** 2)
1 ==>  [1,4,9]       f2       [1,4,9].map(v =>  Math.sqrt(v))
2 ==>  [1, 2, 3]     f3       [1,2,3].map(v => v ** 3)
result = [1,8,27]      
*/


console.log(result);