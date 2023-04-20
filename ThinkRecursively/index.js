const user={
    name:"thamitha",
    address:{
        personal:{
            city:"Dehradun",
            area:"majra"
        }
    },
    office:{
        city:"hyderabad",
        area:{
            landmark:"hitech"
        }

    }
}

let  finalObj={};
let magic=(obj,parent)=>{
    for(let key in obj){
        if(typeof(obj[key])==='object'){
            magic(obj[key],parent+"_"+key);
        }
        else{
            finalObj[parent+"_"+key]=obj[key];
            
        }
    }
}
magic(user,"user");
for(let key in finalObj){
    console.log(key+":"+"\""+finalObj[key]+"\"")
}

