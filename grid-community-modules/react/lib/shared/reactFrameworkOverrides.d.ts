// @ag-grid-community/react v29.3.2
import { VanillaFrameworkOverrides } from "@ag-grid-community/core";
export declare class ReactFrameworkOverrides extends VanillaFrameworkOverrides {
    private readonly reactUi;
    constructor(reactUi: boolean);
    private frameworkComponents;
    frameworkComponent(name: string): any;
    isFrameworkComponent(comp: any): boolean;
}
