type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  color: string;
  ticker: string;
};

export function returnCapitalPrices(stocks: StockItem[], data: any) {
  let prices = [];
  let capital = [];
  for (let l = 0; l < 99; l++) {
    let obj = { x: l, y: 0 };
    capital.push(obj);
  }
  let info = data;
  for (let k = 0; k < info.length; k++) {
    let foundEl = stocks.find((el: any) => el.ticker === info[k].title)!;
    if (foundEl.shares > 0) {
      for (let i = 0; i < 99; i++) {
        let intVar = parseFloat(info[k].elements[i].y);
        let multVar = intVar * foundEl.shares;
        capital[i].y += multVar;
        capital[i].x = info[k].elements[i].x;
      }
      prices.push(info[k].elements[info[k].elements.length - 1].y);
    }
  }
  let returnObj = {
    prices: prices,
    capital: capital,
  };

  return returnObj;
}
