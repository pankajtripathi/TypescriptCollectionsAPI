export class Entry<K,V>{
    
    key:K;
    value:V;
    leftNode:Entry<K,V>;
    rightNode:Entry<K,V>;    
    
    constructor(){
        
    }
    
    setKey(key1:K){
        this.key=key1;
    }
    
    setValue(value1:V){
        this.value=value1;
    }
    
}