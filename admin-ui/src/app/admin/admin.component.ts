import { Component, OnInit } from '@angular/core';
import { SearchService } from './service/search.service';
import { Profile } from './model/profile';
import { Search } from './model/search-criterion';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  profiles: Profile[] = [];
  search: Search = new Search();
  skillList: String[] = ['HTML-CSS-JAVASCRIPT','ANGULAR1','REACT','SPRING','RESTFUL','HIBERNATE', 'GIT','DOCKER','JENKIN', 'AWS',
   'SPOKEN', 'COMMUNICATION', 'APTITUDE'];
  //skillList : SkillList = new SkillList();
  searchCategory: String[] = ['NAME', 'ASSOCIATEID', 'SKILL'];
  searchCriterion: String = 'NAME';
  searchValue: String = '';
  showRecord: boolean = false;
  constructor(
    public searchService: SearchService, private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit(): void {
  }

  searchProfiles(): void {
    if (this.searchCriterion == 'SKILL')
      this.searchValue = this.search.skill;
    else if (this.searchCriterion == 'ASSOCIATEID')
      this.searchValue = this.search.associateId;
    else if (this.searchCriterion == 'NAME')
      this.searchValue = this.search.name;
    this.searchService.searchProfiles(this.searchCriterion, this.searchValue)
      .subscribe(rearchresult => this.profiles = rearchresult.associates);
    this.showRecord = true;
  }

  change(e: any): void {
    this.showRecord = false;
  }

}