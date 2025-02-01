import { Injectable } from '@angular/core';
import { ApiService } from '../../core/service/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public user_url = 'http://localhost:3000/user/';
  public product_url = 'http://localhost:3000/products/';
  public all_url = 'http://localhost:3000/user';

  constructor( private apiService: ApiService) { }
  //get all user
  userDashboardData() {
    return this.apiService.get(this.user_url);
  }
  //get all product
  productDashboardData() {
    return this.apiService.get(this.product_url);
  }
  //get all user
  allUser(): Observable<any> { //Observable is a design pattern that allows us to work with asynchronous data streams.
    return this.apiService.get(this.all_url);
  }
  //add user
  addUser(data: any) {
    return this.apiService.post(this.user_url, data);
  }
  //get data of individual user
  singleUser(id: any){
    return this.apiService.get(this.user_url, id);
  }
  //update data of individual user
  editUser(id: any, data: any): Observable<any>{
    return this.apiService.put(this.user_url+ id, data);
  }
  //delete data of individual user(By admin)
  deleteUser(id: any): Observable<any>{
    return this.apiService.delete(this.user_url+ id);
  }
}
