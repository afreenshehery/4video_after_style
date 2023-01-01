import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
public action:any
  constructor() { }

  ngOnInit(): void {
    // this.action.isStart 
    // (action.data.value)['data'] 
  }

  keyaup(){
    console.log("hello");
    
  }

 

}
