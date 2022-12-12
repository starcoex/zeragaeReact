import GlobalStyle from "./styles/GlobalStyle";
import Router from "./routes/Router";
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router></Router>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
