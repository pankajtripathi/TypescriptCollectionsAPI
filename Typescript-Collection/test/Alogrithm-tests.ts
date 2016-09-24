
import {Algorithm} from '../src/Utils/Algorithms';
import * as assert from 'assert';

/// <reference path="../typings/globals/mocha/index.d.ts" />
/// <reference path="../typings/globals/node/index.d.ts" />

describe("Algorithms", () => {

    describe("MD5 hashing algorithm", () => {
        
        it("generate md5 hashing from bhasker",()=>{
            assert.equal(Algorithm.generateHashMD5("bhasker"),Algorithm.generateHashMD5("bhasker"));
        });

        it("bhasker and bhasker. MD5 should not be equal",()=>{
            assert.notEqual(Algorithm.generateHashMD5("bhasker"),Algorithm.generateHashMD5("bhasker."));
        });
    });

});