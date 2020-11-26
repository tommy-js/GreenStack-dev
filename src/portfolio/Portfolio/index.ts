import companyProfiles from "../../companies/companyProfiles";
import { StockItem } from "../../types/types";

type CompanyProfiles = {
  stockId: string;
  title: string;
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
