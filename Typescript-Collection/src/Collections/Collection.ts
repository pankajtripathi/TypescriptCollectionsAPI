import {ForEachCallbackFunction} from '../Utils/Function';


/**
 * 
 * 
 * @export
 * @interface Collection
 * @template E
 */
export interface Collection<E>{
   
   /*
    * returns true if map conatins the supplied key, K.
    */
    add(e:E):boolean;
    
   /*
    * clears the set and returns true is succeeds else returns false
    */
    clear():boolean;
    
   /*
    * returns true is set contains e
    */
    contains(e:E):boolean;
    
   /*
    * returns true if set is empty
    */
    isEmpty():boolean;
    
   /*
    * removes object e from collection
    */
    remove(e:E):boolean;
    
   /*
    * returns the size of the collection
    */
    size():number;
    
   /*
    * returns an array containing the collection 
    */
    toArray():Array<E>;

    /**
     * 
     * 
     * @param {ForEachCallbackFunction<E>} callback
     * 
     * @memberOf Collection
     */
    forEach(callback:ForEachCallbackFunction<E>);
}