define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/collections/points");
    var Point = require("modules/models/point");
    // Test that the module exists.

    describe("collections/points", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        
        before(function() {
            this.modules = new Module();
        });
        
        after(function() {
            this.modules = null;
        });
        
        describe("creation",function() {
            it("should has default values",function() {
                expect(this.modules).to.have.length(0);
                expect(this.modules).to.have.property('model',Point);
                expect(this.modules.model).to.be.equal(Point);
            });
            it("should be empty on fetch", function() {
                var modules = this.modules;
                expect(modules).to.be.ok;
                expect(this.modules).to.have.length(0);
                
                modules.once('reset',function() {
                    expect(this.modules).to.have.length(0);
                });
                //modules.fetch({ reset: true});
            });
        });
        
        describe("modification", function() {
            it('has a point', function() {
                this.modules.add([{position: {x: 30,y: 90}, id: "point_1"}]);
                var module = this.modules.at(0);
                expect(this.modules).to.have.length(1);
                expect(module.get('position').x).to.be.ok;
                expect(module.get('position').y).to.be.ok;
                expect(module.get('position')).to.be.an.object;
                
            });

            it('has a single module', function() {
                var modules = this.modules, module;
                modules.once('reset', function() {
                    expect(this.modules).to.have.length(1);
                    module = modules.at(0);
                    expect(module).to.be.ok;
                    expect(module.get('x')).to.be.ok;
                    expect(module.get('y')).to.be.ok
                    //done();
                    
                });
                expect(modules).to.have.length(1);
                //zones.fetch({reset: true});
            });
            it('can delete a module', function (done) {
                var modules = this.modules, module;
                
                modules.once('remove', function() {
                    expect(modules).to.have.length(0);
                    done();
                });

                
                module = modules.shift();
                expect(module).to.be.ok;
            });
            
            it('can create second module', function() {
                var modules = this.modules, module;
                
                modules.once("add",function () {
                    expect(modules).to.have.length(1);
                    
                    module = modules.at(0);
                    expect(module).to.be.ok;
                    expect(module.get("position").x).to.be.ok;
                    expect(module.get("position").y).to.be.ok;
                    //done();
                });
                modules.add([{position: {x: 90,y: 20}, id: "point_2"}]);
                expect(modules).to.have.length(1);
                expect(module.get("id")).to.be.ok;
            });
            
        });
    });
});
