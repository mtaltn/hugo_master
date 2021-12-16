import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../order/order';
import { OrderService } from '../services/order.service';


@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
  providers:[OrderService]
})
export class AddOrderComponent implements OnInit {

  constructor(private service:OrderService, private orderService:OrderService, private http:HttpClient) { } 
  model : Order = new Order()
  orders : Order[] = []
  title = "Add"

  ngOnInit(): void {
    this.orderService.getOrder().subscribe(data=>{
      this.orders = data
    })
  }

  // Add
  addOrder(form:NgForm){
    this.orderService.add(this.model).subscribe(data=>{

      window.location.href='/'
    })
    
  
  }

}
