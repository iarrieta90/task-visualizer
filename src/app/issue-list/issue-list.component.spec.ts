import { IssueListComponent } from './issue-list.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GithubService } from '../services/github.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs'
import { Issue } from './issue-list.interface';

const issueList: Issue[] = [
  {
    id: '1',
    title: 'Issue  1',
    state: 'open',
  },
  {
    id: '2',
    title: 'Issue  2',
    state: 'open',
  }
]

describe('IssueListComponent', () => {
  let component: IssueListComponent;
  let fixture: ComponentFixture<IssueListComponent>;
  let service: GithubService;

  //Define testbed
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
      ],
      declarations: [IssueListComponent],
      providers: [GithubService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  //Instantiate component
  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(GithubService);
  });

  //Implement unit tests
  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should get issues from service', () => {
    const repoName = 'mojombo/bert';
    const spy = jest.spyOn(service, 'getIssueList').mockReturnValueOnce(of(issueList));
    component.getIssues(repoName);
    expect(spy).toHaveBeenCalled();
  });
});
