const I = require('../testBase/testBase')
const requestData = require('../fixtures/objectsRequestData.json')

describe('Test-Suite : REST-api Ready To Use', () => {

  it('GET_01 > Get list of all objects', () => {
     I.getObjects(requestData.url.getAllObjects)
  });

  it('GET_02 > Get list of specific objects by IDs', () => {
    I.getObjects(requestData.url.getSpecificObjects)
  });

  it('GET_03 > Get single object by Id', () => {
    I.getObjects(requestData.url.getSingleObject)
  });

  it('POST_01 > Create a object', () => {
     I.createObject(requestData.crateObject.name,requestData.crateObject.data.year,
    requestData.crateObject.data.price,requestData.crateObject.data.cpuModel,requestData.crateObject.data.hardDiskSize);
  });

  it('PUT_01 > Update a object by ID', () => {
    cy.readFile('cypress/fixtures/objectsReponseData.json').then((rsp) => {
      cy.log('Updated ID : '+rsp.id);
      I.updateObjectFull(rsp.id,requestData.updateObjectFull.name,requestData.updateObjectFull.data.year,
        requestData.updateObjectFull.data.price,requestData.updateObjectFull.data.cpuModel,requestData.updateObjectFull.data.hardDiskSize);
    })
  });

  it('PATCH_01 > Update a object partialy by ID', () => {
    cy.readFile('cypress/fixtures/objectsReponseData.json').then((rsp) => {
      cy.log('Partialy updated ID : '+rsp.id);
   I.updateObjectPrtial(rsp.id,requestData.updateObjectPartial.name)
    })
  })

  it('DELETE_01 > Delete a object by ID', () => {
    cy.readFile('cypress/fixtures/objectsReponseData.json').then((rsp) => {
      cy.log('Deleted ID : '+rsp.id);
    I.deleteObjectById(rsp.id) })
  }) 
})

