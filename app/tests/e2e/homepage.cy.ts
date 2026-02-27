/// <reference types="cypress" />

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the platform title', () => {
    cy.contains('h1', 'Vibe Vue').should('be.visible')
    cy.contains('p', 'A learning platform for web developers').should('be.visible')
  })

  it('should display featured lessons', () => {
    cy.contains('h2', 'Featured Lessons').should('be.visible')
    cy.get('.lesson-card').should('have.length.at.least', 3)
    cy.contains('.lesson-card', 'CSS Fundamentals').should('be.visible')
    cy.contains('.lesson-card', 'JavaScript Essentials').should('be.visible')
    cy.contains('.lesson-card', 'HTML Structure').should('be.visible')
  })

  it('should display platform features', () => {
    cy.contains('h2', 'Platform Features').should('be.visible')
    cy.contains('li', 'Interactive code editor').should('be.visible')
    cy.contains('li', 'Guest comment sections').should('be.visible')
    cy.contains('li', 'Responsive design').should('be.visible')
    cy.contains('li', 'SSR-first architecture').should('be.visible')
  })

  it('should have navigation links', () => {
    cy.get('nav').should('be.visible')
    cy.contains('nav a', 'Home').should('be.visible')
    cy.contains('nav a', 'Lessons').should('be.visible')
    cy.contains('nav a', 'About').should('be.visible')
  })

  it('should be responsive', () => {
    // Test on mobile viewport
    cy.viewport(375, 667)
    cy.contains('h1', 'Vibe Vue').should('be.visible')

    // Test on tablet viewport
    cy.viewport(768, 1024)
    cy.contains('h1', 'Vibe Vue').should('be.visible')

    // Test on desktop viewport
    cy.viewport(1280, 720)
    cy.contains('h1', 'Vibe Vue').should('be.visible')
  })
})
