import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
//private github: string;
username : string;
private APIkey: string;


  constructor(private http:HttpClient) {

//this.github = username;
this.username = 'alishakavene';
this.APIkey = 'c9ebe0901953f7b96e17144ec29fa3069a3c397a';

  }

updateUser(username){
  this.username = username;
  this.getGitHub ()
}

getGitHub(){
  return this.http.get('https://api.github.com/users/'+ this.username +'?'+ this.APIkey + '.json')
}

}
