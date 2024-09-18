const tv = {
  marca: "LG",
  modelo: "Thinqai",
  polegadas: 42,
  smart: true,
  preco: 2099.99,
  aplicativos: ["YouTube", "Netflix", "Prime Vídeo", "Crunchyroll", "Max", "TV"],

  ligar: () => console.log("A TV ligou!"),
  desligar: () => console.log("A TV desligou!"),
  mudarCanal: (num) => console.log(`Você está no canal ${num}`),

  verAplicativos: function() {
    this.aplicativos.forEach((app, index) => {
      console.log(`${index + 1}. ${app}`);
    });
  },

  mudarAplicativo: function(aplicativo) {
    if (this.aplicativos.includes(aplicativo)) {
      console.log(`Mudando para o aplicativo: ${aplicativo}`);
    } else {
      console.log(`O aplicativo "${aplicativo}" não está disponível.`);
    }
  }
};

tv.mudarAplicativo('Netflix');


const computador = {
  placaDeVideo: '',
  polegadas: 30,
  modelo: '',
  memoria: '250gb',
  sistemaOperacional: 'Windows',
  aplicativos: ["Anti-virus", "VSCode", "Pycharm"],

 ligar: () => console.log("O computador ligou."),
 desligar: () => console.log("O computador desligou."),
 reiniciar: () => console.log("O computador está sendo reiniciado."),

  verAplicativos: function() {
  this.aplicativos.forEach((app, index) => {
    console.log(`${index + 1}. ${app}`);
  });
},

  mudarAplicativo: function(aplicativo) {
    if (this.aplicativos.includes(aplicativo)) {
      console.log(`Mudando para o aplicativo: ${aplicativo}`);
    } else {
      console.log(`O aplicativo "${aplicativo} não está disponível.`);
    }
  },
};

computador.mudarAplicativo("VsCode");




