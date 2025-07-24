import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/upload" component={Upload} />
      </Switch>
    </QueryClientProvider>
  </React.StrictMode>
);
