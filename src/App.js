import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleRecipe from "./pages/SingleRecipe";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/recipe/:id" element={<SingleRecipe />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
