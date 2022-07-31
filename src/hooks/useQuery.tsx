import { useQuery } from "@tanstack/react-query";
import apollo from "../helpers/apollo";

export const useSubgraphQuery = (
  subgraphUrl: string,
  queryName: string,
  query: string
) => {
  return useQuery(
    [queryName],
    async () => {
      const response = await apollo<any>(subgraphUrl, query);

      // Transform string values to floats

      if (!response) return null;

      const dataKeys = Object.keys(response.data);
      if (dataKeys.length === 1) {
        const dataKey = dataKeys[0];
        return response.data[dataKey].map((metric: any) =>
          Object.entries(metric).reduce(
            //@ts-ignore
            (obj, [key, value]) => (
              //@ts-ignore
              (obj[key] = key === "isotime" ? value : parseFloat(value)), obj
            ),
            {}
          )
        );
      } else {
        // do nothing, shouldnt happen
        return response.data;
      }
    },
    { refetchOnMount: false }
  );
};
