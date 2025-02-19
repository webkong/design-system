import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import FormMessage from "./index";

export default {
  title: "Design System/Form Message",
  component: FormMessage,
} as ComponentMeta<typeof FormMessage>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof FormMessage> = (args) => {
  return <FormMessage {...args} />;
};

export const FormMessageExample = Template.bind({});
FormMessageExample.storyName = "Form Message";
FormMessageExample.args = {
  actions: [
    {
      url: "https://docs.appsmith.com/v/v1.2.1/setup/docker/email",
      text: "Configure Email service",
      intent: "primary",
    },
  ],
  intent: "warning",
  message:
    "You haven’t setup any email service yet. Please configure your email service to receive a reset link",
};
