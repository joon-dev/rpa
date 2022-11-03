//[push, pop] ⇔ [unshift, shift]
//ex)
const stack = [];
stack.push(1); // stack = [...stack, 1]
stack.push(2); // length(2) 반환!
console.log(stack);
const curr = stack.pop();
console.log(curr); // pop된 요소(2) 반환!
console.log(stack);



arr=[0,0,0,0]
orr =[1,2,3,4]
for (const obj of orr) console.log(obj)


orr.forEach(a => console.log(a) )

orr.join('.');

orr.concat(arr);


arr2 =[1,2,3,4,5];
arr2.slice(1,3);

// reduce-배열
arr1=[8,7,5,4,3,2,1]
arr1.reduce((pre,a)=> pre+ a, 0)

users =[{id:1,name:'Hong'},{id:2, name:'Kim'}]
users.reduce((pre,user)=> `${pre} ${user.name}`,'')

const arr =[1,2,3,4,5];
arr.reduce((pre,arr1) => pre * arr1,0)
