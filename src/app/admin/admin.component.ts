import { Component, OnInit } from '@angular/core';
import { SearchService } from './service/admin.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ResposneBuilder, SearchResponse } from './model/search-response';
import { SearchRequest } from './model/search-request';
import { SkillList } from './constants/skill-list';
import { CriterionList } from './constants/criterion-list';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  searchResponse: SearchResponse;
  searchRequest: SearchRequest= new SearchRequest();
  skillList : SkillList = new SkillList();
  criterionList:CriterionList=new CriterionList();
  showRecord: boolean = false;

  constructor(
    public searchService: SearchService, private sanitizer: DomSanitizer ) {
  }

  ngOnInit(): void {
  }

  searchProfiles(): void { 
    this.searchResponse=null;
    this.searchService.searchProfiles(this.searchRequest.criterion, this.searchRequest.getSearchValue)
      .subscribe(rearchresult => {
        this.searchResponse = new ResposneBuilder()
          .associates(rearchresult.associates)
          .errorMessage(rearchresult.associates.length == 0 ? 'No record found' : '')
          .build();
      },
        (error) => {
          this.searchResponse = new ResposneBuilder()
            .errorMessage(error)
            .associates([])
            .build();
          console.log('Error:' + error)
        }
      );
    this.showRecord = true;
  }

  change(e: any): void {
    this.showRecord = false;
  }

}