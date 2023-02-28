import { WidthCalculator } from '../../widthCalculator';
import { CompositionItem } from '../../compositionItem';
export declare function useWidthCalculator(): RenderNeededResult | CalculatorResult;
type RenderNeededResult = {
    renderNeeded: {
        items: CompositionItem[];
        ref: (element: HTMLElement | null) => void;
    };
    clearCache: () => void;
};
type CalculatorResult = {
    calculator: WidthCalculator;
    clearCache: () => void;
};
export {};
