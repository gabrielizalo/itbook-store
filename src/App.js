import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home/Home';
const queryClient = new QueryClient();
const App = function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
