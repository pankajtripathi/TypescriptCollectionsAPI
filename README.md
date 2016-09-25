<h1>
    <a name="_Toc462579159">Typescript Collection</a>
</h1>
<p>
    Collection API in typescript following Java’s collection framework.
</p>
<p>
    Table of Contents
</p>
<p>
    <a href="file:///E:/Programming/docs/Typescript%20Collection.docx#_Toc462579159">Typescript Collection. 1</a>
</p>
<p>
    <a href="file:///E:/Programming/docs/Typescript%20Collection.docx#_Toc462579160">Usage. 1</a>
</p>
<p>
    <a href="file:///E:/Programming/docs/Typescript%20Collection.docx#_Toc462579161">Collection. 1</a>
</p>
<p>
    <a href="file:///E:/Programming/docs/Typescript%20Collection.docx#_Toc462579162">List. 1</a>
</p>
<p>
    <a href="file:///E:/Programming/docs/Typescript%20Collection.docx#_Toc462579163">LinkedList. 1</a>
</p>
<p>
    <a href="file:///E:/Programming/docs/Typescript%20Collection.docx#_Toc462579164">Set. 1</a>
</p>
<p>
    <a href="file:///E:/Programming/docs/Typescript%20Collection.docx#_Toc462579165">HashSet. 1</a>
</p>
<p>
    <a href="file:///E:/Programming/docs/Typescript%20Collection.docx#_Toc462579166">Map. 1</a>
</p>
<p>
    <a href="file:///E:/Programming/docs/Typescript%20Collection.docx#_Toc462579167">Treemap. 1</a>
</p>
<h2>
    <a name="_Toc462579160">Usage</a>
</h2>
<ul>
    <li>
        For using in your project,
    </li>
</ul>
<p>
    npm install typescript-collection
</p>
<ul>
    <li>
        For contributing,
    </li>
</ul>
<p>
    npm install
</p>
<p>
    npm run test
</p>
<p>
    npm run test-coverage
</p>
<p>
    Following are the interfaces, classes along with their methods provided in the current API.
</p>
<h2>
    <a name="_Toc462579161">Collection</a>
</h2>
<p>
    · This is the basic interface containing the generic methods.
</p>
<p>
    · Parent interface of this API
</p>
<table border="1" cellspacing="0" cellpadding="0" width="640">
    <tbody>
        <tr>
            <td width="111" valign="top">
                <p>
                    <strong>Method Name</strong>
                    <strong></strong>
                </p>
            </td>
            <td width="84" valign="top">
                <p>
                    <strong>Return </strong>
                    <strong></strong>
                </p>
            </td>
            <td width="445" valign="top">
                <p>
                    <strong>Description</strong>
                    <strong></strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="111" valign="top">
                <p>
                    add(e:E)
                </p>
            </td>
            <td width="84" valign="top">
                <p>
                    Boolean
                </p>
            </td>
            <td width="445" valign="top">
                <p>
                    returns true if map contains the supplied key, K.
                </p>
            </td>
        </tr>
        <tr>
            <td width="111" valign="top">
                <p>
                    clear()
                </p>
            </td>
            <td width="84" valign="top">
                <p>
                    Boolean
                </p>
            </td>
            <td width="445" valign="top">
                <p>
                    clears the set and returns true is succeeds else returns false
                </p>
            </td>
        </tr>
        <tr>
            <td width="111" valign="top">
                <p>
                    contains(e:E)
                </p>
            </td>
            <td width="84" valign="top">
                <p>
                    Boolean
                </p>
            </td>
            <td width="445" valign="top">
                <p>
                    returns true is set contains e
                </p>
            </td>
        </tr>
        <tr>
            <td width="111" valign="top">
                <p>
                    isEmpty()
                </p>
            </td>
            <td width="84" valign="top">
                <p>
                    Boolean
                </p>
            </td>
            <td width="445" valign="top">
                <p>
                    returns true if set is empty
                </p>
            </td>
        </tr>
        <tr>
            <td width="111" valign="top">
                <p>
                    remove(e:E)
                </p>
            </td>
            <td width="84" valign="top">
                <p>
                    Boolean
                </p>
            </td>
            <td width="445" valign="top">
                <p>
                    removes object e from collection
                </p>
            </td>
        </tr>
        <tr>
            <td width="111" valign="top">
                <p>
                    size()
                </p>
            </td>
            <td width="84" valign="top">
                <p>
                    number
                </p>
            </td>
            <td width="445" valign="top">
                <p>
                    returns the size of the collection
                </p>
            </td>
        </tr>
        <tr>
            <td width="111" valign="top">
                <p>
                    toArray()
                </p>
            </td>
            <td width="84" valign="top">
                <p>
                    Array&lt;E&gt;
                </p>
            </td>
            <td width="445" valign="top">
                <p>
                    returns an array containing the collection
                </p>
            </td>
        </tr>
        <tr>
            <td width="111" valign="top">
                <p>
                    forEach(func)
                </p>
            </td>
            <td width="84" valign="top">
                <p>
                    function
                </p>
            </td>
            <td width="445" valign="top">
                <p>
                    Executes the supplied function on every element of the collection
                </p>
            </td>
        </tr>
        <tr>
            <td width="111" valign="top">
                <p>
                    filter(func)
                </p>
            </td>
            <td width="84" valign="top">
                <p>
                    function
                </p>
            </td>
            <td width="445" valign="top">
                <p>
                    filters map based on Boolean outcome of passed function
                </p>
            </td>
        </tr>
    </tbody>
