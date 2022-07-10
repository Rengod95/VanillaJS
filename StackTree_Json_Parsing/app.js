let data = require("./stack_data_from_jumpit_with_company_id_and_img.json");
data = JSON.stringify(data).replace(/\"/gi, "");
let newData = data
  .split("[")
  .toString()
  .split("]")
  .filter((val) => {
    return val.includes("stack_tag");
  })
  .toString()
  .split(",")
  .filter((val) => {
    return val !== "" && val !== '"stack_tag":';
  });
let result = new Set(newData);
result = [...result];
// .map((val, idx) => {
//   return [idx, val];
// })
// .slice(1, result.length);
console.log(JSON.stringify(result, null, "\t"));
