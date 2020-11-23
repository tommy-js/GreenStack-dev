export function validateString(input: string) {
  let numberCheck = /^\d+$/;
  let emptyCheck = /\S+/;
  let value = "";
  if (numberCheck.test(input) === true) {
    value = input;
  }
  if (emptyCheck.test(input) === false) {
    value = "";
  }
  return value;
}

type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  color: string;
  ticker: string;
};

export function validateStocks(
  stocks: StockItem[],
  parsedInputVal: number,
  stockId: string,
  title: string,
  ticker: string
) {
  let stocksArr: StockItem[] = [...stocks];
  let stock: StockItem = {
    stockId: stockId,
    title: title,
    ticker: ticker,
    shares: parsedInputVal,
    color: "",
  };
  stocksArr.push(stock);
  return stocksArr;
}
