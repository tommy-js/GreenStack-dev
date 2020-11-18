export function tagged(text: string) {
  let taggedArr = [];
  if (text.includes("@")) {
    let indexArr = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "@") indexArr.push(i + 1);
    }
    const regex = /\s/;
    for (let j = 0; j < indexArr.length; j++) {
      let splitStr = text.slice(indexArr[j]);
      let spaceSearch = splitStr.search(regex);
      let lastInd = indexArr[j] + spaceSearch;
      if (spaceSearch > 0) {
        let obj = {
          first: indexArr[j] - 1,
          last: lastInd - 1,
        };
        taggedArr.push(obj);
      } else {
        let obj = {
          first: indexArr[j] - 1,
          last: text.length,
        };
        taggedArr.push(obj);
      }
    }
  }
  return taggedArr;
}

export function returnTaggedString(text: string) {
  let tags = tagged(text);
  let strSplit = [];
  if (tags.length === 0) {
    strSplit.push(text);
  }
  for (let i = 0; i < tags.length; i++) {
    if (i === 0) {
      if (tags[i].first > 1) {
        let firstString = text.slice(0, tags[i].first - 1);
        strSplit.push(firstString);
      }
    }

    let str = text.slice(tags[i].first, tags[i].last + 1);
    if (i < tags.length - 1) {
      let secondStr = text.slice(tags[i].last + 1, tags[i + 1].first);
      strSplit.push(str, secondStr);
    } else {
      strSplit.push(str);
    }

    if (i === tags.length - 1) {
      if (tags[i].last != tags.length) {
        let lastString = text.slice(tags[i].last + 1, text.length);
        strSplit.push(lastString);
      }
    }
  }
  return strSplit;
}
