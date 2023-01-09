import React from "react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/Button",
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        onClick: { action: true },
        backgroundColor: { control: "color" },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: "Button",
};

Primary.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/sn4lJj1O2OR3ugz2aXP7yD/Abbvie-Pro-DS---Site-Generator?node-id=135%3A1179&t=hB7csEpMHFuN8DGR-0",
    },
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Button",
    argTypes: {
        onClick: { action: "clicked 2" },
    },
};

Secondary.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/sn4lJj1O2OR3ugz2aXP7yD/Abbvie-Pro-DS---Site-Generator?node-id=135%3A1179&t=hB7csEpMHFuN8DGR-0",
    },
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "Button",
};

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "Button",
};
