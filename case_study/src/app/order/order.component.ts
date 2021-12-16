import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { AddOrderComponent } from '../add-order/add-order.component';
import { EditOrderComponent } from '../edit-order/edit-order.component';
import { RemoveOrderComponent } from '../remove-order/remove-order.component';
import { OrderService } from '../services/order.service';
import { Order } from './order';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService:OrderService, private http:HttpClient,public dialog:MatDialog) { }
  
  filterText = "";
  order: Order[] = []  
  

  ngOnInit(): void {
    this.orderService.getOrder().subscribe(data=>{
      this.order = data
    })    
  }
  openAddOrderMenu(){
    this.dialog.open(AddOrderComponent);
  }
  openEditOrderMenu(){
    this.dialog.open(EditOrderComponent);
  }
  openRemoveOrderMenu(){
    this.dialog.open(RemoveOrderComponent);
  }

}
