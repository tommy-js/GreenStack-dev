export function taggedUsers(text: string) {
  let taggedArr = [];
  if (text.includes("@")) {
    let indexArr = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "@") indexArr.push(i + 1);
    }
    const regex = /\s/;
    for (let j = 0; j < indexArr.length; j++) {
      let splitStr = text.slice(indexArr[j]);
      let lastInd = splitStr.search(regex);
      if (lastInd > 0) {
        let splicedArr = splitStr.substring(0, lastInd);
        taggedArr.push(splicedArr);
      } else {
        let splicedArr = splitStr.substring(0, splitStr.length);
        taggedArr.push(splicedArr);
      }
    }
  }
  return taggedArr;
}
