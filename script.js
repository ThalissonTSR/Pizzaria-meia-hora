// Calabresa 8pc
function CLick__C__8pc() {

  let qtn = parseInt(document.getElementById("Btn__Cont__C").value)

  document.getElementById("Btn__C__8pc").style.backgroundColor = "green"
  document.getElementById("Btn__C__6pc").style.backgroundColor = "#e4e4e4"
 

  let contador =  document.getElementById("qtd_Pizza_C__8pc").value = qtn + 1;
  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 68.99)
  document.getElementById("valor").value = localStorage.getItem("Valor")

// mostrar pizza calabresa 8pc
  if(contador > 0){
    document.getElementById("P_C8").style.display = "flex";
  }

}


// Calabresa 6pc
function CLick__C__6pc() {
  
  let qtn = parseInt(document.getElementById("Btn__Cont__C").value) 
  
 document.getElementById("Btn__C__8pc").style.backgroundColor = "#e4e4e4"
  document.getElementById("Btn__C__6pc").style.backgroundColor = "green"
 
  let contador =  document.getElementById("qtd_Pizza_C__6pc").value = qtn + 1;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 42.50)
  document.getElementById("valor").value = localStorage.getItem("Valor")
  // mostrar pizza calabresa 6pc
  if(contador > 0){
    document.getElementById("P_C6").style.display = "flex";
  }

}


// aumentar contador Calabresa 8pc

