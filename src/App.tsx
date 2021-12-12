import {Dashboard} from './components/Dashboard/index'

import { ItemProvider } from "./hooks/useItems";

import "./styles/global.module.scss";

function App() {
  return (
    <ItemProvider>
      <Dashboard />
    </ItemProvider>
  );
}

export default App;
