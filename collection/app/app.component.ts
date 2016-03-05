import {Component} from 'angular2/core';
import {TreeMap} from './Collections/Map/TreeMap/Treemap';
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent { 
    
    
    constructor(){
        let t:TreeMap<KeyTest,ValueTest>=new TreeMap<KeyTest,ValueTest>();
        
        t.put(new KeyTest("1"),new ValueTest("abc"));
        
        t.printTree();
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