import { Component, OnInit } from '@angular/core';
import {  GithubService } from '../github-service/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
   github:any;
  constructor(private githubService:GithubService) {
    this.githubService.getGitHub().subscribe(github =>{
       console.log(github);
       this.github = github;
    }
    )

  }
///searchUser(){this.GitHubservice.findUser(this.username)}
  ngOnInit(): void {
  }

}
