import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'sign up' };
  }

  signin() {
    return { msg: 'sign in' };
  }
}
