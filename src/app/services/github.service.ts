import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Issue } from '../issue-list/issue-list.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getIssueList(repoName: string): Observable<Issue[]> {
    const url = (`https://api.github.com/repos/${repoName}/issues`);
    return this.http.get<Issue[]>(url);
  }
}
