//o bloco describe define a suíte de testes;
describe ("Central de Atendimento ao Cliente TAT", () => { 

  beforeEach(() =>{ //é exeutado antes de todos os testes contidos no bloco da suíte de testes;
    cy.visit('http://127.0.0.1:5500/src/index.html'); //visitando o index.html dentro da pasta src;
  })

  //bloco it define o caso de teste;
  it("Verifica o título da aplicação", () => {
    
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT'); //verificando se o title desse index.html é igual a 'Central de Atendimento ao Cliente TAT'; 
                                                                            //Caso seja, o tese passa, caso não seja, o teste falha;
  })

  //a adição do .only faz com que apenas esse teste seja executado; "Focar" nesse teste;
  it.only("Preenche os campos obrigatórios e envia o formulário", () =>{
    const textoRepetido = Cypress._.repeat("abcdefghijklmnopqrstuvwxyz", 10); //no módulo 'Cypress', é chamada uma função da biblioteca _ que é o repeat, 
                                                                              //recebendo como argumentos: Uma String e o número de vezes que ela se repetirá;

    //ações
    cy.get('#firstName').type("Luiz")
    cy.get('#lastName').type("Domênico")
    cy.get('#email').type("Luiz@gmail.com")
    cy.get('#open-text-area').type(textoRepetido, { delay:0}) //sobrescrevendo o delay padrão (10 milissegundos) do .type() para 0 milissegundos;
    cy.get('button[type="submit"]').click() //tag button que tenha a propriedade type="submit";
    
    //resultado esperado
    cy.get('.success').should('be.visible'); //em seletores CSS, . -> classe e # -> id;
  })

})