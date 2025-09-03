const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //alterando altura e largura das dimensões em pixels do navegador;
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {}, //teste end-to-end;
});
