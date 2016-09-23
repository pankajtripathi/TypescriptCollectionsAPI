import {ForEachCallbackMaps} from '../../Utils/Function';
import {Map} from '../Map';
import {Entry} from './Entry';
/**
 * 
 * 
 * @export
 * @class TreeMap
 * @implements {Map<K, V>}
 * @template K
 * @template V
 */
export class TreeMap<K, V> implements Map<K, V>{

    /**
     * 
     * 
     * @private
     * @type {Entry<K, V>}
     * @memberOf TreeMap
     */
    private rootNde: Entry<K, V>;
    /**
     * 
     * 
     * @private
     * @type {number}
     * @memberOf TreeMap
     */
    private treeSize: number = 0;

    /**
     * 
     * 
     * @param {K} key
     * @param {V} value
     * @returns {V}
     * 
     * @memberOf TreeMap
     */
    put(key: K, value: V): V {
        if (this.rootNde === undefined) {
            this.rootNde = new Entry<K, V>();
            return this.saveEntry(key, value, this.rootNde);
        }
        else {
            let parent: Entry<K, V> = this.rootNde;
            let previousNode: Entry<K, V> = this.rootNde;
            let result: number = 0;
            
            do {
                result = this.getComparableValue(parent.key).localeCompare(this.getComparableValue(key));
                previousNode = parent;
                if (result == 1) {
                    parent = previousNode.leftNode;
                } else if (result == -1) {
                    parent = previousNode.rightNode;
                } else if (result == 0) {
                    parent.value = value;
                    return value;
                }
            } while (parent != undefined);
            
            parent = new Entry<K, V>();
            if (result == 1) {
                previousNode.leftNode = parent;
            } else if (result == -1) {
                previousNode.rightNode = parent;
            }
            
            return this.saveEntry(key, value, parent);
        }
    }

    /**
     * 
     * 
     * @returns {boolean}
     * 
     * @memberOf TreeMap
     */
    clear(): boolean {
        this.rootNde = null;
        this.treeSize = 0;
        return true;
    }

    /**
     * 
     * 
     * @param {K} key
     * @returns {boolean}
     * 
     * @memberOf TreeMap
     */
    containsKey(key: K): boolean {
        let node: Entry<K, V> = this.rootNde;
        do {
            let num: number = this.getComparableValue(node.key).localeCompare(this.getComparableValue(key));
            if (num === 0) {
                return true;
            } else if (num === -1) {
                node = node.rightNode;
            } else if (num === 1) {
                node = node.leftNode;
            }
        } while (node != undefined)

        return false;
    }

    /**
     * 
     * 
     * @param {V} value
     * @returns {boolean}
     * 
     * @memberOf TreeMap
     */
    containsValue(value: V): boolean {
        let node: Entry<K, V> = this.rootNde;
        do {
            let num: number = this.getComparableValue(node.value).localeCompare(this.getComparableValue(value));
            if (num === 0) {
                return true;
            } else if (num === -1) {
                node = node.rightNode;
            } else if (num === 1) {
                node = node.leftNode;
            }
        } while (node != undefined)

        return false;
    }

    /**
     * 
     * 
     * @returns {boolean}
     * 
     * @memberOf TreeMap
     */
    isEmpty(): boolean {
        if(this.size()===0){
            return  true;
        }
        return false;
    }

    /**
     * 
     * 
     * @returns {number}
     * 
     * @memberOf TreeMap
     */
    size(): number {
        return this.treeSize;
    }

    /**
     * 
     * 
     * @param {K} key
     * @returns {V}
     * 
     * @memberOf TreeMap
     */
    get(key: K): V {
        let node: Entry<K, V> = this.rootNde;

        do {
            let num: number = this.getComparableValue(node.key).localeCompare(this.getComparableValue(key));
            if (num === 0) {
                return node.value;
            } else if (num === -1) {
                node = node.rightNode;
            } else if (num === 1) {
                node = node.leftNode;
            }
        } while (node != undefined)

        return null;
    }
    
    /**
     * 
     * 
     * 
     * @memberOf TreeMap
     */
    public printTree() {
        this.inOrderTraverseTree(this.rootNde);
    }

    /**
     * 
     * 
     * @private
     * @param {Entry<K, V>} focusNode
     * 
     * @memberOf TreeMap
     */
    private inOrderTraverseTree(focusNode: Entry<K, V>) {
        if (focusNode != undefined) {
            this.inOrderTraverseTree(focusNode.leftNode);
            console.log("key " + JSON.stringify(focusNode.key) + "  value " + JSON.stringify(focusNode.value));
            this.inOrderTraverseTree(focusNode.rightNode);
        }
    }

    /**
     * 
     * 
     * @private
     * @param {K} k
     * @param {V} v
     * @param {Entry<K, V>} parent
     * @returns {V}
     * 
     * @memberOf TreeMap
     */
    private saveEntry(k: K, v: V, parent: Entry<K, V>): V {
        parent.setKey(k);
        parent.setValue(v);
        this.treeSize++;
        return v;
    }

    /**
     * 
     * 
     * @private
     * @param {*} object
     * @returns {string}
     * 
     * @memberOf TreeMap
     */
    private getComparableValue(object: any): string {
        return JSON.stringify(object);
    }

    /**
     * 
     * 
     * @param {ForEachCallbackMaps<K,V>} callback
     * 
     * @memberOf TreeMap
     */
    public forEach(callback:ForEachCallbackMaps<K,V>){
        this.callBackMethod(this.rootNde,callback);
    }

    /**
     * 
     * 
     * @private
     * @param {Entry<K,V>} focusNode
     * @param {ForEachCallbackMaps<K,V>} callback
     * 
     * @memberOf TreeMap
     */
    private callBackMethod(focusNode:Entry<K,V>,callback:ForEachCallbackMaps<K,V>){
         if (focusNode != undefined) {
            this.callBackMethod(focusNode.leftNode,callback);
            callback(focusNode.key,focusNode.value);
            this.callBackMethod(focusNode.rightNode,callback);
        }
    }
}