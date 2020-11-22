type WatchListItem = {
  stockId: string;
  title: string;
  ticker: string;
  timestamp: number;
};

export function watchlistArray(
  stockId: string,
  title: string,
  ticker: string,
  watchlist: WatchListItem[]
) {
  let timestamp = Math.floor(Date.now() / 1000);
  let watchlistItem = {
    stockId: stockId,
    title: title,
    ticker: ticker,
    timestamp: timestamp,
  };
  let watchListArr = [...watchlist];
  watchListArr.push(watchlistItem);
  return watchListArr;
}
