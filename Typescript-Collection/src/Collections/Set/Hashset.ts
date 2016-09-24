import {TreeMap} from '../../Map/TreeMap/Treemap';
import {Algorithm} from '../../Utils/Algorithms';
import {ForEachCallbackFunction} from '../../Utils/Function';
import {Set} from './Set';

/**
 * 
 * 
 * @export
 * @class HashSet
 * @implements {Set<E>}
 * @template E
 */
export class HashSet<E> implements Set<E>{

    /**
     * 
     * 
     * @private
     * @type {TreeMap<string, E>}
     * @memberOf HashSet
     */
    private hashSet: TreeMap<string, E> = new TreeMap<string, E>();

    /*
     * returns true if map conatins the supplied key, K.
     */
    add(e: E): boolean {
        let returnedValue = this.hashSet.put(this.generateHash(e), e);
        return true;
    }

    /*
     * clears the set and returns true is succeeds else returns false
     */
    clear(): boolean {
        return this.hashSet.clear();
    }

    /*
     * returns true is set contains e
     */
    contains(e: E): boolean {
        return this.hashSet.containsValue(e);
    }

    /*
     * returns true if set is empty
     */
    isEmpty(): boolean {
        return this.hashSet.isEmpty();
    }

    /*
     * removes object e from collection
     */
    remove(e: E): boolean {
        return false;
    }

    /*
     * returns the size of the collection
     */
    size(): number {
        return this.hashSet.size();
    }

    /*
     * returns an array containing the collection 
     */
    toArray(): Array<E> {
        let returnData: Array<E> = new Array<E>();
        if (!this.hashSet.isEmpty()) {
            this.hashSet.forEach((k, v) => {
                returnData.push(v)
            });
        }
        return returnData;
    }

    /**
     * 
     * 
     * @param {ForEachCallbackFunction<E>} callback
     * 
     * @memberOf Collection
     */
    forEach(callback: ForEachCallbackFunction<E>) {

    }

    /**
     * 
     * 
     * @private
     * @param {string} data
     * @returns {string}
     * 
     * @memberOf HashSet
     */
    private generateHash(data: E): string {
        return Algorithm.generateHashMD5(Algorithm.getComparableValue(data));
    }


} 