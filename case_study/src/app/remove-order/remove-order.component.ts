import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-remove-order',
  templateUrl: './remove-order.component.html',
  styleUrls: ['./remove-order.component.css']
})
export class RemoveOrderComponent implements OnInit {

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
  }
  removeOrder(id:any):void {
    this.orderService.removeOrder(id)
    alert("silme tamamlandı.")
    window.location.reload()   
  }

}
