const getProperties = (object) => {
  if (!object) return [];
  let arr = [];
  for (key in object) {
    arr.push(key);
  }
  return arr;
};

// console.log(getProperties({a:3,nazim:2}));

const isPlainObject = (object) => {
  if (object == null || Object.getPrototypeOf(object) != Object.prototype)
    return false;
  return true;
};

// console.log(isPlainObject([1,2]));

const modifyObject = (object) => {
  return {
    ...object,
    isObject: isPlainObject(object),
    getPropertiesNb: getProperties(object).length,
  };
};

// console.log(modifyObject({1:1,2:2}));

const makePairs = (object) => {
  if (isPlainObject(object)) {
    return getProperties(object).map((key) => [key, object[key]]);
  }
  return [];
};
// console.log(makePairs({1:2,21:2}));
const without = (object, ...props) => {
  props.forEach((propertie) => {
    if (propertie in object) delete object[propertie];
  });
  return object;
};

// console.log(without({ 1: 2, 3: 2 }, "1", "@"));

const isEmpty = (obj) => {
  if (!isPlainObject(obj)) return true;
  for (key in obj) if (obj[key]) return false;
  return true;
};

// console.log(isEmpty());

const isEqual = (obj1,obj2)=>{
    if(isEmpty(obj1) || isEmpty(obj2)) return false;
    let keys1=getProperties(obj1);
    let keys2=getProperties(obj2);
    if(keys1.length != keys2.length) return false;
    return keys1.every(key=>
        obj2.hasOwnProperty(key)&&obj2[key]==obj1[key])
    }
// console.log(isEqual({1:3},{1:2}));

const intersection= (obj1,obj2)=>{
    if(isEqual(obj1,obj2)) return obj1;
   let  object = {}
    for(key in getProperties(obj1)) if(obj2.hasOwnProperty(key)&&obj2[key]==obj1[key]) object = {...object,[key]:obj1[key]} 
    return object
}

console.log(intersection(null,null));
