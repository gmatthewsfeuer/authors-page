import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
})
export class AuthorsComponent implements OnInit {
  authors;
  countAuthors;

  constructor(private authorsService: AuthorsService) {
    this.authors = this.authorsService.getAuthors();
    this.countAuthors = this.authors.length;
  }

  ngOnInit(): void {}
}
