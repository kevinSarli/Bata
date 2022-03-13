const products = [
    { 
      id:1,
      name:"body",
      price:500,
      discount:10,
      color:"black",
      image:"../../images/lenceria1.jpg"
    },
    { 
      id:2,
      name:"pijama",
      price:600,
      discount:0,
      color:"white",
      image:"../../images/pijama.jpg"
    },
    { 
      id:3,
      name:"pijama",
      price:400,
      discount:0,
      color:"black",
      image:"../../images/pijama2.jpg"
    },
    { 
      id:4,
      name:"body",
      price:500,
      discount:10,
      color:"black",
      image:"../../images/lenceria1.jpg"
    },
    { 
      id:5,
      name:"pijama",
      price:600,
      discount:50,
      color:"black",
      image:"../../images/pijama.jpg"
    },
    { 
      id:6,
      name:"pijama",
      price:400,
      discount:0,
      color:"black",
      image:"../../images/pijama2.jpg"
    }
  
  ]
  
  export const getFecth = new Promise((resolve,reject)=>{
    let condition = true
    if(condition){
      setTimeout(() => {
        resolve(products)
      }, 2000);
    }else{
      reject("400 - not found")
    }
  })