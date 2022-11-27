import React, { ReactNode } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { routes } from "src/constants/routes";
import { Footer } from "./Footer";

type LayoutProps = {
	children: ReactNode;
}

export const Layout: React.FC = () => {
	return (
		<React.Fragment>
			<main className="app-main">
				<Routes>
					{ routes.map(item => <Route path={item.url} element={item.element}></Route>) }
				</Routes>
				<Outlet></Outlet>
			</main>
			<Footer/>
		</React.Fragment>
	);
}