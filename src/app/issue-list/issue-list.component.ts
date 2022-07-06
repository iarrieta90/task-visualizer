import { Component, ViewChild } from '@angular/core';
import { GithubService } from '../services/github.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Issue } from './issue-list.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent {

  public displayedColumns = ['id', 'title', 'state'];
  public issueListDataSource!: MatTableDataSource<Issue>;
  public searchControl = new FormControl('', Validators.required);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private githubService: GithubService,
    private _snackBar: MatSnackBar
  ) { }

  public getIssues(repoName: string): void {
    this.githubService.getIssueList(repoName).subscribe(
      (data) => {
        this.issueListDataSource = new MatTableDataSource(data);
        this.issueListDataSource.paginator = this.paginator;
      },
      (error) => {
        let errorMessage = 'There was an error with your request';
        if (error.status === 404) {
          errorMessage = `This repo doesn't exist! Please select a valid name`
        }
        this.openBadRequestAlert(errorMessage);
      }
    )
  }

  private openBadRequestAlert(errorMessage: string): void {
    this._snackBar.open(errorMessage, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  public searchRepo(event: any): void {
    event.preventDefault();
    this.getIssues(this.searchControl.value);
  }

}
