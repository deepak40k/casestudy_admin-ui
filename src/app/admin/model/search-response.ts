import { Profile } from "./profile";

export class SearchResponse {
    totalPages: number = 0;
    currentPage: number = 0;
    total: number = 0;
    errorMessage: string=''
    associates: Profile[] = [];

    constructor(responseBuilder: ResposneBuilder) {
        this.totalPages = responseBuilder.getTotalPages;
        this.currentPage = responseBuilder.getCurrentPage;
        this.total = responseBuilder.getTotal;
        this.errorMessage = responseBuilder.getErrorMessage;
        this.associates = responseBuilder.getAssociates;
    }
}

export class ResposneBuilder {

    private  _totalPages: number;
    private _currentPage: number;
    private _total: number;
    private _errorMessage: string;
    private _associates: Profile[];

    constructor() {
    }

    totalPages(totalPages: number) {
        this._totalPages = totalPages;
        return this;
    }

    currentPage(currentPage: number) {
        this._currentPage = currentPage;
        return this;
    }

    total(total: number) {
        this._total = total;
        return this;
    }

    errorMessage(errorMessage: string) {
        this._errorMessage = errorMessage;
        return this;
    }


    associates(associates: Profile[]) {
        this._associates = associates;
        return this;
    }

    build() {
        return new SearchResponse(this);
    }

    get getTotalPages() {
        return this._totalPages;
    }

    get getCurrentPage() {
        return this._currentPage;
    }

    get getTotal() {
        return this._total;
    }

    get getErrorMessage() {
        return this._errorMessage;
    }

    get getAssociates(){
        return this._associates;
    }
}