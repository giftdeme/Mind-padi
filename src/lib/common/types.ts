import type { Response } from "./request";

export interface RequestState<T = Response> {
    isLoading: boolean;
    isSuccess: boolean;
    error: string;
    data?: T;
}
