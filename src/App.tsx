import { GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";
import {Dashboard} from "./components/Dashboard";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
      <h1>Hello World</h1>
    </>
  );
}
