import { Map } from '../Map.ts';

export class TreeMap<K,V> implements Map<K,V>{
    
    put(key:K,value:V):V{
        return value;
    }
    
}