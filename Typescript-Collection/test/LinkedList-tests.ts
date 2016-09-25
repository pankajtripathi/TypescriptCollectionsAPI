import {LinkedList} from '../src/Collections/List/LinkedList';
import * as assert from 'assert';

/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/node/index.d.ts" />


describe("LinkedList",()=>{

    let list:LinkedList<EntryTest>=new LinkedList<EntryTest>();    

    describe("add",()=>{
        it("add an entry to the set",()=>{
            assert.equal(list.add(new EntryTest("bhasker")),true);
            assert.equal(list.add(new EntryTest("pankaj")),true);
            assert.equal(list.add(new EntryTest("bhavik")),true);
            assert.equal(list.add(new EntryTest("bhasker")),true);

        });
    });

    describe("size",()=>{
        it("size of collection",()=>{
            assert.equal(list.size(),4);
        });
    })

    describe("contains",()=>{
        it("should return true",()=>{
            assert.equal(list.contains(new EntryTest("bhasker")),true);
        });

        it("should return false",()=>{
            assert.equal(list.contains(new EntryTest("dakjsndkjas")),false);
        });
    });


    describe("filter",()=>{
        it("should filter this collection if entry's val starts from b",()=>{


            list.filter((e)=>{
                return e.val.charAt(0)=='b';
            })

            assert.equal(list.contains(new EntryTest("bhasker")),false);
        })
    })

    describe("isEmpty",()=>{
        it("should return true if collection is empty",()=>{
            assert.equal(list.isEmpty(),false);
        });
    });

    describe("toArray",()=>{
        it("should return the collection in an array",()=>{
            let arrayL=list.toArray();
            assert.equal(arrayL[0].val,"pankaj");
            assert.equal(arrayL.length,1);
        });
    });

    describe("clear",()=>{
        it("clears the collection",()=>{
            assert.equal(list.clear(),true);
        });
        it("size should be 0 after clearing",()=>{
            assert.equal(list.size(),0);
        })
    })

});

class EntryTest{
    val:string="";

    constructor(data:string){
        this.val=data;
    }
}