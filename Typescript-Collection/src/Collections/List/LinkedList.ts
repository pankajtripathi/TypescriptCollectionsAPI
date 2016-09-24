import {Algorithm} from '../../Utils/Algorithms';
import {ForEachCallbackFunction} from '../../Utils/Function';
import {List} from './List';

/**
 * 
 * 
 * @export
 * @class LinkedList
 * @implements {List<E>}
 * @template E
 */
export class LinkedList<E> implements List<E>{

    private rootNode: Entry<E>;

    private lastNode: Entry<E>;

    private dataSize: number = 0;

    /**
     * Creates an instance of LinkedList.
     * 
     * 
     * @memberOf LinkedList
     */
    constructor() {
    }

    /*
     * returns true if map conatins the supplied key, K.
     */
    add(e: E): boolean {
        this.dataSize++;
        if (this.rootNode === undefined) {
            this.rootNode = new Entry(e, null, null);
            this.lastNode = this.rootNode;
            return true;
        } else {
            let node: Entry<E> = new Entry(e, null, this.lastNode);
            this.lastNode.next = node;
            this.lastNode = node;
            return true;
        }
    }

    /*
     * clears the set and returns true is succeeds else returns false
     */
    clear(): boolean {
        this.rootNode = null;
        this.dataSize = 0;
        return true;
    }

    /*
     * returns true is set contains e
     */
    contains(e: E): boolean {
        let node=this.findEntry(e);
        if(node==undefined){
            return false;
        }else{
            return true;
        }
    }

    /*
     * returns true if set is empty
     */
    isEmpty(): boolean {
        if (this.dataSize === 0) {
            return true;
        }
        return false;
    }

    /*
     * removes object e from collection
     */
    remove(e: E): boolean{
        let node=this.findEntry(e);
        if(node==undefined){
            return false;
        }else{
            let previousNode=node.previous;
            let nextNode=node.next;
            previousNode.next=nextNode;
            nextNode.previous=previousNode;
            node=null;
            this.dataSize--;
            return true;
        }
    }

    /*
     * returns the size of the collection
     */
    size(): number{
        return this.dataSize;
    }

    /*
     * returns an array containing the collection 
     */
    toArray(): Array<E> {
        let arrayData:Array<E>=new Array<E>();
        this.forEach(e=>{
            arrayData.push(e);
        });
        return arrayData;
    }

    /**
     * 
     * 
     * @param {ForEachCallbackFunction<E>} callback
     * 
     * @memberOf Collection
     */
    forEach(callback: ForEachCallbackFunction<E>) {
        let currentNode = this.rootNode;
        while (currentNode != undefined) {
            callback(currentNode.element);
            currentNode = currentNode.next;
        }
    }

    /**
     * 
     * 
     * @private
     * @param {E} e
     * @returns {Entry<E>}
     * 
     * @memberOf LinkedList
     */
    private findEntry(e: E): Entry<E> {
        let currentNode: Entry<E> = this.rootNode;
        while (currentNode != undefined) {
            if (Algorithm.getComparableValue(e).localeCompare(Algorithm.getComparableValue(currentNode.element)) === 0) {
                return currentNode;
            }else{
                currentNode=currentNode.next;
            }
        }
        return null;
    }
}

/**
 * 
 * 
 * @class Entry
 * @template E
 */
class Entry<E>{

    element: E;
    next: Entry<E>;
    previous: Entry<E>;

    constructor(element: E, next: Entry<E>, previous: Entry<E>) {
        this.element = element;
        this.next = next;
        this.previous = previous;
    }

}