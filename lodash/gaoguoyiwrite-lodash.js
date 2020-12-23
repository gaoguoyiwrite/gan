var gaoguoyiwrite = {


  compact: function (ary) {
    var resault = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        resault.push(ary[i])
      }
    }
    return resault
  },

  difference: function difference(array, ...args) {
    var result = []
    var values = args[0]
    for (var j = 1; j < args.length; j++) {
      values = values.concat(args[j])
    }
    for (var i = 0; i < array.length; i++) {
      if (!values.includes(array[i])) {
        result.push(array[i])
      }
    }
    return result
  },

  differenceBy: function differenceBy(val, ...arr) {
    var predicate = arr.pop()
    var ary = []
    for (var i = 0; i < arr.length; i++) {
      ary = ary.concat(arr[i])
    }
    var res = []
    if (typeof (predicate) === 'object') {
      ary = ary.concat(predicate)
      for (var i = 0; i < val.length; i++) {
        var isSame = false
        for (var j = 0; j < ary.length; j++) {
          if (val[i] === ary[j]) {
            isSame = true
            break
          }
        }
        if (isSame === false) {
          res.push(val[i])
        }
      }
    }
    if (typeof (predicate) === 'function') {
      for (var i = 0; i < val.length; i++) {
        var isSame = false
        for (var j = 0; j < ary.length; j++) {
          if (predicate(val[i]) === predicate(ary[j])) {
            isSame = true
            break
          }
        }
        if (isSame === false) {
          res.push(val[i])
        }
      }

    }
    if (typeof (predicate) === 'string') {
      for (var i = 0; i < val.length; i++) {
        var isSame = false
        for (var j = 0; j < ary.length; j++) {
          if (val[i][predicate] === ary[j][predicate]) {
            isSame = true
            break
          }
        }
        if (isSame === false) {
          res.push(val[i])

        }
      }
    }
    return res
  },

  differenceWith: function (ary, values, comparator) {
    var res = []
    for (var i = 0; i < ary.length; i++) {
      for (var j = 0; j < values.length; j++) {
        if (!comparator(ary[i], values[j])) {
          res.push(ary[i])
        }
      }
    }
    return res
  },


  join: function (ary, string) {
    var str = ""
    for (var i = 0; i < ary.length - 1; i++) {
      str += ary[i] + String(string)
    }
    return str + ary[ary.length - 1]
  },

  last: function (ary) {
    return ary[ary.length - 1]
  },

  lastindextOf: function lastindextOf(ary, value, start) {
    if (!start) {
      start = ary.length
    }
    for (var i = start - 1; i >= 0; i--) {
      if (ary[i] === value)
        break
    }
    return i
  },

  nth: function (ary, n) {
    if (Math.abs(n) > ary.length) {
      return undefined
    }
    if (n > 0) {
      return ary[n]
    } else {
      return ary[ary.length + n]
    }

  },
  pull: function (ary, ...nums) {
    for (var i = 0; i < nums.length; i++) {
      for (var j = 0; j < ary.length; j++) {
        if (nums[i] === ary[j]) {
          ary.splice(j, 1)
        }
      }
    }
    return ary
  },

  pullAll: function (ary, nums) {
    for (var i = 0; i < nums.length; i++) {
      for (var j = 0; j < ary.length; j++) {
        if (nums[i] === ary[j]) {
          ary.splice(j, 1)
        }
      }
    }
    return ary
  },

  pullAllBy: function pullAllBy(arr, vals, iteratee) {
    for (var i = 0; i < vals.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (arr[j][iteratee] === vals[i][iteratee]) {
          arr.splice(j, 1)
        }

      }

    }
    return arr
  },

  pullAllWith: function pullAllWith(arr, val, iteratee) {
    var res = []
    for (var i = 0; i < arr.length; i++) {
      if (!iteratee(arr[i], val)) {
        res.push(arr[i])
      }
    }
    return res
  },

  chunk: function chunk(ary, size) {
    var resault = []
    for (var i = 0; i < ary.length;) {
      var t = []
      for (var j = 0; j < size && i < ary.length; j++) {
        t.push(ary[i])
        i++
      }
      resault.push(t)
    }
    return resault

  },

  drop: function (ary, n) {
    if (!n && !(n === 0)) {
      n = 1
    }
    if (ary.length < n) {
      return []
    }
    for (var i = 0; i < n; i++) {
      ary.shift()
    }
    return ary
  },

  dropRight: function (ary, n) {
    if (!n && !(n === 0)) {
      n = 1
    }
    if (ary.length < n) {
      return []
    }

    ary.splice(ary.length - n, n)
    return ary

  },

  dropRightWhile: function dropRightWhile(ary, predicate) {
    var type = Object.prototype.toString.call(predicate)
    var res = []
    for (var i = 0; i < ary.length; i++) {
      if (type === '[object Function]') {
        if (!predicate(ary[i])) {
          res.push(ary[i])
        }
      }
      if (type === '[object String]') {
        if (predicate in ary[i]) {
          res.push(ary[i])
        }
      }
      if (type === '[object Object]') {
        for (var key in ary[i]) {
          if (predicate[key] !== ary[i][key]) {
            res.push(ary[i])
            break
          }
        }
      }
      if (type === '[object Array]') {
        if (ary[i][predicate[0]] !== predicate[1]) {
          res.push(ary[i])
        }
      }
    }
    return res
  },

  dropWhile: function dropWhile(ary, predicate) {
    var type = Object.prototype.toString.call(predicate)
    var res = []
    for (var i = 0; i < ary.length; i++) {
      if (type === '[object Function]') {
        if (!predicate(ary[i], i, arr)) {
          res.push(ary[i])
        }
      }
      if (type === '[object String]') {
        if (predicate in ary[i]) {
          res.push(ary[i])
        }
      }
      if (type === '[object Object]') {
        for (var key in ary[i]) {
          if (predicate[key] !== ary[i][key]) {
            res.push(ary[i])
            break
          }
        }
      }
      if (type === '[object Array]') {
        if (ary[i][predicate[0]] !== predicate[1]) {
          res.push(ary[i])
        }
      }
    }
    return res
  },


  fill: function (ary, str, start, end) {
    if (!start && !(start === 0)) {
      start = 0
    }
    if (!end && !(end === 0)) {
      end = ary.length
    }
    for (var i = start; i < end; i++) {
      ary[i] = str
    }
    return ary
  },

  findIndex: function findIndex(ary, predicate) {
    var type = Object.prototype.toString.call(predicate)
    for (var i = 0; i < ary.length; i++) {
      if (type === '[object Function]') {
        if (predicate(ary[i])) {
          return i
        }
      }
      if (type === '[object String]') {
        if (ary[i][predicate]) {
          return i
        }
      }
      if (type === '[object Object]') {
        for (var key in ary[i]) {
          if (predicate[key] !== ary[i][key]) {
            break
          }
          return i
        }
      }
      if (type === '[object Array]') {
        if (ary[i][predicate[0]] == predicate[1]) {
          return i
        }
      }

    }
  },

  findLastIndex: function findLastIndex(ary, predicate) {
    var type = Object.prototype.toString.call(predicate)
    for (var i = ary.length - 1; i >= 0; i--) {
      if (type === '[object Function]') {
        if (predicate(ary[i])) {
          return i
        }
      }
      if (type === '[object String]') {
        if (ary[i][predicate]) {
          return i
        }
      }
      if (type === '[object Object]') {
        for (var key in ary[i]) {
          if (predicate[key] !== ary[i][key]) {
            break
          }
          return i
        }
      }
      if (type === '[object Array]') {
        if (ary[i][predicate[0]] == predicate[1]) {
          return i
        }
      }

    }
  },

  flatten: function (array) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {

      var a = typeof (array[i])
      if (a == "object") {
        for (let j = 0; j < array[i].length; j++) {
          newArray.push(array[i][j])
        }
      } else {
        newArray.push(array[i])
      }
    }
    return newArray
  },



  flattenDeep: function (array) {
    var newArray = []
    var fd = function (array) {
      for (var i = 0; i < array.length; i++) {

        var a = typeof (array[i])
        if (a !== "object") {
          newArray.push(array[i])
        } else {
          fd(array[i])
        }
      }
      return newArray
    }
    return fd(array)
  },

  flattenDepth: function flattenDepth(array, depth = 1) {
    if (depth == 0) {
      return array.slice()
    }
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result.push(...flattenDepth(array[i], depth - 1))
      } else {
        result.push(array[i])
      }
    }
    return result
  },


  fromPairs: function (array) {
    var pairs = {}
    for (var i = 0; i < array.length; i++) {
      pairs[array[i][0]] = array[i][1]
    }
    return pairs
  },

  head: function (array) {
    if (array.length === 0) {
      return undefined
    }
    return array[0]
  },


  indexOf: function (arr, val, start) {
    if (!start && !(start === 0)) {
      start = 0
    }
    for (var i = start; i < arr.length; i++) {
      if (arr[i] === val) {
        return i
      }
    }
    return -1
  },


  lastIndexOf: function lastIndexOf(arr, value, fromIndex = arr.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (arr[i] === value) {
        return i
      }
    }
    return -1
  },

  initial: function (arr) {
    arr.splice(arr.length - 1, 1)
    return arr
  },

  intersection: function (...ary) {
    var result = []
    for (var i = 0; i < ary[0].length; i++) {
      for (var j = 1; j < ary.length; j++) {
        if (!ary[j].includes(ary[0][i])) {
          break
        }
      }
      if (j === ary.length) {
        result.push(ary[0][i])
      }

    }
    return result
  },
  intersectionBy: function intersectionBy(arr1, arr2, iteratee) {
    var res = []
    if (typeof (iteratee) === "function") {

      for (var i = 0; i < arr1.length; i++) {
        var isSame = false
        for (var j = 0; j < arr2.length; j++) {
          if (iteratee(arr1[i]) === iteratee(arr2[j])) {
            isSame = true
          }
        }
        if (isSame) {
          res.push(arr1[i])
        }
      }

    }
    if (typeof (iteratee) === "string") {
      for (var i = 0; i < arr1.length; i++) {
        var isSame = false
        for (var j = 0; j < arr2.length; j++) {
          if (arr1[i][iteratee] === arr2[j][iteratee]) {
            isSame = true
          }
        }
        if (isSame) {
          res.push(arr1[i])
        }
      }
    }
    return res
  },

  intersectionWith: function intersectionWith(arr1, arr2, iteratee) {
    var res = []
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        if (iteratee(arr1[i], arr2[j])) {
          res.push(arr1[i])
        }
      }
    }
    return res
  },

  reverse: function (array) {

    var i = 0
    var j = array.length - 1
    while (i <= j) {
      [array[i], array[j]] = [array[j], array[i]]
      i++
      j--
    }
    return array
  },

  sortedIndex: function sortedIndex(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] >= value) {
        return i
      }
    }
    return array.length
  },

  sortedIndexBy: function sortedIndexBy(arr, val, iteratee) {
    if (typeof (iteratee) == "function") {
      var arr1 = arr.map(it => iteratee(it))
      var val1 = iteratee(val)
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] >= val1) {
          return i
        }
      }
      return arr1.length
    }
    if (typeof (iteratee) == 'string') {
      arr1 = arr.map(it => it[iteratee])
      val1 = val[iteratee]
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] >= val1) {
          return i
        }
      }
      return arr1.length
    }
  },

  union: function (...ary) {
    var res = []
    for (var i = 0; i < ary.length; i++) {
      for (var j = 0; j < ary[i].length; j++) {
        if (!res.includes(ary[i][j])) {
          res.push(ary[i][j])
        }
      }
    }

    return res
  },
  unionBy: function unionBy(...ary) {
    var iteratee = ary.pop()
    var map = {}
    var res = []
    var arr = []
    for (var i = 0; i < ary.length; i++) {
      arr = arr.concat(ary[i])
    }

    if (typeof (iteratee) == "function") {
      for (var i = 0; i < arr.length; i++) {
        var item = iteratee(arr[i])
        if (!(item in map)) {
          map[item] = arr[i]
        }
      }
      for (var key in map) {
        res.unshift(map[key])
      }
    }
    if (typeof (iteratee) == 'string') {
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i][iteratee]
        if (!(item in map)) {
          map[item] = arr[i]
        }
      }
      for (var key in map) {
        res.push(map[key])
      }
    }

    return res
  },

  unionWith: function unionWith(...ary) {
    var iteratee = ary.pop()
    var map = {}
    var res = []
    var arr = []
    for (var i = 0; i < ary.length; i++) {
      arr = arr.concat(ary[i])
    }
    var res = arr[0]
    for (var i = 1; i < arr1.length; i++) {
      for (var j = 0; j < res.length; j++) {
        if (iteratee(arr1[i], arr2[j])) {
          res.push(arr1[i])
        }
      }
    }
    return res
  },


  toArray: function toArray(st) {
    var resault = []
    var a = typeof (st)
    if (a == "number") {
      resault = []
    } else if (a == null) {
      resault = []
    } else if (a == "string") {
      for (var i = 0; i < st.length; i++) {
        resault.push(st[i])
      }
    } else if (a == "object") {
      for (var key in st) {
        resault.push(st[key])
      }
    }
    return resault
  },




  max: function (ary) {
    if (ary.length === 0) {
      return undefined
    }
    var max = ary[0]
    for (var i = 1; i < ary.length; i++) {
      if (ary[i] > max) {
        max = ary[i]
      }
    }
    return max
  },

  maxBy: function (array, predicate) {
    var num = 0
    var max = array[0]
    for (var i = 1; i < array.length; i++) {
      var key = predicate(array[i], i, array)
      if (key in array[i]) {
        if (array[i][key] > max) {
          max = array[i][key]
          num = i
        }
      }
    }
    return array[num]
  },

  min: function min(arr) {
    if (arr.length == 0) {
      return undefined
    }
    var min = arr[0]
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i]
      }
    }
    return min
  },


  minBy: function (array, key) {
    var num = 0
    var min = array[0]
    for (var i = 1; i < array.length; i++) {
      if (key in array[i]) {
        if (array[i][key] < min) {
          min = array[i][key]
          num = i
        }
      }
    }
    return array[num]

  },


  sum: function (ary) {
    var sum = 0
    for (var i = 0; i < ary.length; i++) {
      sum += ary[i]
    }
    return sum
  },


  sumBy: function (array, predicate) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
      sum += predicate(array[i], i, array)
    }
    return sum
  },

  mapValues: function (obj, mapper) {
    var resault = {}
    for (var kry in obj) {
      var val = obj[key]
      result[mapper(val, key, obj)] = val
    }
    return result
  },

  groupBy: function (array, predicate) {
    var result = {}
    for (var i = 0; i < array.length; i++) {
      var key = predicate(array[i], i, array)
      if (!Array.isArray(result[key])) {
        result[key] = []
      }
      result[key].push(array[i])
    }
    return result
  },

  sortedIndexOf: function sortedIndexOf(ary, num) {
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] === num) {
        return i
      }
    }
  },

  sortedLastIndex: function sortedLastIndex(array, value) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (array[i] === value) {
        return i + 1
      }
    }
  },

  sortedLastIndexBy: function sortedLastIndexBy(arr, val, iteratee) {
    if (typeof (iteratee) == "function") {
      var arr1 = arr.map(it => iteratee(it))
      var val1 = iteratee(val)
      for (var i = arr1.length - 1; i >= 0; i--) {
        if (arr1[i] === val1) {
          return i + 1
        }
      }
    }
    if (typeof (iteratee) == 'string') {
      arr1 = arr.map(it => it[iteratee])
      val1 = val[iteratee]
      for (var i = arr1.length - 1; i >= 0; i--) {
        if (arr1[i] === val1) {
          return i + 1
        }
      }
    }
  },


  sortedLastIndexOf: function sortedLastIndexOf(array, value) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (array[i] === value) {
        return i
      }
    }
  },
  sortedUniq: function sortedUniq(array) {
    var res = []
    for (var i = 0; i < array.length; i++) {
      if (!res.includes(array[i])) {
        res.push(array[i])
      }
    }
    return res
  },
  sortedUniqBy: function sortedUniqBy(array, iteratee) {
    var map = {}
    var res = []
    for (var i = 0; i < array.length; i++) {
      if (!(iteratee(array[i]) in map)) {
        map[iteratee(array[i])] = array[i]
      }
    }
    for (var key in map) {
      res.push(map[key])
    }
    return res
  },

  tail: function tail(ary) {
    ary.splice(0, 1)
    return ary
  },
  take: function take(ary, n = 1) {
    if (n > ary.length) {
      return ary
    }
    return ary.slice(0, n)
  },
  takeRight: function takeRight(ary, n = 1) {
    if (n > ary.length) {
      return ary
    }
    if (n === 0) {
      return []
    }
    return ary.slice(-n)
  },
  takeRightWhile: function takeRightWhile(ary, predicate) {
    var type = Object.prototype.toString.call(predicate)
    var res = []
    for (var i = ary.length - 1; i >= 0; i--) {
      if (type === '[object Function]') {
        if (predicate(ary[i])) {
          res.unshift(ary[i])
        }
      }
      if (type === '[object String]') {
        if (!(predicate in ary[i])) {
          res.push(ary[i])
        }
      }
      if (type === '[object Object]') {
        var isSame = true
        for (var key in ary[i]) {
          if (predicate[key] !== ary[i][key]) {
            isSame = false
          }
        }
        if (isSame) {
          res.push(ary[i])
        }
      }
      if (type === '[object Array]') {
        if (ary[i][predicate[0]] === predicate[1]) {
          res.unshift(ary[i])
        }
      }
    }
    return res
  },

  takeWhile: function takeWhile(ary, predicate) {
    var type = Object.prototype.toString.call(predicate)
    var res = []
    for (var i = 0; i < ary.length; i++) {
      if (type === '[object Function]') {
        if (predicate(ary[i])) {
          res.push(ary[i])
        }
      }
      if (type === '[object String]') {
        if (!(predicate in ary[i])) {
          res.push(ary[i])
        }
      }
      if (type === '[object Object]') {
        var isSame = true
        for (var key in ary[i]) {
          if (predicate[key] !== ary[i][key]) {
            isSame = false
          }
        }
        if (isSame) {
          res.push(ary[i])
        }
      }
      if (type === '[object Array]') {
        if (ary[i][predicate[0]] === predicate[1]) {
          res.push(ary[i])
        }
      }
    }
    return res
  },

  uniq: function uniq(ary) {
    var res = []
    ary.forEach(it => {
      if (!res.includes(it)) {
        res.push(it)
      }
    });
    return res
  },

  uniqBy: function uniqBy(arr, iteratee) {

    var map = {}
    var res = []

    if (typeof (iteratee) == "function") {
      for (var i = 0; i < arr.length; i++) {
        var item = iteratee(arr[i])
        if (!(item in map)) {
          map[item] = arr[i]
        }
      }
      for (var key in map) {
        res.unshift(map[key])
      }
    }
    if (typeof (iteratee) == 'string') {
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i][iteratee]
        if (!(item in map)) {
          map[item] = arr[i]
        }
      }
      for (var key in map) {
        res.push(map[key])
      }
    }
    return res
  },
  uniqWith: function uniqWith(arr, iteratee) {
    var res = arr[0]
    for (var i = 1; i < arr.length; i++) {
      for (var j = 0; j < res.length; j++) {
        if (iteratee(arr[i], res[j])) {
          res.push(arr[i])
        }
      }
    }
    return res
  },
  unzip: function unzip(arr) {
    var res = []
    for (var i = 0; i < arr[0].length; i++) {
      var item = []
      for (var j = 0; j < arr.length; j++) {
        item.push(arr[j][i])
      }
      res.push(item)
    }
    return res
  },

  unzipWith: function unzipWith(array, iteratee) {
    var arr = []
    for (var i = 0; i < array[0].length; i++) {
      var item = []
      for (var j = 0; j < array.length; j++) {
        item.push(array[j][i])
      }
      arr.push(item)
    }
    var res = arr.map(it => iteratee(...it))
    return res
  },

  without: function without(ary, ...values) {
    var res = []
    for (var i = 0; i < ary.length; i++) {
      if (!values.includes(ary[i])) {
        res.push(ary[i])
      }
    }
    return res
  },

  xor: function xor(...ary) {
    var map = {}
    for (var i = 0; i < ary.length; i++) {
      for (var j = 0; j < ary[i].length; j++) {
        if (ary[i][j] in map) {
          map[ary[i][j]]++
        } else {
          map[ary[i][j]] = 1
        }
      }
    }
    var res = []
    for (var key in map) {
      if (map[key] === 1) {
        res.push(Number(key))
      }
    }
    return res
  },

  // xorBy: function xorBy(...arrays) {
  //   var iteratee = arrays.pop()
  //   var arr = []
  //   for (var i = 0; i < arrays.length; i++) {
  //     arr = arr.comcat(arrays[i])
  //   }
  //   var map = {}
  //   if(typeof iteratee === 'function'){
  //     for (var i = 0; i < arr.length; i++) {
  //       var item = iteratee(arr[i])
  //       if (item in map) {
  //         map[item] ++
  //       } else {
  //         map[item] = 1
  //       }
  //     }
  //   }
  //   if(typeof iteratee === 'string'){
  //     for (var i = 0; i < arr.length; i++) {
  //       var item = arr[i][]
  //       if (item in map) {
  //         map[item] ++
  //       } else {
  //         map[item] = 1
  //       }
  //     }
  //   }
  // },

  zip: function zip(...arrays) {
    var res = []
    for (var i = 0; i < arrays[0].length; i++) {
      res.push([])
    }
    for (var i = 0; i < arrays.length; i++) {
      for (var j = 0; j < arrays[i].length; j++) {
        res[j].push(arrays[i][j])
      }
    }
    return res
  },

  zipObject: function zipObject(arr, vals) {
    var res = {}
    for (var i = 0; i < arr.length; i++) {
      res[arr[i]] = vals[i]
    }
    return res
  },

  zipObjectDeep: function zipObjectDeep(props, vals) {

  },

  zipWith: function zipWith(...ary) {
    var iteratee = ary.pop()

    var res = []
    for (var i = 0; i < ary[0].length; i++) {
      var args = []
      for (var j = 0; j < ary.length; j++) {
        args.push(ary[j][i])
      }
      res.push(iteratee(...args))
    }
    return res
  },

  countBy: function countBy(collection, iteratee) {
    var map = {}
    if (typeof (iteratee) === 'function') {
      for (var i = 0; i < collection.length; i++) {
        if (iteratee(collection[i]) in map) {
          map[iteratee(collection[i])]++
        } else {
          map[iteratee(collection[i])] = 1
        }
      }
    }
    if (typeof (iteratee) === 'string') {
      for (var i = 0; i < collection.length; i++) {
        if (collection[i].iteratee in map) {
          map[collection[i].iteratee]++
        } else {
          map[collection[i].iteratee] = 1
        }
      }
    }
    return map
  },

  ary: function ary(f, n = f.length) {

  },
  // iteratee: function iteratee() {

  // },

  // isEqual: function isEqual(value, other) {
  //   if (value === other) {
  //     return true
  //   }
  //   if (value !== value && other !== other) {
  //     return true
  //   }
  //   if (typeof (value, other) === "object" && value.length === other.length) {
  //     for (var key in vulue) {
  //       if (value[key] === other[key])
  //     }
  //   }

  // },

  concat: function concat(arr, ...values) {
    var res = arr
    for (var i = 0; i < values.length; i++) {
      if (typeof (values[i]) === 'number') {
        res.push(values[i])
      } else if (typeof (values[i]) === 'object') {
        for (var j = 0; j < values[i].length; j++) {
          res.push(values[i][j])
        }
      }
    }
    return res
  },

}
// 输入：isEqual({"a":1},{"a":1})
// 输出/期望：true
// =================
// 输入：isEqual(1,2)
// 输出/期望：false
// =================
// 输入：isEqual(2,2)
// 输出/期望：true
// =================
// 输入：isEqual("foo","foo")
// 输出/期望：true
// =================
// 输入：isEqual([1,2,3],[1,2,3])
// 输出/期望：true
// =================
// 输入：isEqual([1,2],{"0":1,"1":2,"length":2})
// 输出/期望：false
// =================
// 输入：isEqual([{},{}],[{},{}])
// 输出/期望：true
// =================
// 输入：isEqual({"a":1,"b":2},{"a":1,"b":2,"c":3})
// 输出/期望：false
// =================
// 输入：isEqual({"a":1,"b":2},{"b":2,"a":1})
// 输出/期望：true