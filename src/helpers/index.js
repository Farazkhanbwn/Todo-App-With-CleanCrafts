export const generateIncrementalIdsFromListOfObj = (list) => {
  console.log("Length of a List is : " + list.length);
  const lastObject = list[list.length - 1];
  const newID = parseInt(lastObject?.id ?? 0) + 1;
  return newID;
};
