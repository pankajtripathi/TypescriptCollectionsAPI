import {HashSet} from '../src/Collections/Set/Hashset';
import * as assert from 'assert';

/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/node/index.d.ts" />


describe("HashSet",()=>{

    let hashSet:HashSet<EntryTest> =new HashSet<EntryTest>();

    describe("add",()=>{
        it("add an entry to the set",()=>{
            assert.equal(hashSet.add(new EntryTest("bhasker")),true);
            assert.equal(hashSet.add(new EntryTest("bhavik")),true);
            assert.equal(hashSet.add(new EntryTest("pankaj")),true);
            assert.equal(hashSet.add(new EntryTest("pankaj")),true);
            assert.equal(hashSet.add(new EntryTest("pankaj")),true);
            assert.equal(hashSet.add(new EntryTest("pankaj")),true);
        });
    });

    describe("size",()=>{
        it("size of collection",()=>{
            assert.equal(hashSet.size(),3);
        });
    })

    describe("contains",()=>{
        it("should return true if collection contains the passed value",()=>{
            assert.equal(hashSet.contains(new EntryTest("bhasker")),true);
        });
    });

    describe("isEmpty",()=>{
        it("should return true if collection is empty",()=>{
            assert.equal(hashSet.isEmpty(),false);
        });
    });

    describe("toArray",()=>{
        it("should return the collection in an array",()=>{
            let array:Array<EntryTest>=hashSet.toArray();
            assert.equal(array[0].val,"bhasker");
        });
    });

    describe("clear",()=>{
        it("clears the collection",()=>{
            assert.equal(hashSet.clear(),true);
        });
    })

});

class EntryTest{
    val:string="";

    constructor(data:string){
        this.val=data;
    }
}