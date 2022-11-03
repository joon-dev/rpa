function deepCopyObject(obj) {
  const ret = {};
  for (const k in obj) {
    const v = obj[k];
    if (typeof v == "object" && v != null) {
      ret[k] = deepCopyObject(k);
    } else {
      ret[k] = v;
    }
    console.log(k, '=', v, typeof v, Array.isArray(v));
    ret[k] = obj[k];
  }
  return ret; // ret['nid] = obj['nid']
}





const kim = {
  nid: 3,
  addr: 'Pusan',
  arr: [1, 2, 3, { aid: 1 }, [10, 20]],
  oo: {
    id: 1, name: 'Hong',
    addr: { city: 'Seoul' }
  },
};

const newKim = deepCopyObject(kim);
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
newKim.arr[0] = 100;
newKim.arr[3].aid = 200;
newKim.arr[4][1] = 300;
newKim.oo.addr.city = 'Daejeon';
console.log(kim, newKim); // oo와 arr이 다르면 통과!