import { BrowserRouter, Route, Routes } from "react-router-dom";

import NewGame from "./pages/NewGame";
import Game from "./pages/Game";

/** Components */

/**
 * The router component.
 * @component
 */
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewGame />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}
