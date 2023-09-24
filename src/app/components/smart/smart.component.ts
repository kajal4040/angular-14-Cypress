import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})

export class SmartComponent implements OnInit {
  smartData: any;
  receivedMessage: string = '';

  constructor(private service: SharedService) { }

  ngOnInit(): void {

    this.service.getUsers().subscribe((data: any) => {
      this.smartData = data;
    });
  }
  receiveMessage(message: string){
    this.receivedMessage = message;
  }
}

