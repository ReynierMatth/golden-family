// LocalUserRepositoryImpl.ts
import {UserRepository} from "../../../domain/repository/UserRepository";

const fakeUser = {
  user:{
    id: 1,
    email: 'mashuuu.r@gmail.com',
    password: 'test1234&*'
  },
  token:"toto"

}

export class LocalUserRepositoryImpl implements UserRepository {
  async login(email: string, password: string): Promise<any> {
    /*const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();*/
    console.log('login', fakeUser);
    const data = fakeUser;
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);
    return data;
  }

  async logout(): Promise<void> {
    /*const response = await fetch('http://localhost:8080/logout', {
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Logout failed');
    }*/

    console.log('logout');
    // Clear the user data from local storage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  async signup(email: string, password: string): Promise<any> {
    /*const response = await fetch('http://localhost:8080/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error('Signup failed');
    }*/

    /*const data = await response.json();*/
    console.log('signup', fakeUser)
    const data = fakeUser;
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);
    return data;
  }

  async isEmailTaken(email: string): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
     /*   const response = await fetch(`http://localhost:8080/isEmailTaken?email=${email}`);

        if (!response.ok) {
          throw new Error('Email check failed');
        }

        const data = await response.json();*/
        console.log('isEmailTaken');
        resolve(false);
      }
        catch (error) {
            console.error(error);
            reject(new Error('An error occurred while checking if the email is taken'));
        }


  })
  }

  async getUser(): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            const user = localStorage.getItem('user')
            if (!user) {
                reject(null);

            }
          resolve(JSON.parse(user));
        } catch (error) {
            console.error(error);
            reject(new Error('An error occurred while getting the user data'));
        }
    });
  }
}