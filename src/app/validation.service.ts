// // validation.service.ts
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ValidationService {

//   constructor() { }

//   isUserNameValid(userName: string): boolean {
//     // First name should contain only letters, have a minimum length of 2, and a maximum length of 50
//     const regex = /^[A-Za-z]{2,50}$/;
//     return regex.test(userName);
//   }

//   isPhoneNumberValid(phoneNumber: string): boolean {
//     // Phone number validation (customize the regex pattern as needed)
//     // This example checks for numeric characters, dashes, and spaces
//     const regex = /^[0-9-\s]+$/;
//     return regex.test(phoneNumber);
//   }

//   isEmailValid(email: string): boolean {
//     // Email validation using a regex pattern (a simple pattern, not comprehensive)
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
//   }

  

//   // You can add more validation methods here for other fields if needed

// }