function Cont__soma__C() {

  if( document.getElementById("Btn__C__8pc").style.backgroundColor == "green"){

  let qtn = parseInt(document.getElementById("Btn__Cont__C").value) + 1;
  document.getElementById("Btn__Cont__C").value = qtn;
  document.getElementById("qtd_Pizza_C__8pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 68.99)
  document.getElementById("valor").value = localStorage.getItem("Valor")
  

}

// aumentar contador Calabresa 6pc

if(document.getElementById("Btn__C__6pc").style.backgroundColor == "green"){
  let qtn = parseInt(document.getElementById("Btn__Cont__C").value) + 1;
  document.getElementById("Btn__Cont__C").value = qtn;
  document.getElementById("qtd_Pizza_C__6pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 42.50)
  document.getElementById("valor").value = localStorage.getItem("Valor")
}

}

//reduzir contador Calabresa 8pc
function Cont__sub__C() {

  if(document.getElementById("Btn__C__8pc").style.backgroundColor == "green"){

  let qtn = parseInt(document.getElementById("Btn__Cont__C").value) - 1;
  document.getElementById("Btn__Cont__C").value = qtn;
  document.getElementById("qtd_Pizza_C__8pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor - 68.99)
  document.getElementById("valor").value = localStorage.getItem("Valor")

 // desaparecer pizza calabresa 8pc
  if (qtn < 1) {
    document.getElementById("P_C8").style.display = "none";

    if (qtn <= 0) {
      document.getElementById("Btn__Cont__C").value = 0;
    }
  }

  }

//reduzir contador Calabresa 6pc

  if(document.getElementById("Btn__C__6pc").style.backgroundColor == "green"){

  let qtn = parseInt(document.getElementById("Btn__Cont__C").value) - 1;
  document.getElementById("Btn__Cont__C").value = qtn;
  document.getElementById("qtd_Pizza_C__6pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor - 42.50 )
  document.getElementById("valor").value = localStorage.getItem("Valor")

 // desaparecer pizza calabresa 6pc
  if (qtn < 1) {
    document.getElementById("P_C6").style.display = "none";

    if (qtn <= 0) {
      document.getElementById("Btn__Cont__C").value = 0;
    }
  }

  }
  
}




// Queijo 8pc
function CLick__Q__8pc() {

  let qtn = parseInt(document.getElementById("Btn__Cont__Q").value)

  document.getElementById("Btn__Q__8pc").style.backgroundColor = "green"
  document.getElementById("Btn__Q__6pc").style.backgroundColor = "#e4e4e4"
 


  let contador =  document.getElementById("qtd_Pizza_Q__8pc").value = qtn + 1;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 70.99)
  document.getElementById("valor").value = localStorage.getItem("Valor")

// mostrar pizza queijo 8pc
  if(contador > 0){
    document.getElementById("P_Q8").style.display = "flex";
  }

}


// Queijo 6pc
function CLick__Q__6pc() {
  
  let qtn = parseInt(document.getElementById("Btn__Cont__Q").value) 
  
 document.getElementById("Btn__Q__8pc").style.backgroundColor = "#e4e4e4"
  document.getElementById("Btn__Q__6pc").style.backgroundColor = "green"
 
  let contador =  document.getElementById("qtd_Pizza_Q__6pc").value = qtn + 1;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 45.99)
  document.getElementById("valor").value = localStorage.getItem("Valor")

  // mostrar pizza queijo 6pc
  if(contador > 0){
    document.getElementById("P_Q6").style.display = "flex";
  }

}

// aumentar contador Queijo 8pc

function Cont__soma__Q() {

  if( document.getElementById("Btn__Q__8pc").style.backgroundColor == "green"){

  let qtn = parseInt(document.getElementById("Btn__Cont__Q").value) + 1;
  document.getElementById("Btn__Cont__Q").value = qtn;
  document.getElementById("qtd_Pizza_Q__8pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 70.99)
  document.getElementById("valor").value = localStorage.getItem("Valor")



}


// aumentar contador Queijo 6pc
if(document.getElementById("Btn__Q__6pc").style.backgroundColor == "green"){
  let qtn = parseInt(document.getElementById("Btn__Cont__Q").value) + 1;
  document.getElementById("Btn__Cont__Q").value = qtn;
  document.getElementById("qtd_Pizza_Q__6pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 45.99)
  document.getElementById("valor").value = localStorage.getItem("Valor")
}

}



//reduzir contador Queijo 8pc
function Cont__sub__Q() {

  if(document.getElementById("Btn__Q__8pc").style.backgroundColor == "green"){

  let qtn = parseInt(document.getElementById("Btn__Cont__Q").value) - 1;
  document.getElementById("Btn__Cont__Q").value = qtn;
  document.getElementById("qtd_Pizza_Q__8pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor - 70.99)
  document.getElementById("valor").value = localStorage.getItem("Valor")

 // desaparecer pizza Queijo 8pc
  if (qtn < 1) {
    document.getElementById("P_Q8").style.display = "none";

    if (qtn <= 0) {
      document.getElementById("Btn__Cont__Q").value = 0;
    }
  }

  }

//reduzir contador Queijo 6pc

  if(document.getElementById("Btn__Q__6pc").style.backgroundColor == "green"){

  let qtn = parseInt(document.getElementById("Btn__Cont__Q").value) - 1;
  document.getElementById("Btn__Cont__Q").value = qtn;
  document.getElementById("qtd_Pizza_Q__6pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor - 45.99)
  document.getElementById("valor").value = localStorage.getItem("Valor")

 // desaparecer pizza Queijo 6pc
  if (qtn < 1) {
    document.getElementById("P_Q6").style.display = "none";

    if (qtn <= 0) {
      document.getElementById("Btn__Cont__Q").value = 0;
    }
  }

  }
  
}




// Portuguesa 8pc
function CLick__P__8pc() {

  let qtn = parseInt(document.getElementById("Btn__Cont__P").value)

  document.getElementById("Btn__P__8pc").style.backgroundColor = "green"
  document.getElementById("Btn__P__6pc").style.backgroundColor = "#e4e4e4"
 


  let contador =  document.getElementById("qtd_Pizza_P__8pc").value = qtn + 1;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 48.30)
  document.getElementById("valor").value = localStorage.getItem("Valor")

// mostrar pizza portuguesa 8pc
  if(contador > 0){
    document.getElementById("P_P8").style.display = "flex";
  }

}


// Portuguesa 6pc
function CLick__P__6pc() {
  
  let qtn = parseInt(document.getElementById("Btn__Cont__P").value) 
  
 document.getElementById("Btn__P__8pc").style.backgroundColor = "#e4e4e4"
  document.getElementById("Btn__P__6pc").style.backgroundColor = "green"
 
  let contador =  document.getElementById("qtd_Pizza_P__6pc").value = qtn + 1;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 42.50)
  document.getElementById("valor").value = localStorage.getItem("Valor")

  // mostrar pizza Portuguesa 6pc
  if(contador > 0){
    document.getElementById("P_P6").style.display = "flex";
  }

}

// aumentar contador Portuguesa 8pc

function Cont__soma__P() {

  if( document.getElementById("Btn__P__8pc").style.backgroundColor == "green"){

  let qtn = parseInt(document.getElementById("Btn__Cont__P").value) + 1;
  document.getElementById("Btn__Cont__P").value = qtn;
  document.getElementById("qtd_Pizza_P__8pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 48.30)
  document.getElementById("valor").value = localStorage.getItem("Valor")


}


// aumentar contador Portuguesa 6pc
if(document.getElementById("Btn__P__6pc").style.backgroundColor == "green"){
  let qtn = parseInt(document.getElementById("Btn__Cont__P").value) + 1;
  document.getElementById("Btn__Cont__P").value = qtn;
  document.getElementById("qtd_Pizza_P__6pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 42.50)
  document.getElementById("valor").value = localStorage.getItem("Valor")

}

}


//reduzir contador Portuguesa 8pc
function Cont__sub__P() {

  if(document.getElementById("Btn__P__8pc").style.backgroundColor == "green"){

  let qtn = parseInt(document.getElementById("Btn__Cont__P").value) - 1;
  document.getElementById("Btn__Cont__P").value = qtn;
  document.getElementById("qtd_Pizza_P__8pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor - 48.30)
  document.getElementById("valor").value = localStorage.getItem("Valor")

 // desaparecer pizza Portuguesa 8pc
  if (qtn < 1) {
    document.getElementById("P_P8").style.display = "none";

    if (qtn <= 0) {
      document.getElementById("Btn__Cont__P").value = 0;
    }
  }

  }

//reduzir contador Portuguesa 6pc

  if(document.getElementById("Btn__P__6pc").style.backgroundColor == "green"){

  let qtn = parseInt(document.getElementById("Btn__Cont__P").value) - 1;
  document.getElementById("Btn__Cont__P").value = qtn;
  document.getElementById("qtd_Pizza_P__6pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor - 42.50)
  document.getElementById("valor").value = localStorage.getItem("Valor")

 // desaparecer pizza Portuguesa 6pc
  if (qtn < 1) {
    document.getElementById("P_P6").style.display = "none";

    if (qtn <= 0) {
      document.getElementById("Btn__Cont__P").value = 0;
    }
  }

  }
  
}


// Italiana 8pc
function CLick__I__8pc() {

  let qtn = parseInt(document.getElementById("Btn__Cont__I").value)

  document.getElementById("Btn__I__8pc").style.backgroundColor = "green"
  document.getElementById("Btn__I__6pc").style.backgroundColor = "#e4e4e4"
 


  let contador =  document.getElementById("qtd_Pizza_I__8pc").value = qtn + 1;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 88.10)
  document.getElementById("valor").value = localStorage.getItem("Valor")

// mostrar pizza Italiana 8pc
  if(contador > 0){
    document.getElementById("P_I8").style.display = "flex";
  }

}


// Italiana 6pc
function CLick__I__6pc() {
  
  let qtn = parseInt(document.getElementById("Btn__Cont__I").value) 
  
 document.getElementById("Btn__I__8pc").style.backgroundColor = "#e4e4e4"
  document.getElementById("Btn__I__6pc").style.backgroundColor = "green"
 
  let contador =  document.getElementById("qtd_Pizza_I__6pc").value = qtn + 1;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 52.50)
  document.getElementById("valor").value = localStorage.getItem("Valor")

  // mostrar pizza Italiana 6pc
  if(contador > 0){
    document.getElementById("P_I6").style.display = "flex";
  }

}

// aumentar contador Italiana 8pc

function Cont__soma__I() {

  if( document.getElementById("Btn__I__8pc").style.backgroundColor == "green"){

  let qtn = parseInt(document.getElementById("Btn__Cont__I").value) + 1;
  document.getElementById("Btn__Cont__I").value = qtn;
  document.getElementById("qtd_Pizza_I__8pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 88.10)
  document.getElementById("valor").value = localStorage.getItem("Valor")

}


// aumentar contador Italiana 6pc
if(document.getElementById("Btn__I__6pc").style.backgroundColor == "green"){
  let qtn = parseInt(document.getElementById("Btn__Cont__I").value) + 1;
  document.getElementById("Btn__Cont__I").value = qtn;
  document.getElementById("qtd_Pizza_I__6pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor + 52.50)
  document.getElementById("valor").value = localStorage.getItem("Valor")
}

}


//reduzir contador Italiana 8pc
function Cont__sub__I() {

  if(document.getElementById("Btn__I__8pc").style.backgroundColor == "green"){

  let qtn = parseInt(document.getElementById("Btn__Cont__I").value) - 1;
  document.getElementById("Btn__Cont__I").value = qtn;
  document.getElementById("qtd_Pizza_I__8pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor - 88.10)
  document.getElementById("valor").value = localStorage.getItem("Valor")

 // desaparecer pizza Italiana 8pc
  if (qtn < 1) {
    document.getElementById("P_I8").style.display = "none";

    if (qtn <= 0) {
      document.getElementById("Btn__Cont__I").value = 0;
    }
  }

  }

//reduzir contador Italiana 6pc

  if(document.getElementById("Btn__I__6pc").style.backgroundColor == "green"){

  let qtn = parseInt(document.getElementById("Btn__Cont__I").value) - 1;
  document.getElementById("Btn__Cont__I").value = qtn;
  document.getElementById("qtd_Pizza_I__6pc").value = qtn;

  let valor = parseInt(document.getElementById("valor").value)
  localStorage.setItem("Valor", valor - 52.50)
  document.getElementById("valor").value = localStorage.getItem("Valor")

 // desaparecer pizza Italiana 6pc
  if (qtn < 1) {
    document.getElementById("P_I6").style.display = "none";

    if (qtn <= 0) {
      document.getElementById("Btn__Cont__I").value = 0;
    }
  }

  }
  
}


function DeleteAll(){
  
  //sumir tudo
  document.getElementById("P_C8").style.display = "none";

  document.getElementById("P_C6").style.display = "none";

  document.getElementById("P_Q8").style.display = "none";

  document.getElementById("P_Q6").style.display = "none";

  document.getElementById("P_P8").style.display = "none";

  document.getElementById("P_P6").style.display = "none";

  document.getElementById("P_I8").style.display = "none";

  document.getElementById("P_I6").style.display = "none";


  //voltar padrao
  document.getElementById("Btn__C__8pc").style.backgroundColor = "#e4e4e4"
  
  document.getElementById("Btn__C__6pc").style.backgroundColor = "#e4e4e4"

  document.getElementById("Btn__Q__8pc").style.backgroundColor = "#e4e4e4"

  document.getElementById("Btn__Q__6pc").style.backgroundColor = "#e4e4e4"

  document.getElementById("Btn__P__8pc").style.backgroundColor = "#e4e4e4"

  document.getElementById("Btn__P__6pc").style.backgroundColor = "#e4e4e4"

  document.getElementById("Btn__I__8pc").style.backgroundColor = "#e4e4e4"

  document.getElementById("Btn__I__6pc").style.backgroundColor = "#e4e4e4"


  //reset valor total e quantidades

  document.getElementById("valor").value = 0.00

  document.getElementById("Btn__Cont__C").value = 0

  document.getElementById("Btn__Cont__Q").value = 0

  document.getElementById("Btn__Cont__P").value = 0

  document.getElementById("Btn__Cont__I").value = 0


}


//apagar pedido

function apagarC_8pc(){
  document.getElementById("P_C8").style.display = "none";
  document.getElementById("Btn__C__8pc").style.backgroundColor = "#e4e4e4"
  
}
function apagarC_6pc(){
  document.getElementById("P_C6").style.display = "none";
  document.getElementById("Btn__C__6pc").style.backgroundColor = "#e4e4e4"
  
}
function apagarQ_8pc(){
  document.getElementById("P_Q8").style.display = "none";
  document.getElementById("Btn__Q__8pc").style.backgroundColor = "#e4e4e4"
  
}
function apagarQ_6pc(){
  document.getElementById("P_Q6").style.display = "none";
  document.getElementById("Btn__Q__6pc").style.backgroundColor = "#e4e4e4"
  
}
function apagarP_8pc(){
  document.getElementById("P_P8").style.display = "none";
  document.getElementById("Btn__P__8pc").style.backgroundColor = "#e4e4e4"
  
}
function apagarP_6pc(){
  document.getElementById("P_P6").style.display = "none";
  document.getElementById("Btn__P__6pc").style.backgroundColor = "#e4e4e4"
  
}
function apagarI_8pc(){
  document.getElementById("P_I8").style.display = "none";
  document.getElementById("Btn__I__8pc").style.backgroundColor = "#e4e4e4"
  
}
function apagarI_6pc(){
  document.getElementById("P_I6").style.display = "none";
  document.getElementById("Btn__I__6pc").style.backgroundColor = "#e4e4e4"
  
}