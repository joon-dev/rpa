const weeks = ['일', '월', '화', '수', '목', '금', '토'];
//호출 할 때마다 다음 요일을 주세요!
// 클로져로 문제 해결
const getNextWeek = () => {
    let widx = -1;
    return () => {
  widx += 1; // side-effect!
  if (widx >= weeks.length) widx = 0;
  return `${weeks[widx]}요일`;
 };
};

//let cnt = 0;
//const intl = setInterval(() => {
//  // widx += 2; // side-effect!
//  console.log('call', cnt, getNextWeek());
//  if ((cnt += 1) === 8) clearInterval(intl);
//}, 1000)

const nextWeek = getNextWeek();
console.log(nextWeek());
console.log(nextWeek());
console.log(nextWeek());
console.log(nextWeek());
console.log(nextWeek());
console.log(nextWeek());
console.log(nextWeek());