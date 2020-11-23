export function returnCorrectReducer(
  correct: any,
  options: any,
  id: number,
  isCorrect: boolean
) {
  let arr = [...correct];
  let correctedVal = [];
  let foundArr = correct.find((el: any) => el.id === id)!;
  let ind = arr.indexOf(foundArr);
  if (isCorrect === true) arr[ind].correct = true;
  else if (isCorrect === false) arr[ind].correct = false;
  correctedVal = arr;
  let reducer = 0;
  for (let i = 0; i < arr.length; i++)
    if (arr[i].correct === true) reducer += options[i].value;

  let retObj = {
    correct: correctedVal,
    reducer: reducer,
  };
  return retObj;
}
