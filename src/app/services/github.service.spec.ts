import { GithubService } from './github.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Issue } from '../issue-list/issue-list.interface';

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

describe('Github service', () => {

    let service: GithubService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [GithubService],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
        })
    })

    beforeEach(() => {
        service = TestBed.inject(GithubService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        localStorage.clear();
        jest.resetAllMocks();
    });

    afterAll(() => {
        httpMock.verify();
    })

    it('should create service', () => {
        expect(service).toBeTruthy();
    })

    it('getIssueList should return a list of issues and use a GET method', () => {
        const repoName = 'mojombo/bert'
        service.getIssueList(repoName).subscribe((resp: Issue[]) => {
            expect(resp).toEqual(issueList);
        })
        
        const req = httpMock.expectOne('https://api.github.com/repos/mojombo/bert/issues');
        expect(req.request.method).toBe('GET');
        req.flush(issueList);
    })
})
