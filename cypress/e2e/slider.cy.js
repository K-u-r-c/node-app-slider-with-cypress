describe("Swiper Gallery Test", function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-slide-active").should("contain", "United Kingdom");
  });
});

describe("Swiper Gallery Test", function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.wait(2000);
    cy.get(".swiper-button-next").click({ force: true });
    cy.wait(2000);
    cy.get(".swiper-slide-active").should("contain", "Paris");
  });
});

describe("Navigation Test", function () {
  it("Checks if user can navigate slides using buttons", function () {
    cy.visit("http://localhost:3000");

    cy.get(".swiper-button-next").click();
    cy.wait(1000);
    cy.get(".swiper-slide-active").should("contain", "London");

    cy.get(".swiper-button-prev").click();
    cy.wait(1000);
    cy.get(".swiper-slide-active").should("contain", "Rome");
  });
});

describe("Slide Content Test", function () {
  it("Checks if slide titles and descriptions are displayed correctly", function () {
    cy.visit("http://localhost:3000");

    const slides = [
      { title: "Rome", description: "Italy" },
      { title: "London", description: "United Kingdom" },
      { title: "Paris", description: "France" },
    ];

    slides.forEach((slide, index) => {
      if (index > 0) {
        cy.get(".swiper-button-next").click();
        cy.wait(1000);
      }

      cy.get(".swiper-slide-active").within(() => {
        cy.get("h1").should("contain", slide.title);
        cy.get("p").should("contain", slide.description);
      });
    });
  });
});

describe("Swiper Gallery Responsive Test", function () {
  const viewports = ["macbook-15", "ipad-2", "iphone-6"];

  viewports.forEach((viewport) => {
    it(`Checks gallery layout on ${viewport}`, function () {
      cy.viewport(viewport);
      cy.visit("http://localhost:3000");

      cy.get(".swiper").should("be.visible");
      cy.get(".swiper-button-next").should("be.visible");
      cy.get(".swiper-button-prev").should("be.visible");
    });
  });
});

describe("Swiper Gallery Visibility Test", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Checks if gallery elements are properly displayed", function () {
    cy.get(".swiper").should("be.visible");
    cy.get(".swiper-slide").should("have.length.at.least", 3);
    cy.get(".swiper-button-next").should("be.visible");
    cy.get(".swiper-button-prev").should("be.visible");
  });
});
