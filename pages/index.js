import Home from "../pages/home";
import PreLoader from "../pages/pre-loader";

export default function App() {
  return (
    <PreLoader>
      <Home />
    </PreLoader>
  );
}
