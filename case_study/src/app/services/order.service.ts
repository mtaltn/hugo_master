import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../order/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  headers: HttpHeaders | { [header: string]: string | string[]; } | undefined;
  
  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/order"


  getOrder():Observable<Order[]> {
    return this.http.get<Order[]>(this.path)
  }
  add(order: Order):Observable<Order>{
    const httpoption={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Order>(this.path,order,httpoption)
  }
  editOrder(order: Order):Observable<Order>{
    let newPath = this.path + "/" + order.id
    const httpoption={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.put<Order>(newPath,order,httpoption)
  }
  getOrderById(id:any):Observable<Order>{
    
    return this.http.get<Order>(this.path+"/"+id)


  }
  removeOrder(id:any):void{ 
    let newPath = this.path +"/" + id 
   this.http.delete(newPath).subscribe()        
  }
}
