context('User Testing', () => {

    beforeEach(function () {
        cy.visit('http://localhost:8080/dashboard')
        cy.get('input[name="username"]').type('admin')
        cy.get('input[name="password"]').type('admin')
        cy.get('form').submit()
    })

    it('should view users', () => {
        cy.visit('http://localhost:8080/users')
        cy.get('tr').should('have.length', 2)
        cy.title().should('eq', 'Statup | Users')
    })

    it('should create a new user', () => {
        cy.visit('http://localhost:8080/users')
        cy.get('input[name="username"]').type('hunterlong')
        cy.get('input[name="email"]').type('info@yayaya.com')
        cy.get('input[name="password"]').type('admin')
        cy.get('input[name="password_confirm"]').type('admin')
        cy.get('form').submit()
        cy.get('tr').should('have.length', 3)
    })

    it('should create a edit user', () => {
        cy.visit('http://localhost:8080/user/2')
        cy.get('input[name="password"]').type('password567')
        cy.get('input[name="password_confirm"]').type('password567')
        cy.get('form').submit()
        cy.get('tr').should('have.length', 3)
    })

    // it('should logout and login with new password', () => {
    //     cy.visit('http://localhost:8080/logout')
    //     cy.title().should('eq', 'Statup | Users')
    //     cy.get('#user_2 > .btn-group > .btn-danger').click()
    //     cy.get('tr').should('have.length', 2)
    //     cy.visit('http://localhost:8080/login')
    //     cy.get('input[name="username"]').type('hunterlong')
    //     cy.get('input[name="password"]').type('password567')
    //     cy.get('form').submit()
    //     cy.title().should('eq', 'Project Updated Status')
    // })

    it('should delete a user', () => {
        cy.visit('http://localhost:8080/users')
        cy.get('#user_2 > .btn-group > .btn-danger').click()
        cy.get('tr').should('have.length', 2)
    })

});