const HASH_NUM = 9973;

const node = {
  next: undefined,
  value: undefined,
  key: undefined,
  id: undefined,

  setValue(_value) {
    this.value = _value;
    return this.value;
  },
  setKey(_key) {
    this.key = _key;
    return this.key;
  },
  setId(_id) {
    this.id = _id;
    return this.id;
  },
  setNext(_node) {
    this.next = _node;
    return this.next;
  },
};

const hashDecorator = (func) => {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      console.log("해당 값이 이미 존재합니다.");
      return;
    }
    let result = func.call(this, x);
    cache.set(x, result);
    console.log(result);
    return result;
  };
};

node.setValue = hashDecorator(node.setValue);
node.setValue(1);
node.setValue(1);
