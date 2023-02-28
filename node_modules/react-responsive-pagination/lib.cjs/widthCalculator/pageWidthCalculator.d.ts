import { NumberWidthCalculator } from './numberWidthCalculator';
export declare function createPageWidthCalculator({ getActivePageWidth, getNormalPageWidth, }: Params): (label: string, active: boolean) => number;
type Params = {
    getActivePageWidth: NumberWidthCalculator;
    getNormalPageWidth: NumberWidthCalculator;
};
export type GetPageWidth = ReturnType<typeof createPageWidthCalculator>;
export {};
