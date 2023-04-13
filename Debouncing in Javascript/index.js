let counter=0;
const getData = () => {
  //calls an API and gets Data
  console.log("fetching Data..",counter++);
}

const debounce=function(fn,d){
    let timer;
    return function(){
        let context=this,
        args=arguments;

        clearTimeout(timer);
        timer=setTimeout(()=>{
            getData.apply(context,arguments);
        },d);
    }
}

const betterFunction=debounce(getData,300);
