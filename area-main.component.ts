import { Component, OnInit } from '@angular/core';@Component( {
  selector: 'app-area-main',
  templateUrl: './area-main.component.html',
  styleUrls: ['./area-main.component.sass'],

})
export class HomeComponent implements OnInit {
  varSum=0;
  varMultiply=0;
  constructor() {}
  ngOnInit() { 
    this.selectAction("Sum",2,3);
    this.selectAction("Multiply",2,3);
  }

  selectAction (variableName,x,y) {
    this['function'+variableName] (variableName,x,y);
  }

  functionSum (variableName,x,y) {
    this['var'+variableName] =x+y;
    console.log("function sum is running var"+variableName+" = "+this.varSum);
  }

  functionMultiply (variableName,x,y) {
    this['var'+variableName] =x*y;
    console.log("function Multiply is running var"+variableName+" = "+this.varSum);
  }
}