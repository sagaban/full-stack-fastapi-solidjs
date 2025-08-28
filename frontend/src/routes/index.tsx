import { createFileRoute } from "@tanstack/solid-router";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/")({
	component: IndexComponent,
});

const handleClick = () => {
	console.log("clicked");
};

function IndexComponent() {
	return (<div>
		<h1>Hello World</h1>
		<Button onClick={handleClick}>Click me</Button>
	</div>
	)
}
