import { queryClient } from "core/QueryClient";
import RoutesProvider from "../routes";
import { ThemProvider } from "../themes";
import { QueryClientProvider } from "react-query";
import ReduxProvider from "core/ReduxProvider";

function App() {
  return (
    <ThemProvider>
      <ReduxProvider>
        <QueryClientProvider client={queryClient}>
          <RoutesProvider />
        </QueryClientProvider>
      </ReduxProvider>
    </ThemProvider>
  );
}

export default App;
