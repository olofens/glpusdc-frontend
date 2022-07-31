import { glpUsdcQuery, SUBGRAPH_URL } from "../constants";
import { useSubgraphQuery } from "./useQuery";
import { GLPUSDCMetric } from "../types";

export const useData = (): GLPUSDCMetric[] | undefined => {
  const { data } = useSubgraphQuery(SUBGRAPH_URL, "glpusdc", glpUsdcQuery);

  return data;
};
