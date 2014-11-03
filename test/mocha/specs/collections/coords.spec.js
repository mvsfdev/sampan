define(function(require, exports, module) {
  "use strict";

  var Module = require("modules/collections/coords");
  var Coord = require("modules/models/coord");

  // Test that the module exists.
  describe("collections/coords", function() {
    it("should exist", function() {
      expect(Module).to.exist;
    });
      
      before(function() {
          this.coords = new Module();
      });
      
      after(function() {
          this.coords = null;
      });
      
      describe("creation",function() {
          it("should has default values",function() {
              expect(this.coords).to.have.length(0);
              expect(this.coords).to.have.property('model',Coord);
              expect(this.coords.model).to.be.equal(Coord);
          });
          it("should be empty on fetch", function() {
              var coords = this.coords;
              expect(coords).to.be.ok;
              expect(this.coords).to.have.length(0);
              
              coords.once('reset',function() {
                  expect(this.coords).to.have.length(0);
              });
              //coords.fetch({ reset: true});
          });
      });
      
      describe("modification", function() {
          it('has a coord', function() {
              this.coords.add([{x: 30, y: 90}]);
              });

          it.skip('has a single coord', function(done) {
              var coords = this.coords, coord;
              coords.once('reset', function() {
                  expect(this.coords).to.have.length(1);
                  coord = coords.at(0);
                  expect(coord).to.be.ok;
                  expect(coord.get('x')).to.be.equal(30);
                  expect(coord.get('y')).to.be.equal(90);
                  done();
                  
              });
              expect(coords).to.have.length(1);
              //zones.fetch({reset: true});
          });
          it('can delete a coord', function (done) {
              var coords = this.coords, coord;
              
              coords.once('remove', function() {
                  expect(coords).to.have.length(0);
                  done();
              });
              
              coord = coords.shift();
              expect(coord).to.be.ok;
          });
          
          it.skip('can create second coord', function(done) {
              var coords = this.coords, coord;

              coords.add([{ x: 0, y: 1}]);
              expect(coords).to.have.length(1);
              
              coords.once("reset",function () {
                  expect(coords).to.have.length(1);
                  
                  coord = coords.at(1);
                  expect(coord).to.be.ok;
                  expect(coord.get("x")).to.be.ok;
                  expect(coord.get("y")).to.be.ok;

                  done();
              });
              expect(coords).to.have.length(1);
          });


          
      });
      







      // describe("modification", function() {
      //     it("modify default values", function() {
      //         this.coords.add([
      //             { x: 50, y: 50},
      //             { x: 50, y: 90}
      //         ]);
      //         expect(this.coords).to.have.length(2);
      //     });
      //     it("can add some coords", function() {
      //         this.coords.add([
      //             { x: 20, y: 20},
      //             { x: 30, y: 70}
      //         ]);
      //         expect(this.coords).to.have.length(4);
      //     });
      //     it("can delete a coord", function() {
      //         this.coords.remove(this.coords.models[1]);
      //         expect(this.coords).to.have.length(3);
      //     });
      // });
  });
});
