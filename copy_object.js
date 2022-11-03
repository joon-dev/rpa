function copyObject(obj) {
    const ret={};
    console.log('keys-', Object.keys(obj));
    for(const k in obj) { // in obj -> Object.keys(obj) =>loop
        //k = 'nid'
        // for()
        ret[k] = obj[k];
    }
     
    //ret.nid = obj.nid;
    //ret.addr =obj.addr;
    return ret; // ret['nid] = obj['nid']
}

const kim = {nid: 3, nm: 'Hong', addr: 'Pusan', age:30};
//console.table(kim);
//const key ='nm'
//kim[key]='Kim'
//console.log(kim.nm, kim['nm'], kim[key])
const newKim = copyObject(kim)
newKim.addr='Seoul';
console.log(kim);
console.log(newKim);

//console.log(kim.addr, newKim.addr);

// nodemon 설치
//npm i nodemone -g
// code runner 설치

//////////////////답안///////////////////////////////
function copyObject(obj) {
    const copyObj = {};
    for (let k in obj) {
      // console.log(k, obj[k]);
      copyObj[k] = obj[k];
    }
  
    return copyObj;
  }
 ///////////////////////////////////////////////// 