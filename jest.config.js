module.exports = {
  testEnvironment: "node", // ou outro ambiente adequado
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: ".", // Diretório onde será gerado o relatório
        outputName: "jest-junit.xml", // Nome do arquivo
      },
    ],
  ],
};
