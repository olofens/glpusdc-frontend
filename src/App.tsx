import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Chart } from "./Charts/Chart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <h2>Shows stats from the GlpUSDCVault</h2>
      <p>
        This site is in no way affiliated with Umami, GMX, or any other entity
        that built this vault. The page is built using The Graph, see raw
        subgraph data{" "}
        <a
          href="https://thegraph.com/hosted-service/subgraph/olofens/glpusdc?query=Default"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <p>
        <a
          href="https://github.com/olofens/glpusdc-frontend"
          target="_blank"
          rel="noreferrer"
        >
          Frontend repo
        </a>
        - please make PRs to this if you want, threw it together in under an
        hour.
      </p>
      <p>
        <a
          href="https://github.com/olofens/glpusdc"
          target="_blank"
          rel="noreferrer"
        >
          Subgraph repo
        </a>
      </p>
      <p>
        GlpUSDCVault:{" "}
        <a
          href="https://arbiscan.io/address/0x2e2153Fd13459eBA1F277Ab9Acd624F045d676ce"
          target="_blank"
          rel="noreferrer"
        >
          0x2e2153Fd13459eBA1F277Ab9Acd624F045d676ce
        </a>
      </p>
      <QueryClientProvider client={queryClient}>
        <Chart />
      </QueryClientProvider>
    </div>
  );
}

export default App;
