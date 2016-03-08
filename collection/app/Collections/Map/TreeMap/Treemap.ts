import { Map } from '../Map';
import { Entry } from './Entry';
export class TreeMap<K, V> implements Map<K, V>{

    private rootNde: Entry<K, V>;
    private treeSize: number = 0;

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

    clear(): boolean {
        this.rootNde = null;
        this.treeSize = 0;
        return true;
    }

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

    isEmpty(): boolean {
        if(this.size()===0){
            return  true;
        }
        return false;
    }

    size(): number {
        return this.treeSize;
    }

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
    
    public printTree() {
        this.inOrderTraverseTree(this.rootNde);
    }

    private inOrderTraverseTree(focusNode: Entry<K, V>) {
        if (focusNode != undefined) {
            this.inOrderTraverseTree(focusNode.leftNode);
            console.log("key " + JSON.stringify(focusNode.key) + "  value " + JSON.stringify(focusNode.value));
            this.inOrderTraverseTree(focusNode.rightNode);
        }
    }

    private saveEntry(k: K, v: V, parent: Entry<K, V>): V {
        parent.setKey(k);
        parent.setValue(v);
        this.treeSize++;
        return v;
    }

    private getComparableValue(object: any): string {
        return JSON.stringify(object);
    }
}