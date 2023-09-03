describe('Teste de API', () => {
    it('Verificar um GET', () => {
      cy.request('GET', 'https://automationexercise.com/api/productsList')
        .then((response) => {
          expect(response.status).to.equal(200);
        });
    });

    it('Verificar a API de lista de todas as marcas', () => {
        cy.request('GET', 'https://automationexercise.com/api/brandsList').then((response) => {
          expect(response.status).to.equal(200);
          expect(response.body).contains('brands');
        });
      });
  });

