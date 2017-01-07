import {Algorithm} from '../../Utils/Algorithms';
import {FilterCallbackMaps, ForEachCallbackMaps} from '../../Utils/Function';
import {Map} from '../Map';
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
     * @type {TreeNode<K, V>}
     * @memberOf TreeMap
     */
    private rootNde: TreeNode<K, V>;
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
        if(key == undefined || value == undefined){
            return null;
        }
        if (this.rootNde == undefined) {
            this.rootNde = new TreeNode<K, V>();
            return this.saveTreeNode(key, value, this.rootNde);
        }
        else {
            let parent: TreeNode<K, V> = this.rootNde;
            let previousNode: TreeNode<K, V> = this.rootNde;
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
            
            parent = new TreeNode<K, V>();
            if (result == 1) {
                previousNode.leftNode = parent;
            } else if (result == -1) {
                previousNode.rightNode = parent;
            }
            
            return this.saveTreeNode(key, value, parent);
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
        let node: TreeNode<K, V> = this.rootNde;
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
    //TODO:: Find a way to optimize this method as even after getting the key it keeps on running
    containsValue(value: V): boolean {
        let isPresent:boolean=false;
        
        this.forEach((k,v)=>{
            //console.log(" v : "+this.getComparableValue(v)+" value : "+this.getComparableValue(value));
            if(this.getComparableValue(v).localeCompare(this.getComparableValue(value))===0){
                isPresent=true;
                return;
            }
        });

        return isPresent;
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
        let node: TreeNode<K, V> = this.rootNde;

        while (node != undefined) {
            let num: number = this.getComparableValue(node.key).localeCompare(this.getComparableValue(key));
            if (num === 0) {
                return node.value;
            } else if (num === -1) {
                node = node.rightNode;
            } else if (num === 1) {
                node = node.leftNode;
            }
        } 

        return null;
    }
    
    /**
     * 
     * 
     * @private
     * @param {TreeNode<K, V>} focusNode
     * 
     * @memberOf TreeMap
     */
    private inOrderTraverseTree(focusNode: TreeNode<K, V>,callback:ForEachCallbackMaps<K,V>) {
        if (focusNode != undefined) {
            this.inOrderTraverseTree(focusNode.leftNode,callback);
            callback(focusNode.key,focusNode.value);
            this.inOrderTraverseTree(focusNode.rightNode,callback);
        }
    }

    /**
     * 
     * 
     * @private
     * @param {K} k
     * @param {V} v
     * @param {TreeNode<K, V>} parent
     * @returns {V}
     * 
     * @memberOf TreeMap
     */
    private saveTreeNode(k: K, v: V, parent: TreeNode<K, V>): V {
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
        this.inOrderTraverseTree(this.rootNde,callback);
    }


    /**
     * 
     * 
     * @param {K} key
     * @returns {V}
     * 
     * @memberOf TreeMap
     */
    remove(key:K):V{
        let val:V=this.get(key);
        if(val!=undefined){
        this.rootNde=this.deleteTreeNode(this.rootNde,key);
        this.treeSize--;
        }
        return val;
    }

    private deleteTreeNode(node:TreeNode<K,V>,key:K):TreeNode<K,V>{
        let diff=Algorithm.getComparableValue(node.key).localeCompare(Algorithm.getComparableValue(key));
        if(diff>0){
            node.leftNode=this.deleteTreeNode(node.leftNode,key);
        }else if(diff<0){
            node.rightNode=this.deleteTreeNode(node.rightNode,key);
        }else if(diff === 0){
            if(node.leftNode===undefined){
                return node.rightNode;
            }else if(node.rightNode===undefined){
                return node.leftNode;
            }

            node.key=this.getMinimumValue(node.rightNode);

            node.rightNode=this.deleteTreeNode(node.rightNode,node.key);
        }
        return node;
    }

    private getMinimumValue(node:TreeNode<K,V>):K{
        let minimumKey:K=node.key;
        while(node.leftNode!=undefined){
            minimumKey=node.leftNode.key;
            node=node.leftNode;
        }
        return minimumKey;
    }   

    /**
     * This method filters the current collection based on the outcome of callback method
     * 
     * @param {FilterCallbackMaps<K, V>} callback
     * 
     * @memberOf TreeMap
     */
    filter(callback: FilterCallbackMaps<K, V>){
        this.forEach((k,v)=>{
            if(callback(k,v)){
                this.remove(k);
            }
        });
    }

    getEntries():Array<Entry<K,V>>{
        let returnData:Array<Entry<K,V>>=new Array<Entry<K,V>>();
        this.forEach((k,v)=>{
            let entry:Entry<K,V>=new Entry<K,V>();
            entry.key=k;
            entry.value=v;
            returnData.push(entry);
        });
        return returnData;
    }

}

class Entry<K,V>{

    key:K;
    value:V;

}

class TreeNode<K,V> extends Entry<K,V>{
    
    leftNode:TreeNode<K,V>;
    rightNode:TreeNode<K,V>;    
    
    setKey(key1:K){
        this.key=key1;
    }
    
    setValue(value1:V){
        this.value=value1;
    }
    
}
