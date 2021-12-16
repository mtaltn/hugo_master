import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../order/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css'],
  providers:[OrderService]
})
export class EditOrderComponent implements OnInit {

 
  
  constructor(private service:OrderService, private orderService:OrderService, private http:HttpClient,private activatedRoute:ActivatedRoute) { } 

  model = new Order()
  title = "Edit"
  
  

 // edit
 editOrder(form:NgForm){
  this.orderService.editOrder(this.model).subscribe(data=>{})  
  window.location.href='/'
}



ngOnInit(): void {
    
  this.activatedRoute.params.subscribe(params=>{   
   
   this.orderService.getOrderById(params['id']).subscribe(data=>{
    this.model = data })
    
   })

  }
}
