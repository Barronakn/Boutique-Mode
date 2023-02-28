type CompositionPage = {
    type: 'page';
    page: number;
};
type CompositionActivePage = {
    type: 'active';
    page: number;
};
type CompositionEllipsis = {
    type: '…L' | '…R';
    page: undefined;
};
type CompositionPrevious = {
    type: '<';
    page: number | undefined;
};
type CompositionNext = {
    type: '>';
    page: number | undefined;
};
export type CompositionItem = CompositionPage | CompositionActivePage | CompositionEllipsis | CompositionPrevious | CompositionNext;
export declare function createActivePage(page: number): CompositionActivePage;
export declare function createPage(page: number): CompositionPage;
export declare function createNavPrevious(page: number | undefined): CompositionPrevious;
export declare function createNavNext(page: number | undefined): CompositionNext;
export declare function createEllipsis(ellipsisPos: 'L' | 'R'): CompositionEllipsis;
export declare function isNav(item: CompositionItem): item is CompositionPrevious | CompositionNext;
export declare function isEllipsis(item: CompositionItem): item is CompositionEllipsis;
export {};
