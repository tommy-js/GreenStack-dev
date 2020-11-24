export function returnUnfollowArray(data: any, userId: string) {
  let testArray = [...data];
  let foundElement = testArray.find((el) => el.userId === userId)!;
  let elementIndex = testArray.indexOf(foundElement);
  testArray.splice(elementIndex, 1);
  return testArray;
}
