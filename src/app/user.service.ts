import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: any[] = [];
  private nextId: number = 1; // Initialize the ID counter

  constructor() {}

  addUser(user: any) {
    // Assign a unique ID to the user
    user.id = this.nextId++;
    this.user.push(user);
  }

  getUsers() {
    return this.user;
  }

  getUserById(id: number): any {
    // Find and return the user with the specified ID
    return this.user.find((user) => user.id === id);
  }
}