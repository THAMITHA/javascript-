let name={
    firstname:"Thamitha",
    lastname:"Rajput"
}

let printName=function(hometown,state,country){
    console.log(this.firstname+" "+this.lastname+" "+hometown+" "+state+" "+country);
}

let printMyName=printName.bind(name,"mysore","karnataka");
printMyName("India");

//implmentation

Function.prototype.myBind=function(...args){
    let obj=this;
    let params=args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}

let printMyName2=printName.myBind(name,"mysore","karnataka");
printMyName2("India");
