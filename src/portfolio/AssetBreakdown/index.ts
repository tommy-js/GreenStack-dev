export function returnBreakdown(stocks: any, currentPrices: any, money: any) {
  var totalBreakdown = [];
  let titles = [];
  var len = 0;
  for (let k = 0; k < currentPrices.length; k++) {
    if (stocks[k].shares > 0) len += 1;
  }
  console.log(len);
  let liquid = parseFloat(money);
  totalBreakdown.push(liquid);
  titles.push("Liquid");
  for (let i = 0; i < len; i++) {
    let num = parseFloat(currentPrices[i]);
    totalBreakdown.push(stocks[i].shares * num);
    titles.push(stocks[i].stockTitle);
  }
  let returnObj = {
    totalBreakdown: totalBreakdown,
    titles: titles,
  };
  return returnObj;
}
