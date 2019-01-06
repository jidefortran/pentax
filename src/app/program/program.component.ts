import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  constructor( private titleService: Title) {
    this.titleService.setTitle(' Software Development | Pentax Tech');
    }

  ngOnInit() {
  }

}
