import { helper } from '@ember/component/helper';

function equal([prop1, prop2]) {
  return prop1 === prop2;
}

export default helper(equal);
