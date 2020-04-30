/**
 * push() 是把值加入到陣列最後一個位置
 * 會改變原始陣列
 */
let testPush = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testPush);
testPush.push(9, 10);
console.log(testPush);

/**
 * pop() 會移除( 取出 )陣列最後一個位置的元素
 * 會改變原始陣列
 */

let testPop = [1, 2, 3, 4, 5, 6, 7, 8];
let testedPop = testPop.pop();
console.log(testPop); // 已被取出 8
console.log(testedPop);

/**
 * unshift() 會將指定元素加入陣列的第一個位置
 * 會改變原始陣列
 */

let testUnshift = [1, 2, 3, 4, 5, 6, 7, 8];
testUnshift.unshift(100, 200, 300);
console.log(testUnshift);

/**
 * shift() 會移除( 取出 )陣列第一個位置的元素
 * 會改變原始陣列
 */

let testShift = [1, 2, 3, 4, 5, 6, 7, 8];
let testedShift = testShift.shift();
console.log(testShift);
console.log(testedShift);

/**
 * reverse() 將陣列索引值順序反轉
 * 會改變原始陣列
 */

let testReverse = [1, 2, 3, 4, 6, 7, 8];
testReverse.reverse();
console.log(testReverse);

/**
 * splice() 可以帶入3個參數，功能是移除或新增陣列元素
 * 參數 1: 陣列改變的起始索引值
 * 參數 2: 要刪除的元素數量，可選填( 空白為參數1後方都移除，設定 0 則不移除元素 )
 * 參數 3: 提供以 "參數 1" 開始，加入的陣列元素
 * 會改變原始陣列
 */

let testSplice = [1, 2, 3, 4, 5, 6, 7, 8];
// 移除陣列位置 3 以後的元素
// testSplice.splice(3);
console.log(testSplice); // [1,2,3]
// 移除陣列位置 3、4
// testSplice.splice(3,2);
console.log(testSplice); // [1,2,3,6,7,8]
// 移除陣列位置 3、4 並改為 400、500
// testSplice.splice(3,2,400,500)
console.log(testSplice); // [1,2,3,400,500,6,7,8]
// 從陣列位置 3 加入 400、500，不得刪除原始資料
testSplice.splice(3, 0, 400, 500)
console.log(testSplice); // [1,2,3,400,500,4,5,6,7,8]

/**
 * sort() 可以針對陣列元素排序
 * 預設的排序順序是根據字串的 Unicode 編碼位置（code points）而定。
 * 可帶入兩個參數，分別為 n 與 n+1
 * 透過 n 與 n+1 進行指定排序
 * 會改變原始陣列
 */

let testSort = [1, 5, 3, 10, 9, 6, 2, 11];
// 僅是數字可使用此比對方式進行排序
testSort.sort((x, y) => y - x);
console.log(testSort);
testSort.sort((x, y) => x - y);
console.log(testSort);
// 字串比對的話，會依 Unicode 編碼進行比對
// 故跑兩個條件 x > y 與 x < y
let StringSort = ['甲', '子', '丑', '巳', '庚', '辰', '午']
StringSort.sort((x, y) => {
  if (x > y) {
    return 1;
  }
  if (x < y) {
    return -1;
  }
  return 0;
});
console.log(StringSort);
/**
 * 陣列物件，可以依照物件的屬性做排序
 * 以下為抓取物件屬性 "價格" 去做陣列排序
 * 由小到大
 */

let ObjectSort = [
  {
    name: '香蕉',
    price: 200,
  },
  {
    name: '蓮霧',
    price: 400,
  },
  {
    name: '西瓜',
    price: 100,
  },
  {
    name: '芭樂',
    price: 50,
  },
  {
    name: '櫻桃',
    price: 900,
  },
  {
    name: '番茄',
    price: 555,
  },
  {
    name: '柳丁',
    price: 435,
  }
]
console.table(ObjectSort);
ObjectSort.sort((x, y) => x.price - y.price)
console.table(ObjectSort);

