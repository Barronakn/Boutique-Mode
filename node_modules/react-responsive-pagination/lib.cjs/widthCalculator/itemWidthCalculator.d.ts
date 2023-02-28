import { GetPageWidth } from './pageWidthCalculator';
import { GetNavWidth } from './navWidthCalculator';
import { CompositionItem } from '../compositionItem';
export declare function createItemWidthCalculator({ getPageWidth, getNavWidth, ellipsisWidth, }: Params): ({ type, page }: CompositionItem) => number;
type Params = {
    getPageWidth: GetPageWidth;
    getNavWidth: GetNavWidth;
    ellipsisWidth: number;
};
export type GetItemWidth = ReturnType<typeof createItemWidthCalculator>;
export {};
