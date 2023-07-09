
const outPut = require('../fixtures/objectsReponseData.json')

export function getObjects(url)
{
    cy.request('GET', '/objects')
    .then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body)
        cy.writeFile('cypress/fixtures/objectsReponseData.json', response.body);
    });
}

export function createObject(name,year,price,cpuModule,hardDisk){
    cy.request({
        method: 'POST',
        url: '/objects',
        body: {
          "name": name,
          "data": {
             "year": year,
             "price": price,
             "CPU model": cpuModule,
             "Hard disk size": hardDisk
          }
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name',name)
        cy.writeFile('cypress/fixtures/objectsReponseData.json', response.body);
      });
}

export function updateObjectFull(objectid,name,year,price,cpuModule,hardDisk){
    cy.request({
        method: 'PUT',
        url: '/objects/'+objectid,
        body: {
          "name": name,
          "data": {
             "year": year,
             "price": price,
             "CPU model": cpuModule,
             "Hard disk size": hardDisk
          }
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name',name)
        cy.writeFile('cypress/fixtures/objectsReponseData.json', response.body);
      });
}

export function updateObjectPrtial(objectid,name){
    cy.request({
        method: 'PATCH',
        url: '/objects/'+objectid,
        body: {
          "name": name,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name',name)
        cy.writeFile('cypress/fixtures/objectsReponseData.json', response.body);
      });
}

export function deleteObjectById(objectid){
    cy.request({
        method: 'DELETE',
        url: '/objects/'+objectid
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', 'Object with id = '+objectid+' has been deleted.')
        cy.writeFile('cypress/fixtures/objectsReponseData.json', response.body);
      });
}


export function verifyAllObectsAreRecived()
{
   cy.fixture('objectsReponseData')
   .then(objects => {
     assert.isTrue(objects.length > 0) 
  })
}

export function verifyRequestedbectsAreRecived()
{
   cy.fixture('objectsReponseData')
   .then(objects => {
    objects.le
    expect(objects[1].id).to.zi
  })
}

