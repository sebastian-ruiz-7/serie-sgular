import { RenderOptions, render } from "@testing-library/react";
import type { ReactElement } from "react";
import { DataProvider } from "../context";

const AllTheProviders = ({children}: {children: JSX.Element | JSX.Element[]}) => {
    return (
      <>
          <DataProvider>
              {children}
          </DataProvider>
      </>
    )
  }
  
  const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
    //@ts-ignore
  ) => render(ui, {wrapper:AllTheProviders, ...options})
  
  export * from '@testing-library/react'
  export {customRender as render}