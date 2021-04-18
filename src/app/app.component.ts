import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Authors Page';
  authors;
  countAuthors;

  constructor(private authorsService: AuthorsService) {
    this.authors = this.authorsService.getAuthors();
    this.countAuthors = this.authors.length;
  }
}
