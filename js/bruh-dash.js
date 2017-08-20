var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    return arr[0];      
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length - 1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, num) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === num){
        return i;
      }else if(i === arr.length - 1){
        return -1;
      }
    }
  },

  // returns the index of the first matching element from left to right
  lastIndexOf: function (arr, num) {
    for(var i = arr.length - 1; i >= 0; i--){
      if(arr[i] === num){
        return i;
      }else if(i === 0){
        return -1;
      }
    }
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    var newArray = [];
    for(var i = 0; i < arr.length; i++){
      if(i < arr.length - 1){
        newArray.push(arr[i]);
      }
    }return newArray;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    var compactArray = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i]){
        compactArray.push(arr[i]);
      }
    }
    return compactArray;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    var sliceArray = [];
    for(var i = 0; i < arr.length; i++){
      if(i >= start && i < end){
        sliceArray.push(arr[i]);
      }
    }
    return sliceArray;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, num){
    var newArray = [];
    for(var i = 0; i < arr.length; i++){
      if(i >= num){
        newArray.push(arr[i]);
      }else if(num === undefined){
        arr.splice(0, 1);
        return arr;
      }
    }
    return newArray;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, num) {
    var newArray = [];
    for(var i = arr.length - 1; i >= 0; i--){
      if(i < arr.length - num){
        newArray.unshift(arr[i]);
      }else if(num === 0){
        return arr;
      }else if(num === undefined){
        arr.splice(i,1);
        return arr;
      }
    }
    return newArray;
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, num) {
    var takeArray = [];
    for(var i = 0; i < arr.length; i++){
      if(i < num){
        takeArray.push(arr[i]);
      }else if(num === undefined){
        takeArray.push(arr[0]);
        return takeArray;
      }else if(num === 0){
        return takeArray;
      }else if(num > arr.length){
        return arr;
      }
    }
    return takeArray;
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, num) {
    var takeRightArray = [];
    for(var i = arr.length - 1; i >= 0; i--){
      if(i > arr.length - num - 1){
        takeRightArray.unshift(arr[i]);
      }else if(num === undefined){
        takeRightArray.push(arr[i]);
        return takeRightArray;
      }else if(num === 0){
        return takeRightArray;
      }else if(num > arr.length){
        return arr;
      }
    }
    return takeRightArray;
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, value, start, end) {
    for(var i = 0; i < arr.length; i++){
      if(i >= start && i < end){
        arr.splice(i, 1, value);
      }else if(start === undefined && end === undefined){
        arr.splice(i, 1, value);
      }
    }
    return arr;
  },

  // removes all given values from an array
  pull: function (arr, valueArray) {
    for(var i = arr.length - 1; i >= 0; i--){
      for(var j = valueArray.length - 1; j >= 0; j--){
        if(arr[i] === valueArray[j]){
        arr.splice(i, 1);
        }
      }  
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, pullIndices) {
    for(var i = arr.length - 1; i >=0; i--){
      for(var j = pullIndices.length - 1; j >= 0; j--){
        if(i === pullIndices[j]){
          arr.splice(i, 1);
        }
      }
    }
    return arr;
  },

  // creates an array excluding all the specified values
  without: function(arr, specifiedValues) {
    var newArray = [];
    for(var i = arr.length - 1; i >= 0; i--){
      for(var j = specifiedValues.length - 1; j>=0; j--){
        if(arr[i] === specifiedValues[j]){
          arr.splice(i, 1);
        }
      }
    }
    return arr;
  },

  // returns an array with specified values excluded
  difference: function(arr1, arr2) {
    for(var i = arr1.length - 1; i >= 0; i-- ){
      for(var j = arr2.length - 1 ;j >= 0; j--){
        if(arr1[i] === arr2[j]){
          arr1.splice(i, 1);
        }
      }
    }
    return arr1;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (arr1, arr2) {
    var zipArray = [];
    for(var i = 0; i < arr1.length; i++){
      var tuple = [];
      tuple.push(arr1[i], arr2[i]);
      zipArray.push(tuple);
    }
    return zipArray;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};