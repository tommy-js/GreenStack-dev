type Stocks = {
  country: string;
  description: string;
  marketcap: string;
  sector: string;
  shares: number;
  stockId: string;
  ticker: string;
  title: string;
};

export const returnStockSearch = (searchQuery: string, stocks: Stocks[]) => {
  console.log(searchQuery);
  let foundObj = stocks.filter((el: any) => el.title.includes(searchQuery));
  return foundObj;
};
