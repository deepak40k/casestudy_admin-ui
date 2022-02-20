import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminComponent } from '../admin.component';
import { SearchService } from './admin.service';

describe('SearchService', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let debugElement: DebugElement;

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
      providers: [{ provide: SearchService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('search by name', waitForAsync(async () => {
    component.searchRequest.criterion = 'NAME';
    component.searchRequest.name = 'deepak';
    let searchResult = component.searchService.searchProfiles(component.searchRequest.criterion, component.searchRequest.name);
    searchResult.subscribe(x => expect(x.associates.length).toBeGreaterThan(0));
  }));


  it('search by associate id', waitForAsync(async () => {
    component.searchRequest.criterion = 'ASSOCIATEID';
    component.searchRequest.name = 'CTS12346';
    let searchResult = component.searchService.searchProfiles(component.searchRequest.criterion, component.searchRequest.name);
    searchResult.subscribe(x => expect(x.associates.length).toBeGreaterThan(0));
  }));


  it('search by skill', waitForAsync(async () => {
    component.searchRequest.criterion = 'SKILL';
    component.searchRequest.name = 'DOCKER';
    let searchResult = component.searchService.searchProfiles(component.searchRequest.criterion, component.searchRequest.name);
    searchResult.subscribe(x => expect(x.associates.length).toBeGreaterThan(0));
  }));

  it('should fail with bad request 400', waitForAsync(async () => {
    component.searchRequest.criterion = 'DUMMY';
    component.searchRequest.name = 'CTS12346';
    let searchResult = component.searchService.searchProfiles(component.searchRequest.criterion, component.searchRequest.name)
    .subscribe(x => fail('Should have failed with 400 error'),
    (error) => {
      expect(error).toContain('Something bad happened; please try again later.');
    });
  }));
});
