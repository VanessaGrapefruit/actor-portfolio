import { ReactNode } from "react";

export type NavigationItem = {
	url: string;
	title: string;
	element: ReactNode;
}