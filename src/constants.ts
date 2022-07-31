export const SUBGRAPH_URL =
  "https://api.thegraph.com/subgraphs/name/olofens/glpusdc";

export const glpUsdcQuery = `
query {
    glpUSDCMetrics(first: 1000, orderBy: timestamp, orderDirection: asc) {
      id
      timestamp
      isotime
      USDCCount
      GLPCount
      sbfGMXCount
      usdcPerShare
      sBtcAllocInUSDC
      sEthAllocInUSDC
      glpAllocInUSDC
      totalAssets
      glpUSDCSupply
    }
  }
`;
