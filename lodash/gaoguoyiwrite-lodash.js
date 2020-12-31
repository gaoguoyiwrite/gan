
var gaoguoyiwrite = function () {

  function compact(ary) {
    var resault = []
    for (var i = 0; i < ary.length; i++) {
      if (ary[i]) {
        resault.push(ary[i])
      }
    }
    return resault
  }

  function difference(array, ...args) {
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
  }

  function differenceBy(val, ...arr) {
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
  }

  function differenceWith(ary, values, comparator) {
    var res = []
    for (var i = 0; i < ary.length; i++) {
      for (var j = 0; j < values.length; j++) {
        if (!comparator(ary[i], values[j])) {
          res.push(ary[i])
        }
      }
    }
    return res
  }

  function join(ary, string) {
    var str = ""
    for (var i = 0; i < ary.length - 1; i++) {
      str += ary[i] + String(string)
    }
    return str + ary[ary.length - 1]
  }

  function last(ary) {
    return ary[ary.length - 1]
  }

  function lastindextOf(ary, value, start) {
    if (!start) {
      start = ary.length
    }
    for (var i = start - 1; i >= 0; i--) {
      if (ary[i] === value)
        break
    }
    return i
  }

  function nth(ary, n) {
    if (Math.abs(n) > ary.length) {
      return undefined
    }
    if (n > 0) {
      return ary[n]
    } else {
      return ary[ary.length + n]
    }

  }
  function pull(ary, ...nums) {
    for (var i = 0; i < nums.length; i++) {
      for (var j = 0; j < ary.length; j++) {
        if (nums[i] === ary[j]) {
          ary.splice(j, 1)
        }
      }
    }
    return ary
  }

  function pullAll(ary, nums) {
    for (var i = 0; i < nums.length; i++) {
      for (var j = 0; j < ary.length; j++) {
        if (nums[i] === ary[j]) {
          ary.splice(j, 1)
        }
      }
    }
    return ary
  }

  function pullAllBy(arr, vals, iteratee) {
    for (var i = 0; i < vals.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (arr[j][iteratee] === vals[i][iteratee]) {
          arr.splice(j, 1)
        }

      }

    }
    return arr
  }

  function pullAllWith(arr, val, iteratee) {
    for (var i = 0; i < val.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (iteratee(arr[j], val[i])) {
          arr.splice(j, 1)
        }
      }
    }
    return arr
  }

  function chunk(ary, size) {
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

  }

  function drop(ary, n) {
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
  }

  function dropRight(ary, n) {
    if (!n && !(n === 0)) {
      n = 1
    }
    if (ary.length < n) {
      return []
    }

    ary.splice(ary.length - n, n)
    return ary

  }

  function dropRightWhile(ary, predicate) {
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
  }

  function dropWhile(ary, predicate) {
    var type = Object.prototype.toString.call(predicate)
    var res = []
    for (var i = 0; i < ary.length; i++) {
      if (type === '[object Function]') {
        if (predicate(ary[i]) == false) {
          res.push(...ary.slice(i))
          break
        }
        continue
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
  }

  function fill(ary, str, start, end) {
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
  }

  function findIndex(ary, predicate) {
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
  }

  function findLastIndex(ary, predicate) {
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
  }

  function flatten(array) {
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
  }

  function flattenDeep(array) {
    var res = []
    for (var i = 0; i < array.length; i++) {
      var a = typeof (array[i])
      if (a !== "object") {
        res.push(array[i])
      } else {
        res = res.concat(flattenDeep(array[i]))
      }
    }
    return res


  }

  function flattenDepth(array, depth = 1) {
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
  }

  function fromPairs(array) {
    var pairs = {}
    for (var i = 0; i < array.length; i++) {
      pairs[array[i][0]] = array[i][1]
    }
    return pairs
  }

  function head(array) {
    if (array.length === 0) {
      return undefined
    }
    return array[0]
  }


  function indexOf(arr, val, start) {
    if (!start && !(start === 0)) {
      start = 0
    }
    for (var i = start; i < arr.length; i++) {
      if (arr[i] === val) {
        return i
      }
    }
    return -1
  }


  function lastIndexOf(arr, value, fromIndex = arr.length - 1) {
    for (var i = fromIndex; i >= 0; i--) {
      if (arr[i] === value) {
        return i
      }
    }
    return -1
  }

  function initial(arr) {
    arr.splice(arr.length - 1, 1)
    return arr
  }

  function intersection(...ary) {
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
  }
  function intersectionBy(arr1, arr2, iteratee) {
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
  }

  function intersectionWith(arr1, arr2, iteratee) {
    var res = []
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        if (iteratee(arr1[i], arr2[j])) {
          res.push(arr1[i])
        }
      }
    }
    return res
  }

  function reverse(array) {

    var i = 0
    var j = array.length - 1
    while (i <= j) {
      [array[i], array[j]] = [array[j], array[i]]
      i++
      j--
    }
    return array
  }

  function sortedIndex(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] >= value) {
        return i
      }
    }
    return array.length
  }

  function sortedIndexBy(arr, val, iteratee) {
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
  }

  function union(...ary) {
    var res = []
    for (var i = 0; i < ary.length; i++) {
      for (var j = 0; j < ary[i].length; j++) {
        if (!res.includes(ary[i][j])) {
          res.push(ary[i][j])
        }
      }
    }

    return res
  }
  function unionBy(...ary) {
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
  }

  function unionWith(...ary) {
    var iteratee = ary.pop()
    var res = []
    var arr = []
    for (var i = 0; i < ary.length; i++) {
      arr = arr.concat(ary[i])
    }
    var res = [arr[0]]
    for (var i = 1; i < arr.length; i++) {
      var isIn = false
      for (var j = 0; j < res.length; j++) {
        if (iteratee(arr[i], res[j])) {
          isIn = true
        }
      }
      if (!isIn) {
        res.push(arr[i])
      }
    }
    return res
  }

  function toArray(st) {
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
  }

  function max(ary) {
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
  }

  function maxBy(array, predicate) {
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
  }

  function min(arr) {
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
  }

  function minBy(array, key) {
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

  }

  function sum(ary) {
    var sum = 0
    for (var i = 0; i < ary.length; i++) {
      sum += ary[i]
    }
    return sum
  }

  function sumBy(array, predicate) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
      sum += predicate(array[i], i, array)
    }
    return sum
  }

  function mapValues(obj, mapper) {
    var resault = {}
    for (var kry in obj) {
      var val = obj[key]
      result[mapper(val, key, obj)] = val
    }
    return result
  }

  function groupBy(array, predicate) {
    var result = {}
    for (var i = 0; i < array.length; i++) {
      var key = predicate(array[i], i, array)
      if (!Array.isArray(result[key])) {
        result[key] = []
      }
      result[key].push(array[i])
    }
    return result
  }

  function sortedIndexOf(ary, num) {
    for (var i = 0; i < ary.length; i++) {
      if (ary[i] === num) {
        return i
      }
    }
  }

  function sortedLastIndex(array, value) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (array[i] === value) {
        return i + 1
      }
    }
  }

  function sortedLastIndexBy(arr, val, iteratee) {
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
  }

  function sortedLastIndexOf(array, value) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (array[i] === value) {
        return i
      }
    }
  }

  function sortedUniq(array) {
    var res = []
    for (var i = 0; i < array.length; i++) {
      if (!res.includes(array[i])) {
        res.push(array[i])
      }
    }
    return res
  }

  function sortedUniqBy(array, iteratee) {
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
  }

  function tail(ary) {
    ary.splice(0, 1)
    return ary
  }

  function take(ary, n = 1) {
    if (n > ary.length) {
      return ary
    }
    return ary.slice(0, n)
  }

  function takeRight(ary, n = 1) {
    if (n > ary.length) {
      return ary
    }
    if (n === 0) {
      return []
    }
    return ary.slice(-n)
  }

  function takeRightWhile(ary, predicate) {
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
  }

  function takeWhile(ary, predicate) {
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
  }

  function uniq(ary) {
    var res = []
    ary.forEach(it => {
      if (!res.includes(it)) {
        res.push(it)
      }
    });
    return res
  }

  function uniqBy(arr, iteratee) {

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
  }

  function uniqWith(arr, iteratee) {
    var res = [arr[0]]
    for (var i = 1; i < arr.length; i++) {
      var isIn = false
      for (var j = 0; j < res.length; j++) {
        if (iteratee(arr[i], res[j])) {
          isIn = true
        }
      }
      if (!isIn) {
        res.push(arr[i])
      }
    }
    return res
  }

  function unzip(arr) {
    var res = []
    for (var i = 0; i < arr[0].length; i++) {
      var item = []
      for (var j = 0; j < arr.length; j++) {
        item.push(arr[j][i])
      }
      res.push(item)
    }
    return res
  }

  function unzipWith(array, iteratee) {
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
  }

  function without(ary, ...values) {
    var res = []
    for (var i = 0; i < ary.length; i++) {
      if (!values.includes(ary[i])) {
        res.push(ary[i])
      }
    }
    return res
  }

  function xor(...ary) {
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
  }

  function xorBy(...arrays) {
    var iteratee = arrays.pop()
    var arr = []
    for (var i = 0; i < arrays.length; i++) {
      arr = arr.concat(arrays[i])
    }
    var map = {}
    if (typeof iteratee === 'function') {
      for (var i = 0; i < arr.length; i++) {
        var item = iteratee(arr[i])
        if (item in map) {
          map[item] = 0
        } else {
          map[item] = arr[i]
        }
      }
    }
    if (typeof iteratee === 'string') {
      for (var i = 0; i < arr.length; i++) {
        var item = arr[i][iteratee]
        if (item in map) {
          map[item] = 0
        } else {
          map[item] = arr[i]
        }
      }
    }
    var res = []
    for (var key in map) {
      if (map[key] !== 0) {
        res.push(map[key])
      }
    }
    return res
  }

  function xorWith(object, other, comparator) {
    var ary = object.concat(other)
    let map = new Map()
    for (let i = 0; i < ary.length; ++i) {
      for (let j = i + 1; j < ary.length; ++j) {
        if (comparator(ary[i], ary[j])) {
          map.set(i, true)
          map.set(j, true)
        }
      }
    }
    let res = []
    for (let j = 0; j < ary.length; ++j) {
      if (!map.has(j))
        res.push(ary[j])
    }
    return res
  }

  function zip(...arrays) {
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
  }

  function zipObject(arr, vals) {
    var res = {}
    for (var i = 0; i < arr.length; i++) {
      res[arr[i]] = vals[i]
    }
    return res
  }

  function zipWith(...ary) {
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
  }

  function countBy(collection, iteratee) {
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
        var num = collection[i][iteratee]
        if (num in map) {
          map[num]++
        } else {
          map[num] = 1
        }
      }
    }
    return map
  }

  function concat(arr, ...values) {
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
  }

  function every(collection, predicate) {
    var type = Object.prototype.toString.call(predicate)
    for (var i = 0; i < collection.length; i++) {
      if (type === '[object Function]') {
        if (!(predicate(collection[i]))) {
          return false
        }
      } else if (type === '[object String]') {
        if (!collection[predicate]) {
          return false
        }
      } else if (type === '[object Array]') {
        if (collection[i][predicate[0]] !== predicate[1]) {
          return false
        }
      } else if (type === '[object Object]') {
        for (var key in predicate) {
          if (collection[key] !== predicate[key]) {
            return false
          }
        }
      }
    }
    return true
  }

  function filter(arr, predicate) {
    var res = []
    predicate = identity(predicate)
    for (var i = 0; i < arr.length; i++) {
      if (predicate(arr[i])) {
        res.push(arr[i])
      }
    }
    return res
  }

  function find(arr, predicate, fromIdx = 0) {
    var res = []
    predicate = identity(predicate)
    for (var i = fromIdx; i < arr.length; i++) {
      if (predicate(arr[i])) {
        return arr[i]
      }
    }

  }

  function findLast(arr, predicate, fromIdx = arr.length - 1) {
    var res = []
    predicate = identity(predicate)
    for (var i = fromIdx; i >= 0; i--) {
      if (predicate(arr[i])) {
        return arr[i]
      }
    }

  }

  function flatMap(arr, iteratee) {
    var res = []
    for (var i = 0; i < arr.length; i++) {
      res = res.concat(iteratee(arr[i]))
    }
    return res
  }

  function flatMapDeep(arr, iteratee) {
    var newarr = flatMap(arr, iteratee)

    function fd(arr) {
      var res = []
      for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) !== 'object') {
          res.push(arr[i])
        } else {
          res = res.concat(fd(arr[i]))
        }
      }
      return res
    }
    return fd(newarr)
  }

  function flatMapDepth(arr, iteratee, depth = 1) {
    return flattenDepth(flatMap(arr, iteratee), depth = 1)
  }

  function forEach(arr, f) {
    if (Array.isArray(arr)) {
      for (var i = 0; i < arr.length; i++) {
        f(arr[i])
      }
    }
    if (typeof (arr) === 'object') {
      for (var key in arr) {
        f(arr[key], key, arr)
      }
    }
    return arr
  }

  function forEachRight(collection, iteratee) {
    for (var i = collection.length - 1; i >= 0; i--) {
      iteratee(collection[i], i, collection)
    }
    return collection
  }

  function groupBy(collection, iteratee) {
    iteratee = identity(iteratee)
    var map = {}
    for (var i = 0; i < collection.length; i++) {
      var item = iteratee(collection[i])
      if (item in map) {
        map[item].push(collection[i])
      } else {
        map[item] = [collection[i]]
      }
    }
    return map
  }

  function includes(collection, value, fromIndex = 0) {
    if (Array.isArray(collection)) {
      for (var i = fromIndex; i < collection.length; i++) {
        if (collection[i] === value) {
          return true
        }
      }
    } else if (typeof (collection) === 'object') {
      for (var key in collection) {
        if (collection[key] === value) {
          return true
        }
      }
    } else if (typeof (collection) == 'string') {
      var c = 0
      var max = 0
      var j = 0
      for (var i = fromIndex; i < collection.length; i++) {
        if (collection[i] === value[j]) {
          j++
          c++
          if (c > max) {
            max = c
          }
        } else {
          j = 0
          c = 0
        }
      }
      return max === value.length
    }
    return false
  }


  function invokeMap(collection, path, ...args) {
    if (typeof (path) == 'string') {
      return collection.map(it => it[path](...args))
    } else if (typeof (path) == 'function') {
      return collection.map(it => path.call(it, ...args))
    }
  }

  function keyBy(collection, iteratee) {
    iteratee = identity(iteratee)
    var map = {}
    collection.forEach(it => {
      map[iteratee(it)] = it
    })
    return map
  }

  function map(collection, iteratee) {
    iteratee = identity(iteratee)
    var res = []
    if (Array.isArray(collection)) {
      if (!collection.elngth) {
        return res
      }
      for (var i = 0; i < collection.length; i++) {
        res.push(iteratee(collection[i]))
      }
    } else if (typeof collection === 'object') {
      let keys = Object.keys(collection);
      if (!keys.length) {
        return res;
      } else {
        for (let key of keys) {
          res.push(iteratee(collection[key]));
        }
      }
    }
    return res
  }

  function partition(collection, predicate) {
    predicate = identity(predicate)
    var res = [[], []]
    collection.forEach(it => {
      predicate(it) ? res[0].push(it) : res[1].push(it)
    })
    return res
  }
  function reduce(collection, iteratee, accumulator = 0) {
    for (var idx in collection) {
      accumulator = iteratee(accumulator, collection[idx], idx, collection)
    }
    return accumulator
  }

  function reduceRight(collection, iteratee, accumulator = 0) {
    for (var i = collection.length - 1; i >= 0; i--) {
      accumulator = iteratee(accumulator, collection[i], i, collection)
    }
    return accumulator
  }

  function reject(collection, predicate) {
    predicate = identity(predicate)
    var res = []
    for (var i = 0; i < collection.length; i++) {
      if (!predicate(collection[i])) {
        res.push(collection[i])

      }
    }
    return res
  }

  function sample(arr) {
    var idx = (Math.random() * arr.length) | 0
    return arr[idx]
  }

  function sampleSize(arr, num) {
    var res = []
    for (var i = 0; i < num; i++) {
      var idx = (Math.random() * arr.length) | 0
      res.push(arr[idx])
    }
    return res
  }

  function shuffle(arr) {
    var res = []
    while (arr.length > 1) {
      var idx = (Math.random() * arr.length) | 0
      var cut = arr.splice(idx, 1)
      res = res.concat(cut)
    }
    return res.concat(arr)
  }

  function size(collection) {
    if (Array.isArray(collection) || typeof (collection) == 'string') {
      return collection.length
    } else if (typeof (collection) == 'object') {
      var c = 0
      for (var key in collection) {
        c++
      }
      return c
    }
  }

  function some(collection, predicate) {
    predicate = identity(predicate)
    for (var i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return true
      }
    }
    return false
  }

  function identity(predicate) {
    var type = Object.prototype.toString.call(predicate)
    if (type === '[object Function]') return predicate
    else if (type === '[object String]') return ((it) => it[predicate])
    else if (type === '[object Array]') return (it) => it[predicate[0]] == predicate[1]
    else if (type === '[object Object]') return (it => {
      for (var key in predicate) {
        if (predicate[key] !== it[key]) {
          return false
          break
        }
      }
      return true
    })

  }

  function defer(func, ...args) {
    return setTimeout(func, 0, ...args) - 1
  }

  function delay(func, wait, ...args) {
    return setTimeout(func, wait, ...args) - 1
  }

  function castArray(value) {
    if (Array.isArray(value)) {
      return value
    }
    var res = []
    for (var i = 0; i < arguments.length; i++) {
      res.push(arguments[i])
    }
    return res
  }

  function conformsTo(object, source) {
    for (var key in source) {
      return source[key](object[key])
    }
  }

  function eq(value, other) {
    if (value !== value && other !== other) {
      return true
    }
    return value === other
  }

  function gt(value, other) {
    return value > other
  }

  function gte(value, other) {
    return value >= other
  }

  function isArguments(value) {
    return Object.prototype.toString.call(value) === '[object Arguments]'
  }

  function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]'
  }

  function isArrayBuffer(value) {
    return Object.prototype.toString.call(value) === '[object ArrayBuffer]'
  }

  function isArrayLike(value) {
    return (typeof (value) != 'function' && value != null && value.length > 0)
  }

  function isArrayLikeObject(value) {
    return (typeof (value) != 'function' && value != null && Object.prototype.toString.call(value) != '[object Object]')
  }
  function isBoolean(value) {
    return Object.prototype.toString.call(value) === '[object Boolean]'
  }

  function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]'
  }

  function isElement(value) {
    return value !== null && typeof (value) === 'object' && value.nodeType === 1 && typeof value.nodeName === 'string'
  }

  function isEmpty(value) {
    for (var i in value) {
      return false
    }
    return true
  }

  function isEqual(value, other) {
    var typev = Object.prototype.toString.call(value)
    var typeo = Object.prototype.toString.call(other)
    if (value !== value && other !== other) {
      return true
    } else if (typeof (value, other) === 'string' || typeof (value, other) === 'number') {
      return value === other
    } else if (Array.isArray(value) && Array.isArray(other) && value.length == other.length) {
      for (var i = 0; i < value.length; i++) {
        if (typeof (value[i]) === 'object' && typeof (other[i]) === 'object') {
          isEqual(value[i], other[i])
        } else if (value[i] != other[i]) {
          return false
        }
      }
      return true
    } else if (typev === '[object Object]' && typeo === '[object Object]') {
      for (var i in value) {
        if (value[i] != other[i]) {
          return false
        }
      }
      for (var j in other) {
        if (other[j] != value[j]) {
          return false
        }
      }
      return true
    }
    return false
  }

  function isEqualWith(value, other, customizer) {
    for (var i = 0; i < value.length; i++) {
      if (customizer(value[i], other[i]) == false) {
        return false
      }
    }
    return true
  }

  function isError(value) {
    return Object.prototype.toString.call(value) === '[object Error]'
  }

  function isFinite(value) {
    return Number.isFinite(value)
  }

  function isFunction(value) {
    return Object.prototype.toString.call(value) == '[object Function]'
  }

  function isInteger(value) {
    return Number.isInteger(value)
  }

  function isLength(value) {
    return isInteger(value) && value > 0 && value < 2 ** 32 - 1
  }

  function isMap(value) {
    return Object.prototype.toString.call(value) === '[object Map]'
  }

  function isMatch(object, source) {
    for (var key in source) {
      if (typeof (object[key]) == 'object' && typeof (source[key]) == 'object') {
        isMatch(object[key], source[key])
      } else {
        return object[key] == source[key]
      }
    }
  }

  function isMatchWith(object, source, customizer) {
    for (var key in source) {
      if (customizer(object, source) == false) {
        return false
      }
    }
    return true
  }


  function isNaN(value) {
    if (typeof value == 'number' || typeof value == 'object') {
      var val = value.valueOf()
      return val !== val
    }
    return value != value
  }

  function isNil(value) {
    return value === null || value === undefined
  }

  function isNull(value) {
    return Object.prototype.toString.call(value) === '[object Null]'
  }

  function isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]'
  }

  function isObject(value) {
    return value !== null
  }

  function isObjectLike(value) {
    return (typeof value === 'object' && value !== null)
  }

  function isPlainObject(value) {
    var type = Object.prototype.toString.call(value)
    return type == '[object Object]' || type == null
  }

  function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]'
  }

  function isSafeInteger(value) {
    return Number.isSafeInteger(value)
  }

  function isSet(value) {
    return Object.prototype.toString.call(value) === '[object Set]'
  }

  function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]'
  }

  function isSymbol(value) {
    return Object.prototype.toString.call(value) == '[object Symbol]'
  }

  function isTypedArray(value) {
    return Object.prototype.toString.call(value) == "[object Uint8Array]"
  }


  return {
    compact,
    difference,
    differenceBy,
    differenceWith,
    join,
    last,
    lastindextOf,
    nth,
    pull,
    pullAll,
    pullAllBy,
    pullAllWith,
    chunk,
    drop,
    dropRight,
    dropRightWhile,
    dropWhile,
    fill,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    lastIndexOf,
    initial,
    intersection,
    intersectionBy,
    intersectionWith,
    reverse,
    sortedIndex,
    sortedIndexBy,
    union,
    unionBy,
    unionWith,
    toArray,
    max,
    maxBy,
    min,
    minBy,
    sum,
    sumBy,
    mapValues,
    groupBy,
    sortedIndexOf,
    sortedLastIndex,
    sortedLastIndexBy,
    sortedLastIndexOf,
    sortedUniq,
    sortedUniqBy,
    tail,
    take,
    takeRight,
    takeRightWhile,
    takeWhile,
    uniq,
    uniqBy,
    uniqWith,
    unzip,
    unzipWith,
    without,
    xor,
    xorBy,
    xorWith,
    zip,
    zipObject,
    zipWith,
    countBy,
    concat,
    every,
    filter,
    find,
    findLast,
    flatMap,
    flatMapDeep,
    flattenDepth,
    flatMapDepth,
    forEach,
    forEachRight,
    groupBy,
    invokeMap,
    keyBy,
    includes,
    map,
    partition,
    reduce,
    reduceRight,
    reject,
    sample,
    sampleSize,
    shuffle,
    size,
    some,
    identity,
    defer,
    delay,
    castArray,
    conformsTo,
    eq,
    gt,
    gte,
    isArguments,
    isArguments,
    isArray,
    isArrayBuffer,
    isArrayLike,
    isArrayLikeObject,
    isBoolean,
    isDate,
    isElement,
    isEmpty,
    isEqual,
    isEqualWith,
    isError,
    isFinite,
    isFunction,
    isInteger,
    isLength,
    isMap,
    isMatch,
    isMatchWith,
    isNaN,
    isNil,
    isNull,
    isNumber,
    isObject,
    isObjectLike,
    isPlainObject,
    isRegExp,
    isSafeInteger,
    isSet,
    isString,
    isSymbol,
    isTypedArray

  }
}()

