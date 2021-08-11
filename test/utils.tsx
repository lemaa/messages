/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { MessageProvider } from "./../src/context/Messages";
const Providers = ({ children }: { children: React.ReactElement }) => {
    return (
      <MessageProvider>
            {children} 
      </MessageProvider>
    );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "queries">) => render(ui, { wrapper: Providers as React.ComponentType, ...options });

export * from "@testing-library/react";
export { customRender as render };
