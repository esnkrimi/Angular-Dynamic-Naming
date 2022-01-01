# AngularDynamicNaming
We can access variable name by dynamic runtime variable naming and dynamic dynamic runtime function naming too.
In this example we have 2 variable 3 functions:

varSum=0;
varMultiply=0;
selectAction (variableName, x, y) Handle action and decide what to do(sum or multiply)
functionSum (variableName, x, y) add x+y and save it to variableName
functionMultiply (variableName, x, y) calculate x*y and save it to variableName

If we run selectAction("Sum",2,3)
selectAction get "Sum" and know we have functionSum and varSum should save 2+3;

and if we run selectAction("Multiply",2,3)
selectAction get "Multiply" and know we have functionMultiply and varMultiply should save 2*3;
Withou dynamic naming we should use some if conditions .

Dynamic Naming help us achieve our goals without using any IF/SWITCH CASE conditions.




//-------------------------------
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
