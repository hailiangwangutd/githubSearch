import { Component } from '@angular/core';
import { GithubService } from './services/github.services';

@Component({
  selector: 'my-app',
  template: `

  <div class="container">
	<nav class="navbar navbar-default">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">GithubSearch</a>
      </div>
	</nav>
  	<profile></profile>
  </div><!--/.container-fluid -->
  `,
  providers: [GithubService]
})
export class AppComponent  { }
