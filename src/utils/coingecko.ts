const symbolIdMap = {
  eth: "ethereum",
  matic: "matic-network",
  wbtc: "wrapped-bitcoin",
  usdc: "usd-coin",
  uma: "uma",
  badger: "badger-dao",
  weth: "weth",
  boba: "boba-network",
  dai: "dai",
  bal: "balancer",
  usdt: "tether",
  acx: "across-protocol",
  snx: "havven",
  pool: "pooltogether",
  usdbc: "bridged-usd-coin-base",
  op: "optimism",
};

const RETRY_COUNT = 10;

export async function fetchHistoricPrice(symbol: string, date: Date) {
  symbol = symbol.toLowerCase();
  const id = symbolIdMap[symbol as keyof typeof symbolIdMap];

  if (!id) {
    throw new Error(`Symbol ${symbol} not supported on Coingecko`);
  }

  const formattedDate = `${date.getUTCDate()}-${
    date.getUTCMonth() + 1
  }-${date.getUTCFullYear()}`;
  const response = await fetchRetry(
    `https://api.coingecko.com/api/v3/coins/${id}/history?date=${formattedDate}&localization=false`
  );
  const { market_data } = (await response.json()) as {
    market_data: { current_price: { usd: number } };
  };
  const usd = market_data?.current_price?.usd;
  console.log({ symbol, usd, formattedDate });

  if (!usd) {
    throw new Error(`No price found for ${symbol} on ${formattedDate}`);
  }

  return usd;
}

async function fetchRetry(...args: Parameters<typeof fetch>) {
  let count = RETRY_COUNT;
  while (count > 0) {
    try {
      const response = await fetch(...args);
      if (!response.ok) {
        throw new Error(`Fetch failed with status: ${response.status}`);
      }
      return response;
    } catch (error) {
      console.warn(
        `Error while fetching ${args[0]}: ${
          (error as Error).message
        }. Retrying ${count} more times...`
      );
    }

    await new Promise((resolve) =>
      setTimeout(resolve, 1_000 * (2 ^ (RETRY_COUNT - count)))
    );

    count -= 1;
  }

  throw new Error(`Too many retries`);
}
