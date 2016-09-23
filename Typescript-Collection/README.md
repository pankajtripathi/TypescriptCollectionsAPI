<h1>Collection in typescript</h1>
<p>A&nbsp;collection framework in typescript inspired by java collection API. This can be used in angular js 2.0.</p>
<h3><strong>Table of contents</strong></h3>
<ol>
<li><a href="#collection">Collection</a><br />
<ol>
<li><a href="#list">List</a><br />
<ol>
<li>Arraylist</li>
</ol>
</li>
<li><a href="#set">Set</a><br />
<ol>
<li><a href="#treeset">TreeSet</a></li>
</ol>
</li>
</ol>
</li>
<li><a href="#map">Map</a><br />
<ol>
<li><a href="#treemap">TreeMap</a></li>
</ol>
</li>
</ol>
<h3 id="collection">Collection</h3>
<p>This is the basic interface containing the genric methods. The subsequent implementing interfaces will be having these method's implmentation using various algorithms.</p>
<table>
<tbody>
<tr>
<td width="200">
<p><strong>Method Name</strong></p>
</td>
<td width="102">
<p><strong>Return </strong></p>
</td>
<td width="570">
<p><strong>Description</strong></p>
</td>
</tr>
<tr>
<td width="120">
<p>add(e:E)</p>
</td>
<td width="102">
<p>boolean</p>
</td>
<td width="418">
<p>returns true if map contains the supplied key, K.</p>
</td>
</tr>
<tr>
<td width="120">
<p>clear()</p>
</td>
<td width="102">
<p>boolean</p>
</td>
<td width="418">
<p>clears the set and returns true is succeeds else returns false</p>
</td>
</tr>
<tr>
<td width="120">
<p>contains(e:E)</p>
</td>
<td width="102">
<p>boolean</p>
</td>
<td width="418">
<p>returns true is set contains e</p>
</td>
</tr>
<tr>
<td width="120">
<p>isEmpty()</p>
</td>
<td width="102">
<p>boolean</p>
</td>
<td width="418">
<p>returns true if set is empty</p>
</td>
</tr>
<tr>
<td width="120">
<p>remove(e:E)</p>
</td>
<td width="102">
<p>boolean</p>
</td>
<td width="418">
<p>removes object e from collection</p>
</td>
</tr>
<tr>
<td width="120">
<p>size()</p>
</td>
<td width="102">
<p>number</p>
</td>
<td width="418">
<p>returns the size of the collection</p>
</td>
</tr>
<tr>
<td width="120">
<p>toArray()</p>
</td>
<td width="102">
<p>Array&lt;E&gt;</p>
</td>
<td width="418">
<p>returns an array containing the collection</p>
</td>
</tr>
</tbody>
</table>
<h3 id="list">List</h3>
<p>This is collection of elements on the basis of thier indeices.&nbsp;An ordered collection of data , which allows duplication of data.</p>
<h3 id="set">Set</h3>
<p>This interface is a sub interface of collection, which models mathematical set abstraction.&nbsp;Duplication is not allowed in this collection and only one null/undefined entry.</p>
<h3 id="treeset">Treeset</h3>
<p>This is one of the set interface's implementaion. It uses TreeMap internally to implement Set interface's method.</p>
<h3 id="map">Map</h3>
<p>A map is a collection of key value pair. Unlike others this inerface requires two objects for a single entry.&nbsp;It cannot have duplicate keys. Any attempt to store another value with existing key will result&nbsp;in overwriting the previous value hence lossing it.&nbsp;Duplicate values are possible but with different keys.</p>
<table>
<tbody>
<tr>
<td width="200">
<p><strong>Method Name</strong></p>
</td>
<td width="102">
<p><strong>Return </strong></p>
</td>
<td width="570">
<p><strong>Description</strong></p>
</td>
</tr>
<tr>
<td width="120">
<p>put(key:K,value:V)</p>
</td>
<td width="102">
<p>value:V</p>
</td>
<td width="418">
<p>Inserts value v, with key k and returns the stored value</p>
</td>
</tr>
<tr>
<td width="120">
<p>clear()</p>
</td>
<td width="102">
<p>boolean</p>
</td>
<td width="418">
<p>Clears map collection, returns true if succeeds in doing so else false</p>
</td>
</tr>
<tr>
<td width="120">
<p>containsKey(key:K)</p>
</td>
<td width="102">
<p>boolean</p>
</td>
<td width="418">
<p>returns true if map conatins the supplied key, K.</p>
</td>
</tr>
<tr>
<td width="120">
<p>containsValue(value:V)</p>
</td>
<td width="102">
<p>boolean</p>
</td>
<td width="418">
<p>returns true if map contains the supplied value, V</p>
</td>
</tr>
<tr>
<td width="120">
<p>isEmpty()</p>
</td>
<td width="102">
<p>boolean</p>
</td>
<td width="418">
<p>returns true if map is empty</p>
</td>
</tr>
<tr>
<td width="120">
<p>size()</p>
</td>
<td width="102">
<p>number</p>
</td>
<td width="418">
<p>returns the number of entries in map</p>
</td>
</tr>
<tr>
<td width="120">
<p>get(key:K)</p>
</td>
<td width="102">
<p>value:V</p>
</td>
<td width="418">
<p>returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h3 id="treemap">Treemap</h3>
<p>This is a concrete implementation of Map interface. It uses binary search tree to store values. In addition to the Map's methods, it also provides the following methods,</p>
<table>
<tbody>
<tr>
<td width="200">
<p><strong>Method Name</strong></p>
</td>
<td width="99">
<p><strong>Return </strong></p>
</td>
<td width="570">
<p><strong>Description</strong></p>
</td>
</tr>
<tr>
<td width="152">
<p>printTree()</p>
</td>
<td width="99">
<p>&nbsp;</p>
</td>
<td width="389">
<p>Prints the collection using in order traverse. It will always</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
