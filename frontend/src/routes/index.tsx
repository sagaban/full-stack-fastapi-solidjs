import { Slider } from "@ark-ui/solid/slider";
import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/")({
	component: IndexComponent,
});

function IndexComponent() {
	return (<div>
		<h1>Hello World</h1>
		<Slider.Root>
			<Slider.Label>Label</Slider.Label>
			<Slider.ValueText />
			<Slider.Control>
				<Slider.Track>
					<Slider.Range />
				</Slider.Track>
				<Slider.Thumb index={0}>
					<Slider.HiddenInput />
				</Slider.Thumb>
			</Slider.Control>
		</Slider.Root>
	</div>
	)
}