</table>
<h2>
    <a name="_Toc462579162">List</a>
</h2>
<ul>
    <li>
        This interface extends collection interface
    </li>
</ul>
<p>
    · It represents collection of elements in sequential order
</p>
<p>
    Following are some of the implementations of this interface.
</p>
<h3>
    <a name="_Toc462579163">LinkedList</a>
</h3>
<ul type="disc">
    <li>
        This collection stores data in a list fashion.
    </li>
    <li>
        Useful for random insertions, deletions is to be performed on list
    </li>
</ul>
<h2>
    <a name="_Toc462579164">Set</a>
</h2>
<ul>
    <li>
        Another sub interface of collection
    </li>
    <li>
        Models mathematical set abstraction
    </li>
    <li>
        Unique values are stored
    </li>
</ul>
<p>
    Following are some of the implementations of this interface.
</p>
<h3>
    <a name="_Toc462579165">HashSet</a>
</h3>
<ul>
    <li>
        Stores data based on the hash generated from it.
    </li>
</ul>
<p>
    · It uses MD5 algorithm to calculate hash of the data.
</p>
<h2>
    <a name="_Toc462579166">Map</a>
</h2>
<ul>
    <li>
        Map is collection of key, value pairs
    </li>
</ul>
<p>
    · Unlike other collections ,this is a collection of pairs
</p>
<p>
    · Stores unique keys, although values can be duplicate
</p>
<p>
    Following are the methods provided by this interface,
</p>
<table border="1" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td width="186" valign="top">
                <p>
                    <strong>Method Name</strong>
                    <strong></strong>
                </p>
            </td>
            <td width="106" valign="top">
                <p>
                    <strong>Return </strong>
                    <strong></strong>
                </p>
            </td>
            <td width="667" valign="top">
                <p>
                    <strong>Description</strong>
                    <strong></strong>
                </p>
            </td>
        </tr>
        <tr>
            <td width="186" valign="top">
                <p>
                    put(key:K,value:V)
                </p>
            </td>
            <td width="106" valign="top">
                <p>
                    value:V
                </p>
            </td>
            <td width="667" valign="top">
                <p>
                    Inserts value v, with key k and returns the stored value
                </p>
            </td>
        </tr>
        <tr>
            <td width="186" valign="top">
                <p>
                    clear()
                </p>
            </td>
            <td width="106" valign="top">
                <p>
                    Boolean
                </p>
            </td>
            <td width="667" valign="top">
                <p>
                    Clears map collection, returns true if succeeds in doing so else false
                </p>
            </td>
        </tr>
        <tr>
            <td width="186" valign="top">
                <p>
                    containsKey(key:K)
                </p>
            </td>
            <td width="106" valign="top">
                <p>
                    boolean
                </p>
            </td>
            <td width="667" valign="top">
                <p>
                    returns true if map contains the supplied key, K.
                </p>
            </td>
        </tr>
        <tr>
            <td width="186" valign="top">
                <p>
                    containsValue(value:V)
                </p>
            </td>
            <td width="106" valign="top">
                <p>
                    boolean
                </p>
            </td>
            <td width="667" valign="top">
                <p>
                    returns true if map contains the supplied value, V
                </p>
            </td>
        </tr>
        <tr>
            <td width="186" valign="top">
                <p>
                    isEmpty()
                </p>
            </td>
            <td width="106" valign="top">
                <p>
                    boolean
                </p>
            </td>
            <td width="667" valign="top">
                <p>
                    returns true if map is empty
                </p>
            </td>
        </tr>
        <tr>
            <td width="186" valign="top">
                <p>
                    size()
                </p>
            </td>
            <td width="106" valign="top">
                <p>
                    number
                </p>
            </td>
            <td width="667" valign="top">
                <p>
                    returns the number of entries in map
                </p>
            </td>
        </tr>
        <tr>
            <td width="186" valign="top">
                <p>
                    get(key:K)
                </p>
            </td>
            <td width="106" valign="top">
                <p>
                    value:V
                </p>
            </td>
            <td width="667" valign="top">
                <p>
                    Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
                </p>
            </td>
        </tr>
        <tr>
            <td width="186" valign="top">
                <p>
                    forEach(func)
                </p>
            </td>
            <td width="106" valign="top">
                <p>
                    function
                </p>
            </td>
            <td width="667" valign="top">
                <p>
                    performs the supplied function on each entry
                </p>
            </td>
        </tr>
        <tr>
            <td width="186" valign="top">
                <p>
                    Filter(func)
                </p>
            </td>
            <td width="106" valign="top">
                <p>
                    function
                </p>
            </td>
            <td width="667" valign="top">
                <p>
                    filters map based on Boolean outcome of passed function
                </p>
            </td>
        </tr>
    </tbody>
</table>
<h3>
    <a name="_Toc462579167">Tre</a>
    emap
</h3>
<ul>
    <li>
        Concrete implementation of map interface.
    </li>
    <li>
        Stores data in binary search tree form
    </li>
</ul>