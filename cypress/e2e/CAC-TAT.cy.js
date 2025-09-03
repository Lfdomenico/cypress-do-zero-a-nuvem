//o bloco describe define a suíte de testes;
describe ("Central de Atendimento ao Cliente TAT", () => { 

  //bloco it define o caso de teste;
  it("Verifica o título da aplicação", () => {
    cy.visit('http://127.0.0.1:5500/src/index.html'); //visitando o index.html dentro da pasta src;

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT'); //verificando se o title desse index.html é igual a 'Central de Atendimento ao Cliente TAT'; 
                                                                            //Caso seja, o tese passa, caso não seja, o teste falha;
    
    cy.title().should('not.be.equal', "Central");
  })
})