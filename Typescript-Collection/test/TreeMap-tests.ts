/// <reference path="../typings/index.d.ts" />

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
             assert.equal(t.put(new KeyTest("1"),v),v);
         })
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
    constructor(val:string){
        this.val=val;
    }
}


