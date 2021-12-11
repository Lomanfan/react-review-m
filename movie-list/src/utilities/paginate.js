import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
  // _(items)  //convert items to a lodash obj
  // _.slice(item, startIndex) //create an array
  // _.take()  //to take number of items for the array
  // .value()  //convert to lodash obj to a regular array
}