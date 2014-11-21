define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/collections/icons");
    var Icon = require("modules/models/icon");
    
    // Test that the module exists.
    describe("collections/icons", function() {
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
                expect(this.modules).to.have.property('model',Icon);
                expect(this.modules.model).to.be.equal(Icon);
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
            it('has a module', function() {
                this.modules.add([{position: {x: 30,y: 90}, id: "icon_1"}]);
                var module = this.modules.at(0);
                expect(this.modules).to.have.length(1);
            });
            
            it.skip('has a single module', function(done) {
                var modules = this.modules, module;
                modules.once('reset', function() {
                    expect(this.modules).to.have.length(1);
                    module = modules.at(0);
                    expect(module).to.be.ok;
                    //expect(module.get('position')).to.be.ok;
                    done();
                    
                });
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
                    //expect(module.get("position").x).to.be.ok;
                    //expect(module.get("position").y).to.be.ok;
                    //done();
                 });
                modules.add([{position: {x: 90,y: 20}, id: "icon_2"}]);
                expect(modules).to.have.length(1);
                expect(module.get("id")).to.be.ok;
            });
        });
    });
});
