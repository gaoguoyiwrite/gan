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

  difference: function (array, [values]) {
    var resault = []
    for (var i = 0; i < array.length; i++) {
      if (!(array[i] in [values])) {
        resault.push(array[i])
      }
    }
    return resault
  },

  // differenceBy: function (ary, ary2, val) {
  //   var res = []
  //   for (var i = 0; i < ary.length; i++) {
  //     if (!(ary[i] in ar))
  //   }

  // },
  join: function (ary, string) {
    var str = ""
    for (var i = 0; i < ary.length - 1; i++) {
      str += ary[i] + string
    }
    return str + ary[ary.length - 1]
  },

  last: function (ary) {
    return ary[ary.length - 1]
  },

  lastIndextOf: function (ary, value, start) {
    if (!start) {
      start = ary.length
    }
    for (var i = start - 1; i >= 0; i--) {
      if (ary[i] === value)
        break
    }
    return i
  },


  chunk: function (ary, size) {
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

  // dropWhile: function ()

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

  findIndex: function (ary, val) {
    for (var i = 0; i < ary.length; i++) {

    }
  },


  // findLastIndex: function () {

  // }

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

  flattenDepth: function (array, depth = 1) {
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

  initial: function (arr) {
    arr.splice(arr.length - 1, 1)
    return arr
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

  sortedindex: function (array, value) {
    var left = 0
    var right = array.length - 1
    while (left <= right) {
      var mid = Math.ceil((left + right) / 2)
      if (array[mid] === value || (array[mid] > value && array[mid - 1] < value)) {
        return mid
      } else if (array[mid] > value) {
        left = mid + 1
      } else {
        right = mid = 1
      }
    }
    return left
  },

  every: function (collection,) {

  },

  // filter: function (array, test) {

  // },

  toArray: function (st) {
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

  min: function (arr) {
    if (arr.length == 0) {
      return undefined
    }
    var min = arr[0]
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < mim) {
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


}