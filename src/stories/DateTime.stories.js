import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { DateTime, timeToString } from "../components/DateTime";

// Story about testing the functionality of my custom component
// play with it using command: yarn storybook

export default {
	title: "DateTime",
	component: DateTime
}

export const App = () => {

	return (
		<DateTime value={1690815705} />
	)
}