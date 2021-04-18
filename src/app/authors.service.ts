import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor() {}

  getAuthors() {
    return ['Ernest Hemingway', 'William Shakespeare', 'J. R. R. Tolkien'];
  }
}
