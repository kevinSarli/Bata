const products = [
    { 
      id:1,
      name:"body",
      category:"corseteria",
      price:500,
      discount:10,
      color:"black",
      image:"../../images/lenceria1.jpg"
    },
    { 
      id:2,
      name:"pijama",
      category:"pijama",
      price:600,
      discount:0,
      color:"white",
      image:"../../images/pijama.jpg"
    },
    { 
      id:3,
      name:"pijama",
      category:"pijama",
      price:400,
      discount:0,
      color:"black",
      image:"../../images/pijama2.jpg"
    },
    { 
      id:4,
      name:"corseteria2",
      category:"corseteria",
      price:500,
      discount:10,
      color:"black",
      image:"../../images/corseteria2.jpg"
    },
    { 
      id:5,
      name:"pijama2",
      category:"pijama",
      price:600,
      discount:50,
      color:"black",
      image:"../../images/pijama3.jpg"
    },
    { 
      id:6,
      name:"traje de baño1",
      category:"traje de baño",
      price:400,
      discount:0,
      color:"black",
      image:"../../images/trajedebaño1.jpg"
    },
    { 
      id:7,
      name:"corseteria3",
      category:"corseteria",
      price:400,
      discount:0,
      color:"black",
      image:"../../images/corseteria3.jfif"
    },
    { 
      id:8,
      name:"traje de baño2",
      category:"traje de baño",
      price:400,
      discount:0,
      color:"black",
      image:"../../images/trajedebaño2.png"
    },
    { 
      id:9,
      name:"traje de baño3",
      category:"traje de baño",
      price:400,
      discount:0,
      color:"black",
      image:"../../images/trajedebaño3.jfif"
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

  export const getProductById = (id) => {
    const producto = products.find(prod => prod.id === id);
    return (
        new Promise((resolve, reject)=> {
            setTimeout(() => { 
              resolve(producto);
            }, 2000);
            
        })
    )
}
  