define(function(require, exports, module) {
    "use strict";
    
    var Module = require("modules/collections/figures");
    var Figure = require("modules/models/figure");
    
    // Test that the module exists.
    describe("collections/figures", function() {
        it("should exist", function() {
            expect(Module).to.exist;
        });
        before(function(){
        this.figures = new Module();
        });

        after(function(){
        this.figures = null;
        });
        // describe("creation", function() {
        //     it("should has default values", function() {
        //         expect(this.figures).to.have.length(0);
        //         expect(this.figures.model).to.be.equal(Figure);
        //     });
        // });
        // describe("modification", function() {
        //     it("modify default values", function() {
        //         this.figures.add([
        //             { name: 'seg_01' },
        //             { name: 'seg_02' }
        //         ]);
        //         expect(this.figures).to.have.length(2);
        //     });

        //     it("can add a figure", function() {
        //         this.figures.add([
        //             { name: 'seg_03'}
        //         ]);
        //         expect(this.figures).to.have.length(3);
        //     });
        //     it("can delete a figure", function() {
        //         this.figures.remove(this.figures.models[1]);
        //         expect(this.figures).to.have.length(2);
        //     });
        // });
        
  


        describe("creation", function () {
            
            it("has default values", function () {
                expect(this.figures).to.be.ok;
                expect(this.figures).to.have.length(0);
            });
            
            it.skip("should be empty on fetch", function (done) {
                var figures = this.figures;
                
                // Before fetch.
                expect(figures).to.be.ok;
                expect(figures).to.have.length(0 );
                
                // After fetch.
                figures.once("reset", function () {
                    expect(figures).to.have.length(0);
                    done();
                });
                
                //figures.fetch({ reset: true });
            });
        });

        describe("modification", function () {
            
            it("can add a figure", function() {
                this.figures.add([
                    { name: 'seg_03'}
                ]);
                expect(this.figures).to.have.length(1);
            });
            // beforeEach(function() {
            //     this.figures.create({
            //         name: 'seg_11',
            //         title: '南'
            //     });
            // });

            // afterEach(function() {
            //     //this.figures.localStorage._clear();
            //     //this.figures.reset();
            // });

            it.skip("has a single figure", function (done) {
                var figures = this.figures , figure;
                figures.once("reset", function() {
                   
                    expect(figures).to.have.length(0);
               
                    figure = figures.at(0);
                    expect(figure).to.be.ok;
                    expect(figure.get('name')).to.contain("seg");
                    expect(figure.get('title')).to.contain("south");

                    done();
                });
                expect(this.figures).to.have.length(1);
                //figures.fetch({reset: true});
            });

            it("can delete a figure", function (done) {
                var figures = this.figures, figure;
                
                
                // After shift.
                figures.once("remove", function () {
                    expect(figures).to.have.length(0);
                    done();
                });
                
                // Remove and return first model.
                //figures.remove(figures.models[0]);
                figure = figures.shift();
                expect(figure).to.be.ok;
                expect(figures).to.have.length(0);
            });
            
            it.skip("create a second figure", function (done) {
                var figures = this.figures , figure;
                this.figures.add([
                    { name: 'seg_04', title: 'north'}
                ]);
                expect(figures).to.have.length(1);
                
                figures.once("reset", function() {
                    expect(figures).to.have.length(1);
               
                    figure = figures.at(1);
                    expect(figure).to.be.ok;
                    expect(figure.get('name')).to.contain("seg");
                    expect(figure.get('title')).to.contain("north");
                    
                    done();
                });
                expect(this.figures).to.have.length(1);
                //figures.fetch({reset: true});
            });
            
            
        });
        
    });
});
