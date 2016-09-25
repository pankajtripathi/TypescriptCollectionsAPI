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

    describe("remove",()=>{
        it("should remove bhasker from the set",()=>{
            assert.equal(hashSet.remove(new EntryTest("bhasker")),true);
        })
        it("should return false for bhasker now",()=>{
            assert.equal(hashSet.remove(new EntryTest("bhasker")),false);
        })
    });

    describe("isEmpty",()=>{
        it("should return true if collection is empty",()=>{
            assert.equal(hashSet.isEmpty(),false);
        });
    });


    describe("filter",()=>{
        it("should filter this collection if entry's val starts from b",()=>{
            hashSet.filter((e)=>{
                return e.val.charAt(0)=='b';
            })
        })
    })
    describe("forEach",()=>{
        it("should print all the contents",()=>{
            hashSet.forEach(v=>{
                console.log(v.val);
            })
        })
    })

    describe("toArray",()=>{
        it("should return the collection in an array",()=>{
            let array:Array<EntryTest>=hashSet.toArray();
            assert.equal(array[0].val,"pankaj");
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