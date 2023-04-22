export enum UrlInputState {
    INPUTTING,
    SUBMITTING,
    SUCCESS
}

export type UrlPair = {
    id: string;
    original_url: string;
    mini_url: string;
    visit_count: number;
}