import Navbar from "./components/Navbar";
import BenefitsPage from "./components/BenefitsPage";
import "./App.css";
import MoneyView from "./components/MoneyView";
import NewbiePage from "./components/NewbiePage";
import OpeningPage from "./components/OpeningPage";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <OpeningPage></OpeningPage>
      <BenefitsPage></BenefitsPage>
      <MoneyView></MoneyView>
      <NewbiePage></NewbiePage>
    </>
  );
}

export default App;
