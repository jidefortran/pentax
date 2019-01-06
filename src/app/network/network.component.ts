import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  constructor( private titleService: Title) {
    this.titleService.setTitle(' Networking | Pentax Tech');
    }

  ngOnInit() {
  }

}
