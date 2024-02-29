import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import RoutesApp from './components/routing/RouterApp';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesApp></RoutesApp>
      </BrowserRouter>
      {/*<span>hola</span>*/}
    </>
  );
}