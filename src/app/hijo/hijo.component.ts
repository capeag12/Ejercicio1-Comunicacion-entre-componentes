import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'compHijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() pulsado! :String;
  constructor() { }

  ngOnInit(): void {
  }

}
