import MyHeader from "./components/header/MyHeader";
import MyMain from "./components/main/MyMain";
import MyFooter from "./components/footer/MyFooter";
import ToTop from "./components/toTop/ToTop";

function App() {
  return (
    <div>
      <ToTop />
      <MyHeader />
      <MyMain />
      <MyFooter />
    </div>
  );
}

export default App;