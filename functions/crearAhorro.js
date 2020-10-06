function crearAhorro() {
    const ahorro = [];
    const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    return {
        ahorrar: function(mes, cantidad) {
            ahorro.push({mes, cantidad});
        },
        getAhorroMes: function(mes) {
            const ahorroMes = ahorro.filter( function( actual ){
                return actual.mes === mes ? true: false; 
            });
            return ahorroMes.length > 0 ? ahorroMes[0] : {};
        },
        getCantidadMes: function(mes) {
            const ahorroMes = ahorro.filter( function( actual ){
                return actual.mes === mes ? true: false; 
            });
            return ahorroMes.length > 0 ? ahorroMes[0].cantidad : 0; 
        },
        getSumaAhorro: function(mes) {
            const index = meses.indexOf(mes) + 1;
            const ahorroActual = ahorro.slice(0, index );
            return ahorroActual.reduce( function(ant, act) {
                return ant + act.cantidad;
            },0);
        },
        getResumenAhorro: function(mes) {
            const index = meses.indexOf(mes);
            const ahorroActual = ahorro.slice(0, index + 1 );
            let result = '';
            let self = this;
            ahorroActual.forEach( function(el, index, array){
                result += `mes: ${el.mes}, ahorro: ${el.cantidad}, consolidado: ${self.getSumaAhorro(el.mes)} \n`;
            });
            return result;
        }
    };
  }
  
  let myAhorro = crearAhorro();
  myAhorro.ahorrar('enero', 1000);
  myAhorro.ahorrar('febrero', 3000);
  myAhorro.ahorrar('marzo', 3000);
  myAhorro.ahorrar('abril', 500);
  console.log(myAhorro.getAhorroMes('marzo'));
  console.log(myAhorro.getCantidadMes('marzo'));
  console.log(myAhorro.getSumaAhorro('febrero'));
  console.log(myAhorro.getResumenAhorro('abril'));