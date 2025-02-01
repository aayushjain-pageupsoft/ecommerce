import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  // Base URLs for login and registration endpoints
  public login_url = "http://localhost:3000";
  public reg_url = "http://localhost:3000";

  // /**
  //  * Constructor that injects the HttpClient and ApiService.
  //  * @param http The HttpClient service used to perform HTTP requests.
  //  * @param apiService The ApiService used to make API calls.
  //  */
  constructor(private http: HttpClient, private apiService: ApiService) { }

  // /**
  //  * Authenticates a user by their username and password.
  //  * @param user_name The username or email of the user.
  //  * @param password The password of the user.
  //  * @returns An observable containing the authentication response.
  //  */
  authLogin(user_name: any, password: any): Observable<any> {
    return this.apiService.get(this.login_url + '/user?email=' + user_name + '&password=' + password);
  }

  // /**
  //  * Registers a new user.
  //  * @param user_dto The data transfer object containing user registration details.
  //  * @returns An observable containing the registration response.
  //  */
  userRegister(user_dto: any): Observable<any> {
    return this.apiService.post(this.reg_url + '/user', user_dto);
  }

  // /**
  //  * Authenticates an admin user by their username and password.
  //  * @param user_name The username or email of the admin.
  //  * @param password The password of the admin.
  //  * @returns An observable containing the authentication response.
  //  */
  adminLogin(user_name: any, password: any): Observable<any> {
    return this.apiService.get(this.login_url + '/user?email=' + user_name + '&password=' + password + '&role=admin');
  }
}
