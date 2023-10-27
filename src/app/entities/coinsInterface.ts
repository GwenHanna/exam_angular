export interface CoinsInterface {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  priceUsd: string;
  supply: string;
  maxSupply?: string | null;
  explorer: string;
}

export interface CoinsResponse {
  data: CoinsInterface[];
}