/**
 * copyWithin() 複製陣列的指定元素至同一陣列的相對位置，並且不修改其陣列長度。
 * 可帶入三個參數
 * 參數 1: 要複製到該位置的索引值
 * 參數 2: 開始複製的起始索引，不填寫的話預設為 0
 * 參數 3: 結束複製的結束索引，不填寫的話預設為陣列長度
 * 會改變原始陣列
 */

let testCopyWithin = [1, 2, 3, 4, 5, 6, 7, 8];
/**
 * 參數1: 為 2 從原始陣列 3 開始
 * 其他參數不帶入表示，從 0 至 陣列長度複製
 * 則 7,8 值會消失，因為超過原始陣列長度，這是重點此語法不會增加陣列長度。
 */
// testCopyWithin.copyWithin(2); // [1,2,1,2,3,4,5,6]
console.log(testCopyWithin);

/**
 * 把 1,2 陣列取代 6,7
 */
testCopyWithin.copyWithin(5, 0, 2);
console.log(testCopyWithin); // [1,2,3,4,5,1,2,8]

/**
 * fill() 會將陣列中所有值更改為指定的值
 * 可帶入三個參數
 * 參數 1: 指定的值
 * 參數 2: 起始索引，預設 0
 * 參數 3: 結束索引，預設陣列長度
 * 會改變原始陣列
 */

let testFill = [1, 2, 3, 4, 5, 6, 7, 8];
// testFill.fill('測試');
console.log(testFill); // 陣列全部的值已變更 "測試"
testFill.fill('測試', 3, 5);
console.log(testFill); // 陣列索引值 3.4 已變更為 "測試"

/**
 * length() 可以取得陣列長度 (等於該陣列所有值的數量)
 * 注意是以 1 起算
 */

let el = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(el.length); // 8

/**
 * indexOf() 判斷陣列中的值是否符合指定值，判斷方向 "為左至右" 往後找
 * 可帶入兩個參數
 * 參數 1: 判斷值
 * 參數 2: 判斷開始的起始位置，預設為 0
 */

let testIndexOf = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testIndexOf.indexOf(4)); // 回傳查詢結果的索引值 3
console.log(testIndexOf.indexOf(4, 5)); // 從陣列索引值 5 往後找，回傳 -1 因為找不到

/**
 * lastIndexOf() 判斷陣列中的值是否符合指定值，判斷方向 "為右至左" 往前找
 * 可帶入兩個參數
 * 參數 1: 判斷值
 * 參數 2: 判斷開始的起始位置，預設為 0
 */

let testLastIndexOf = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testLastIndexOf.lastIndexOf(4)); // 回傳查詢結果的索引值 3
console.log(testLastIndexOf.lastIndexOf(4, 2)); // 從陣列索引值 2 往前找，回傳 -1 因為找不到

/**
 * find() 會將陣列 "每一個"元素帶入函式運算，會回傳 "第一個" 符合判斷條件的 "值"
 * 注意 "沒有符合條件回傳的是 undefined"
 */

let testFind = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testFind.find((e) => {
  return e > 5; // 大於5第一個值是 6
}));

console.log(testFind.find((e) => {
  return e < 0; // undefined
}));

/**
 * findIndex() 會將陣列 "每一個"元素帶入函式運算，會回傳 "第一個" 符合判斷條件的 "索引值"
 * 注意 "沒有符合條件回傳的是 -1"
 */

let testFindIndex = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testFindIndex.findIndex((e) => {
  return e > 3; // 回傳 3 指的是陣列值 "4" 的索引值
}));
console.log(testFindIndex.findIndex((e) => {
  return e < 0; // -1
}));

/**
 * filter() 會將陣列 "每一個"元素帶入函式運算，會回傳符合判斷條件的 "元素"，建立新的陣列
 * 注意
 */

let testFilter = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testFilter.filter((e) => {
  return e > 3; // [4,5,6,7,8]
}));
console.log(testFilter); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(testFilter.filter((e) => {
  // 取 2 的倍數
  return e % 2 === 0; // [2,4,6,8]
}));

/**
 * forEach() 會將陣列 "每一個"元素帶入函式運算
 * 可帶入callback函式包含以下參數
 * 參數 1: 陣列值
 * 參數 2: 該陣列值的索引
 * 參數 3: 帶入原始陣列，可搭配參數2 達到改變原始陣列的效果
 */

