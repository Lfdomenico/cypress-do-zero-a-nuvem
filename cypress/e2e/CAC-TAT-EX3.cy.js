describe ("Central de Atendimento ao Cliente TAT", () => { 

  beforeEach(() =>{ 
    cy.visit('http://127.0.0.1:5500/src/index.html'); 
  })


  it("Verifica o título da aplicação", () => {
    
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT'); 
  })


  it("Preenche os campos obrigatórios e envia o formulário", () =>{
    const textoRepetido = Cypress._.repeat("abcdefghijklmnopqrstuvwxyz", 10); 

   
    cy.get('#firstName').type("Luiz")
    cy.get('#lastName').type("Domênico")
    cy.get('#email').type("Luiz@gmail.com")
    cy.get('#open-text-area').type(textoRepetido, { delay:0}) 
    cy.get('button[type="submit"]').click() 
    
    cy.get('.success').should('be.visible'); 
  })

  it.only("Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", ()=>{
    cy.get('#firstName').type("Luiz")
    cy.get('#lastName').type("Domênico")
    cy.get('#email').type("Luiz@gmail,com")
    cy.get('#open-text-area').type("teste") 
    cy.get('button[type="submit"]').click() 
    
    cy.get('.error').should('be.visible'); 
  })

})