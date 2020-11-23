import companyProfiles from "../../companies/companyProfiles";
type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  color: string;
  ticker: string;
};

type CompanyProfiles = {
  stockId: string;
  title: string;
  shares: number;
  ticker: string;
  description: string;
  sector: string;
  country: string;
  marketcap: string;
};

export function returnStocks(stocks: StockItem[]) {
  let stocksArr = [...stocks];
  let arr = [];
  for (let i = 0; i < stocksArr.length; i++) {
    let found = companyProfiles.find(
      (el: CompanyProfiles) => el.stockId === stocksArr[i].stockId
    );
    if (found) {
      let obj = { ...found, shares: stocksArr[i].shares };
      arr.push(obj);
    }
  }
  return stocksArr;
}
