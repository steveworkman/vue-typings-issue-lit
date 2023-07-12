/// <reference types="vite/client" />

import { McButton } from "@maersk-global/mds-components-core";
import { MyElement } from "./my-element";

declare module "vue" {
  export interface GlobalComponents {
    MyElement: MyElement;
    McButton: McButton;
  }
}
