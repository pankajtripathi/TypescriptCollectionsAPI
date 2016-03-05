import { Map } from '../Map.ts';
import { Entry } from './Entry.ts';
export class TreeMap<K, V> implements Map<K, V>{

    private rootNde: Entry<K, V>;
    private treeSize:number=0;
    
    put(key: K, value: V): V {
        console.log("rt node is : "+this.rootNde);
        if(this.rootNde===undefined){
            console.log("null node");
            this.rootNde=new Entry<K,V>();
           // this.rootNde.setKey(key);
           // this.rootNde.setValue(value);
        }
        return value;
    }

    clear(): boolean {
        return true;
    }

    containsKey(key: K): boolean {
        return true;
    }

    containsValue(value: V): boolean {
        return true;
    }

    isEmpty(): boolean {
        return true;
    }


    size(): number {
        return this.treeSize;
    }
    
    
	private  inOrderTraverseTree(focusNode:Entry<K,V>) {
        console.log("inside traverse " + focusNode);
		if (focusNode != undefined) {
            console.log("insdide if");

			this.inOrderTraverseTree(focusNode.leftNode);
			console.log(JSON.stringify(focusNode.key));
			this.inOrderTraverseTree(focusNode.rightNode);

		}

	}
    
    public printTree(){
        this.inOrderTraverseTree(this.rootNde);
    }
    

}