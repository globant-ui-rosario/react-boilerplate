/* ignored by test coverage */

var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

window.expect = chai.expect;
window.stub = sinon.stub;
window.spy = sinon.spy;
window.sinon = sinon;

chai.use(sinonChai);