let testForEach = [1, 2, 3, 4, 5];
let x = [];
testForEach.forEach((e) => {
  x.push(e);
})
console.log(x); // [1,2,3,4,5]

testForEach.forEach((e, index, arr) => {
  arr[index] = e * 10;
})
console.log(testForEach); //[10,20,30,40,50]

/**
 * join() 會將陣列所有元素合併為字串
 * 可帶入參數為指定字符
 * 若沒有帶入參數，會以逗號 , 合併
 * 注意
 */

let testJoin = [1, 2, 3, 4, 5];
console.log(testJoin.join()); // 1,2,3,4,5
console.log(testJoin.join('')); // 12345
console.log(testJoin.join('YA')); // 1YA2YA3YA4YA5

/**
 * concat() 可以將兩個陣列合併，但是也可以使用 ES6展開運算子代替
 */

let testConcatA = [1, 2, 3, 4, 5];
let testConcatB = [6, 7, 8, 9];
let testConcatC = testConcatA.concat(testConcatB);
let testConcatD = [...testConcatA, ...testConcatB];

console.log(testConcatC);
console.log(testConcatD);

/**
 * slice() 可擷取陣列指定元素為建立新的陣列
 * 可帶入參數
 * 參數 1: 起始位置
 * 參數 2: 結束位置
 */

// 這邊以題目來介紹，
// 撰寫函式並且可帶入一維陣列為參數
// 回傳的值是二維陣列並且二維陣列可以指定長度

// 假設帶入 [1,2,3,4,5] 一維陣列
// 回傳必須是 [[1,2],[3,4],[5]] 的二維陣列
// 這時候就可以使用 slice 去擷取一維陣列建立新的陣列

const twoDimensional = (array, num) => {
  const len = array.length; // 抓取陣列長度
  const arrayloopNumber = Math.ceil(len / num); // 計算所需要的迴圈數
  let temp = [];
  /**
   * 預想上我們需要是
   * slice(0,2) (2,4) (4,6) 這個順序
   */
  for (let i = 0; i < arrayloopNumber; i++) {
    let el = array.slice((num * i), num * (i + 1))
    temp.push(el)
  }
  return temp;
}
console.log(twoDimensional([1, 2, 3, 4, 5], 2));

// 根據以上的介紹，可以清楚知道 slice 語法

/**
 * map() 會將陣列 "每一個"元素帶入函式運算，回傳一個新陣列
 * 可帶入參數兩個分別為callback函式與callback函式的 this
 * callback函式可帶入 陣列值、索引值、當前原始陣列
 * 特別注意的是，使用參數二的 this 則 callback 不能是箭頭函式
 */

let testMap = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testMap.map((e) => {
  return e + 10;
}));
console.log(testMap); // 原始陣列不會被修改

// 使用 this
let testThisMap = testMap.map(function (e) {
  return e + this;
}, 'this');
console.log(testThisMap);

/**
 * 使用 callback 2、3參數運用
 * 字串組合 '陣列值+索引值+陣列內符合5的索引位置'
 */

console.log(testMap.map((e, index, array) => {
  return `${e}${index}${array.indexOf(5)}`;
}));

/**
 * reduce() 可將 "每一個" 陣列值傳入函式，特色是第一個帶入的結果會帶到第二個
 * 會是累計制，把陣列長度縮小最後化為單一值，累加方向為 "由左至右"
 * 可帶入兩個參數分別為 callback 與 初次呼叫callback參數:累加器的初始值
 * callback 參數有四個
 * 參數 1: 用來存放上一次呼叫的累加數值
 * 參數 2: 原陣列目前所疊代處理中的元素
 * 參數 3: 原陣列目前所疊代處理中的元素索引值
 * 參數 4: 原始陣列
 */

let testReduce = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testReduce.reduce((total, e) => {
  return total + e; // 累計過程(((((((1+2)+3)+4)+5)+6)+7)+8) = 36
}));

