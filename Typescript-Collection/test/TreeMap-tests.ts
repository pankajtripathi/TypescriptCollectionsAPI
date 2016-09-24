/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/node/index.d.ts" />

import {TreeMap} from '../src/Map/TreeMap/Treemap';
import * as assert from "assert";

describe("TreeMap",()=>{

     const t:TreeMap<KeyTest,ValueTest>=new TreeMap<KeyTest,ValueTest>();


     describe("isEmpty",()=>{
         it("if the collection is empty",()=>{
             assert.equal(t.isEmpty(), true);
         });
     });

     describe("put",()=>{
         it("insert data",()=>{
             let v:ValueTest=new ValueTest("abc");
             assert.equal(t.put(new KeyTest("3"),v),v);

             v=new ValueTest("as");
             assert.equal(t.put(new KeyTest("1"),v),v);

            v=new ValueTest("1");
             assert.equal(t.put(new KeyTest("9"),v),v);

             v=new ValueTest("as");
             assert.equal(t.put(new KeyTest("2"),v),v);

             v=new ValueTest("12");
             assert.equal(t.put(new KeyTest("9"),v),v);
         })
     });

     describe("forEach",()=>{
         it("traverse each",()=>{
             t.forEach((k,v)=>{
                 assert.equal(t.get(k),v);
             })
         })
     });

     describe("containsKey",()=>{
         it("if the map contains the key",()=>{
             assert.equal(t.containsKey(new KeyTest("2")),true);
             assert.equal(t.containsKey(new KeyTest("9")),true);
             assert.equal(t.containsKey(new KeyTest("3")),true);
             assert.equal(t.containsKey(new KeyTest("1")),true);
             assert.equal(t.containsKey(new KeyTest("990099")),false);
         })
     });


    describe("containsValue",()=>{
         it("if the map contains the value",()=>{
             assert.equal(t.containsValue(new ValueTest("as")),true);
             assert.equal(t.containsValue(new ValueTest("abc")),true);
              assert.equal(t.containsValue(new ValueTest("12")),true);            
             assert.equal(t.containsValue(new ValueTest("99098yhkjb")),false);
         })
     });

     describe("size",()=>{
         it("size of the map",()=>{
            assert.equal(t.size(),4);
         });
     });

     describe("get",()=>{
         it("get value from key",()=>{
             let v:ValueTest=t.get(new KeyTest("3"));
             assert.equal(v.val,"abc");
             v=t.get(new KeyTest("1"));
             assert.equal(v.val,"as");
             v=t.get(new KeyTest("9"));
             assert.equal(v.val,"12");
             v=t.get(new KeyTest("2"));
             assert.equal(v.val,"as");
             v=t.get(new KeyTest("9090"));
             assert.equal(v,null);
         });
     });

    describe("referenceTest",()=>{
        it("reference insdie the collection should refelect changes",()=>{
                t.forEach((k,v)=>{
                    v.val2="bhasker";
                })

                t.forEach((k,v)=>{
                    assert.equal(v.val2,"bhasker");
                })
        })
    })


     describe("isEmpty",()=>{
         it("if the collection is empty",()=>{
             assert.equal(t.isEmpty(), false);
         });
     });

     describe("clear",()=>{
         it("clear the map",()=>{
             assert.equal(t.clear(),true);
         });
     });

     describe("StringNumber",()=>{
         it("Test map with number as key and String as values",()=>{
             let map:TreeMap<number,string>=new TreeMap<number,string>();
             assert.equal(map.put(3,"bhasker"),"bhasker");
             assert.equal(map.put(1,"pankaj"),"pankaj");
             assert.equal(map.put(9,"bhavik"),"bhavik");
             assert.equal(map.get(1),"pankaj");
             assert.equal(map.containsKey(9),true);
             assert.equal(map.containsValue("bhasker"),true);
             assert.equal(map.size(),3);
         });
     });

});


class KeyTest{
    val:string;
    constructor(val:string){
        this.val=val;
    }
}

class ValueTest{
    val:string;
    val2:string;
    constructor(val:string){
        this.val=val;
    }
}


