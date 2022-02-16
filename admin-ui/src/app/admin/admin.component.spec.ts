import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminComponent } from './admin.component';
import { By } from '@angular/platform-browser';
import { SearchService } from './service/search.service';
import { of } from 'rxjs/internal/observable/of';
import { Profile } from './model/profile';

import { SearchResult } from './model/search-result';
import { Observable } from 'rxjs';
import { SearchResponse } from './model/search-response';

const todosServiceStub = {
  searchProfiles() {
    const searchResult: SearchResponse =
    {
      "totalPages": 2,
      "currentPage": 0,
      "total": 7,
      "associates": [
        {
          "userId": "5dd5de75-a15b-4b38-a876-3888b8ad1f70",
          "associateId": "CTS1www5",
          "name": "deepak3",
          "email": "deepak40@gmail.com",
          "mobile": "0685117142",
          "skills": {
            "technical": [
              {
                "name": "DOCKER1",
                "level": 20
              },
              {
                "name": "HTML-CSS-JAVASCRIPT",
                "level": 2
              }
            ],
            "nonTechnical": [
              {
                "name": "SPOKEN",
                "level": 2
              },
              {
                "name": "COMMUNICATION",
                "level": 2
              }
            ]
          }
        },
        {
          "userId": "e8e73cda-d741-42fa-8369-4fb60512ca82",
          "associateId": "CTS1www6",
          "name": "deepak3",
          "email": "deepak40@gmail.com",
          "mobile": "0685117142",
          "skills": {
            "technical": [
              {
                "name": "DOCKER1",
                "level": 20
              },
              {
                "name": "HTML-CSS-JAVASCRIPT",
                "level": 2
              }
            ],
            "nonTechnical": [
              {
                "name": "APTITUDE",
                "level": 6
              },
              {
                "name": "COMMUNICATION",
                "level": 4
              },
              {
                "name": "SPOKEN",
                "level": 2
              }
            ]
          }
        }]
    }
    return of(searchResult);
  }
};
describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let debugElement: DebugElement;
  let profiles: Profile[] = [];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule
      ],
      declarations: [
        AdminComponent,
      ],
      providers: [{ provide: SearchService, useValue: todosServiceStub }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search by name', waitForAsync(async () => {
    component.searchCriterion = 'NAME';
    component.search.name = 'deepak';
    component.searchProfiles();
    fixture.detectChanges();
    let result = debugElement.query(By.css('#resultTable'));
    expect(result).toBeTruthy();
    expect(result.nativeElement.innerText).toContain('Associate');
  }));

  it('search by Associate Id', () => {
    component.searchCriterion = 'SKILL';
    component.search.skill = 'DOCKER';
    component.searchProfiles();
    fixture.detectChanges();
    let result = debugElement.query(By.css('#resultTable'));
    expect(result).toBeTruthy();
    expect(result.nativeElement.innerText).toContain('Associate');
  });

  it('search by Skill', () => {
    component.searchCriterion = 'ASSOCIATEID';
    component.search.associateId = 'CTS12346';
    component.searchProfiles();
    fixture.detectChanges();
    let result = debugElement.query(By.css('#resultTable'));
    expect(result).toBeTruthy();
    expect(result.nativeElement.innerText).toContain('Associate');
  });

  
it('rest showRecord flag', () => {
    component.showRecord=true;
    component.change('');
    fixture.detectChanges();
    expect(component.showRecord).toBeFalse()
  });

});
