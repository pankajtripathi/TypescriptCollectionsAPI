
/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/node/index.d.ts" />

import {TreeMap} from '../src/Map/TreeMap/Treemap';
import * as assert from "assert";

var Rx=require('rx');

describe("TreeMap", () => {

    const t: TreeMap<KeyTest, ValueTest> = new TreeMap<KeyTest, ValueTest>();


    describe("isEmpty", () => {
        it("if the collection is empty", () => {
            assert.equal(t.isEmpty(), true);
        });
        it("try to remove from empty map", () => {
            assert.equal(t.remove(new KeyTest("abc")), null);
        });
    });

    function insertData() {

        let v: ValueTest = new ValueTest("abc");
        assert.equal(t.put(new KeyTest("50"), v), v);

        v = new ValueTest("as");
        assert.equal(t.put(new KeyTest("30"), v), v);

        v = new ValueTest("1");
        assert.equal(t.put(new KeyTest("20"), v), v);

        v = new ValueTest("as");
        assert.equal(t.put(new KeyTest("40"), v), v);

        v = new ValueTest("12");
        assert.equal(t.put(new KeyTest("70"), v), v);

        v = new ValueTest("13");
        assert.equal(t.put(new KeyTest("60"), v), v);

        v = new ValueTest("14");
        assert.equal(t.put(new KeyTest("80"), v), v);

    }

    describe("put", () => {
        it("insert data", () => {
            insertData();
        });
        
        it("should return undefined while saving undefined key",()=>{
            assert.equal(t.put(null, new ValueTest("testNull")), null);
        });

    });

    describe("rxjs",()=>{
        it("test",()=>{
            var m:Map<KeyTest,ValueTest>=new Map();
            t.forEach((k,v)=>{
                m.set(k,v);
            })
    });

    describe("forEach", () => {
        it("traverse each", () => {
            t.forEach((k, v) => {
                assert.equal(t.get(k), v);
            })
        })
    });

    describe("getEntries",()=>{
        it("getEntires size should be equal to treemap",()=>{
            assert.equal(t.getEntries().length,t.size());
        });
    })

    describe("containsKey", () => {
        it("if the map contains the key", () => {
            assert.equal(t.containsKey(new KeyTest("20")), true);
            assert.equal(t.containsKey(new KeyTest("80")), true);
            assert.equal(t.containsKey(new KeyTest("30")), true);
            assert.equal(t.containsKey(new KeyTest("60")), true);
            assert.equal(t.containsKey(new KeyTest("990099")), false);
        })
    });


    describe("containsValue", () => {
        it("if the map contains the value", () => {
            assert.equal(t.containsValue(new ValueTest("as")), true);
            assert.equal(t.containsValue(new ValueTest("abc")), true);
            assert.equal(t.containsValue(new ValueTest("12")), true);
            assert.equal(t.containsValue(new ValueTest("99098yhkjb")), false);
        })
    });

    describe("size", () => {
        it("size of the map", () => {
            assert.equal(t.size(), 7);
        });
    });

    describe("get", () => {
        it("get value from key", () => {
            let v: ValueTest = t.get(new KeyTest("30"));
            assert.equal(v.val, "as");
            v = t.get(new KeyTest("80"));
            assert.equal(v.val, "14");
            v = t.get(new KeyTest("40"));
            assert.equal(v.val, "as");
            v = t.get(new KeyTest("9090"));
            assert.equal(v, null);
        });
    });

    describe("referenceTest", () => {
        it("reference insdie the collection should refelect changes", () => {
            t.forEach((k, v) => {
                v.val2 = "bhasker";
            })

            t.forEach((k, v) => {
                assert.equal(v.val2, "bhasker");
            })
        })
    })

    describe("remove", () => {
        let str = "";
        it("should remove key 20 from map", () => {
            str = "";
            assert.notEqual(t.remove(new KeyTest("20")), undefined);
            t.forEach((k, v) => {
                str += (k.val + ",");
            })
            assert.equal(str, "30,40,50,60,70,80,");
        });
        it("should remove key 30 from map", () => {
            str = "";
            assert.notEqual(t.remove(new KeyTest("30")), undefined);
            t.forEach((k, v) => {
                str += (k.val + ",");
            })
            assert.equal(str, "40,50,60,70,80,");
        });

        it("should remove key 80 from map", () => {
            str = "";
            assert.notEqual(t.remove(new KeyTest("80")), undefined);
            t.forEach((k, v) => {
                str += (k.val + ",");
            })
            assert.equal(str, "40,50,60,70,");
        });

        it("should remove key 70 from map", () => {
            str = "";
            assert.notEqual(t.remove(new KeyTest("70")), undefined);
            t.forEach((k, v) => {
                str += (k.val + ",");
            })
            assert.equal(str, "40,50,60,");
        });

        it("should remove key 50 from map", () => {
            str = "";
            insertData();
            assert.notEqual(t.remove(new KeyTest("50")), undefined);
            t.forEach((k, v) => {
                str += (k.val + ",");
            })
            assert.equal(str, "20,30,40,60,70,80,");
        });

        it("should try to remove key 999 from map", () => {
            str = "";
            assert.equal(t.remove(new KeyTest("999")), undefined);
            t.forEach((k, v) => {
                str += (k.val + ",");
            })
            assert.equal(str, "20,30,40,60,70,80,");
        });

    })

    describe("filter", () => {
        it("should filter keys divisible by 3", () => {
            t.filter((k, v) => {
                let a = +k.val;
                let num = a % 3;
                return num === 0;
            });

            let str = "";
            t.forEach((k, v) => {
                str += (k.val + ",");
            })
            assert.equal(str, "20,40,70,80,");
        })

    });

    describe("isEmpty", () => {
        it("if the collection is empty", () => {
            assert.equal(t.isEmpty(), false);
        });
    });

    describe("clear", () => {
        it("clear the map", () => {
            assert.equal(t.clear(), true);
        });
    });

    describe("StringNumber", () => {
        it("Test map with number as key and String as values", () => {
            let map: TreeMap<number, string> = new TreeMap<number, string>();
            assert.equal(map.put(3, "bhasker"), "bhasker");
            assert.equal(map.put(1, "pankaj"), "pankaj");
            assert.equal(map.put(9, "bhavik"), "bhavik");
            assert.equal(map.get(1), "pankaj");
            assert.equal(map.containsKey(9), true);
            assert.equal(map.containsValue("bhasker"), true);
            assert.equal(map.size(), 3);
        });
    });

});


class KeyTest {
    val: string;
    constructor(val: string) {
        this.val = val;
    }
}

class ValueTest {
    val: string;
    val2: string;
    constructor(val: string) {
        this.val = val;
    }
}


