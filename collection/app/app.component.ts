import {Component} from 'angular2/core';
import {TreeMap} from './Collections/Map/TreeMap/Treemap';
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent { 
    
    
    constructor(){
        let t:TreeMap<KeyTest,ValueTest>=new TreeMap<KeyTest,ValueTest>();
        console.log(" tree empty : "+t.isEmpty());
        t.put(new KeyTest("2"),new ValueTest("abc"));
        t.put(new KeyTest("3"),new ValueTest("as"));
        t.put(new KeyTest("1"),new ValueTest("as"));
        t.put(new KeyTest("3"),new ValueTest("12"));
        t.put(new KeyTest("4"),new ValueTest("as"));
        t.put(new KeyTest("3"),new ValueTest("0000"));
        t.put(new KeyTest("4"),new ValueTest("as"));
        t.put(new KeyTest("7"),new ValueTest("as"));
        t.put(new KeyTest("0"),new ValueTest("as"));
        console.log(" tree empty : "+t.isEmpty());
        console.log(t.size());
        t.printTree();        
        console.log(t.get(new KeyTest("9")));
        console.log(t.containsKey(new KeyTest("7")));
        console.log(t.containsValue(new ValueTest("bhasker")));
        
    }
    
}


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