import { GetItemWidth } from './itemWidthCalculator';
import { CompositionItem } from '../compositionItem';
export declare function createTotalWidthCalculator({ getItemWidth, outerFrameWidth, }: Params): (items: CompositionItem[]) => number;
type Params = {
    getItemWidth: GetItemWidth;
    outerFrameWidth: number;
};
export {};
