// LocalUserRepositoryImpl.ts
import {UserRepository} from "../../../domain/repository/UserRepository";

export class LocalUserRepositoryImpl implements UserRepository {
  async login(email: string, password: string): Promise<any> {
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);
    return data;
  }

  async logout(): Promise<void> {
    const response = await fetch('http://localhost:8080/logout', {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Logout failed');
    }

    // Clear the user data from local storage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  async signup(email: string, password: string): Promise<any> {
    const response = await fetch('http://localhost:8080/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error('Signup failed');
    }

    const data = await response.json();
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);
    return data;
  }

  async isEmailTaken(email: string): Promise<boolean> {
    const response = await fetch(`http://localhost:8080/isEmailTaken?email=${email}`);

    if (!response.ok) {
      throw new Error('Email check failed');
    }

    return await response.json();
  }

  async getUser(): Promise<any> {
    const response = await fetch('http://localhost:8080/getUser');

    if (!response.ok) {
      throw new Error('Get user failed');
    }

    const user = await response.json();
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }
}