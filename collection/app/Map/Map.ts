export interface Map<K,V>{
    
    /*
    *Inserts value 
    */
    put(key:K,value:V):V;
    clear():boolean;
    containsKey(key:K):boolean;
    containsValue(value:V):boolean;
    isEmpty():boolean;
    size():number;
}