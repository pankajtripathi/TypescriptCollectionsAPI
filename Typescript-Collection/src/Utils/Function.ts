/**
 * Interface representing function that can be passed in for each
 * 
 * @export
 * @interface ForEachCallbackFunction
 * @template T
 */
export interface ForEachCallbackFunction<T> {

    (a: T): boolean | void;

}

/**
 * 
 * 
 * @export
 * @interface ForEachCallbackMaps
 * @template K
 * @template V
 */
export interface ForEachCallbackMaps<K, V> {

    (k: K, v: V): boolean | void;
}
