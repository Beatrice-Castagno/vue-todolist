var app = new Vue (
  {
    el: "#root",
    data: {
      nuovoElemento: "",
      lista: [],
    },
    methods: {
      cancellaElemento: function (iElemento) {
        this.lista.splice(iElemento, 1);
      },
      aggiungiElemento: function () {
        if (this.nuovoElemento !== "") {
          this.lista.push(this.nuovoElemento);
          this.nuovoElemento = "";
        }
      }
    }
  },
);
