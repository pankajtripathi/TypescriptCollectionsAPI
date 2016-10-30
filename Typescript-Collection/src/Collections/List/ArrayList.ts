import {FilterCallback, FilterCallbackMaps, ForEachCallbackFunction} from '../../Utils/Function';
import {List} from './List';

export class ArrayList<E> implements List<E>{

    private data:Array<E>;

    private length:number =10;

    constructor(){
        this.data=new Array(10);
    }

   /*
    * returns true if map conatins the supplied key, K.
    */
    add(e:E):boolean{
        return true;
    }
    
   /*
    * clears the set and returns true is succeeds else returns false
    */
    clear():boolean{
        return false;
    }
    
   /*
    * returns true is set contains e
    */
    contains(e:E):boolean{
        return false;
    }
    
   /*
    * returns true if set is empty
    */
    isEmpty():boolean{
        return false;
    }
    
   /*
    * removes object e from collection
    */
    remove(e:E):boolean{
        return false;
    }
    
   /*
    * returns the size of the collection
    */
    size():number{
        return -1;
    }
    
   /*
    * returns an array containing the collection 
    */
    toArray():Array<E>{
        return null;
    }

    /**
     * 
     * 
     * @param {ForEachCallbackFunction<E>} callback
     * 
     * @memberOf Collection
     */
    forEach(callback:ForEachCallbackFunction<E>){
        return null;
    }

    /**
     * 
     * 
     * @param {FilterCallback<E>} callback
     * 
     * @memberOf Collection
     */
    filter(callback:FilterCallback<E>){
        return null;
    }


}