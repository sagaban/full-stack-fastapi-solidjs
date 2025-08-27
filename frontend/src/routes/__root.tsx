import { createRootRouteWithContext, Outlet } from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
// import TanStackQueryProvider from "../integrations/tanstack-query/provider.tsx";

export const Route = createRootRouteWithContext()({
	component: RootComponent,
});

function RootComponent() {
	return (
		<div>
			{/* <TanStackQueryProvider> */}

			<Outlet />
			<TanStackRouterDevtools />
			{/* </TanStackQueryProvider> */}
		</div>
	);
}
