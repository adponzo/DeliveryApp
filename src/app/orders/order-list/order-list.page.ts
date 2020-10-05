import { Component, OnInit } from '@angular/core';
import { IOrderResponse } from '../shared/iorder-response';
import { OrdersService } from '../shared/orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
  selectedPage = 'pedidos';
  openOrders: IOrderResponse[] = [];
  finishedOrders: IOrderResponse[] = [];

  constructor(
    private ordersService: OrdersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    const tab = this.activatedRoute.snapshot.queryParams.tab;
    this.selectedPage = (tab && tab === 'open') ? 'em-andamento' : 'pedidos';

    this.loadOrders();
  }

  async loadOrders() {
    this.openOrders = await this.ordersService.getAllOpen();
    this.finishedOrders = await this.ordersService.getAllFinished();
  }

  onSegmentChange(event: any) {
    // console.log(event.target.value);
    this.selectedPage = event.target.value;
  }
}
