import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Change to use the navbar layout
import Index from "./pages/Index.jsx";
const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Markets",
    to: "/markets",
  },
  {
    title: "Economy",
    to: "/economy",
  },
  {
    title: "Companies",
    to: "/companies",
  },
  {
    title: "Tech",
    to: "/tech",
  },
  {
    title: "Opinion",
    to: "/opinion",
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;