import { Profile } from "./profile";

export class SearchResult {
    totalPages: number = 0;
    currentPage: number = 0;
    total: number = 0;
    associates: Profile[] = [];
}