/**
 * reduceRight() 的話與 reduce() 一樣是累加器
 * 差別在它是 "由右至左"，再數學的世界裡 "減法" 會有差別
 */

let testReduceRight = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testReduceRight.reduceRight((total, e) => {
  return total - e; // -20 從 8 開始向左減
}));
console.log(testReduceRight.reduce((total, e) => {
  return total - e; // -34 從 1 開始向右減
}));

/**
 * flat() 可將多維陣列的層級轉為一維陣列
 * 可帶入一個參數
 * 參數 1: 陣列層級，代表要轉換的層級數
 * 如果很多層可以使用 Infinity 直接轉為一維
 */

let testFlat = [1, 2, [3], [4, [5, [6]]]];
console.log(testFlat);
console.log(testFlat.flat());
console.log(testFlat.flat(2));
console.log(testFlat.flat(Infinity));

/**
 * flatMap() 此方法是把 map() 與 flat() 結合
 * 透過函式運算產生的新陣列可以轉成一維陣列
 */

let testFlatMap = [1, 2, [3], [4, [5, [6]]]];

console.log(testFlatMap.flatMap((e) => {
  return e + 1;
}));

/**
 * Array.isArray 此方法是判斷物件是否為陣列
 * 因為陣列是屬於物件型別下的子物件，故有語法去判別是否屬於陣列
 */

let isArray = [1, 2, 3, 4, 5, 6, 7, 8,];
let isObject = {};
console.log(typeof isArray, Array.isArray(isArray)); // true
console.log(typeof isObject, Array.isArray(isObject)); // false

/**
 * Array.from() 可將 "類陣列物件" 或 "可迭代的物件" 轉換成陣列
 * 可帶入參數有三個
 * 參數 1: 物件本身
 * 參數 2: 可帶入 callback 如 map() 的功能
 * 參數 3: map執行時的 this
 */

console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], (e) => {
  return e + e
}));

/**
 * Array.of() 可將數字、字串等內容，轉換成陣列
 */

console.log(Array.of(1, 'sb', 5, 6, 'ye'));

/**
 * toString() 可將整個陣列轉換成文字
 */

let testToString = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testToString.toString());

/**
 * every() 可將陣列 "每一個" 元素 帶入函式判斷
 * 當有任何一個元素符合會回傳 false
 * 若全部符合才會回傳 true
 */

let testEvery = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testEvery.every(e => e > 1)); // false
console.log(testEvery.every(e => e > 0)); // true

/**
 * some() 這個也是判斷 true 與 false，與 every 是完全相反的邏輯
 * 當有任何一個元素符合條件 就是 true
 * 若全部不符合才會是 false
 */

let testSome = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testSome.some(e => e < 0)); // false
console.log(testSome.some(e => e < 2)); // true 只有一個是 true

/**
 * includes() 查找陣列內是否包含哪個值，回傳 true or false
 * 可以帶入兩個參數
 * 參數 1: 判斷值
 * 參數 2: 判斷的起始位置
 */

let testIncludes = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testIncludes.includes(2));
console.log(testIncludes.includes(2, 2));

/**
 * valueOf() 回傳陣列原始值，也就是做到淺拷貝
 */

let testValueOf = [1, 2, 3, 4, 5, 6, 7, 8];
let newOf = testValueOf.valueOf()
testValueOf.push(5);
console.log(newOf);

/**
 * keys() 會回傳陣列的 "每一個" 元素索引值，建立 Array Iterator
 * 那麼因為是 Array Iterator 則可以使用 for of 取得
 */

let testKey = ['a', 'b', 'c', 'd', 'e', 'f'];
let testNewKey = testKey.keys();
console.log(testNewKey);
for (let key of testNewKey) {
  console.log(key);
}

/**
 * 另外介紹 new Set 篩選陣列取得唯一值
 */

let ArraySet = [1, 2, 3, 3, 5, 5, 6, 7, 5, 6, 8, 8];
let ArrayNewSet = new Set(ArraySet) // 取得一個物件
// 再利用 Array.from() 轉成陣列
console.log(Array.from(ArrayNewSet));
// 或者運用 ES6 展開運算子
console.log([...ArrayNewSet]);





