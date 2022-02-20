export class SearchRequest {
  criterion: string = 'NAME'
  name: string = '';
  associateId: string = '';
  skill: string = 'SPOKEN';

  get getSearchValue() {
    return this.criterion == 'NAME' ? this.name : this.criterion == 'ASSOCIATEID' ? this.associateId : this.skill;
  }

}