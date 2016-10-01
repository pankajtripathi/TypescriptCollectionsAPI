<h1><a name="_Toc462579159"></a>Typescript Collection</h1>
<p>Collection API in typescript following Java&rsquo;s collection framework. Fully unit tested with test coverage.</p>
<p><a href="http://pankajtripathi.github.io/TypescriptCollectionsAPI/">github page</a></p>
<h2>Table of Contents</h2>
<ul>
<li><a href="#_Toc462579160">Usage</a></li>
<li><a href="#_Toc462579161">Collection</a></li>
<a href="#_Toc462579162">---List</a><br/>
<a href="#_Toc462579163">------LinkedList</a><br/>
<a href="#_Toc462579164">---Set</a><br/>
<a href="#_Toc462579165">------HashSet</a><br/>
<li><a href="#_Toc462579166">Map</a></li>
<a href="#_Toc462579167">---Treemap</a><br/>
</ul>
<h2><a name="_Toc462579160"></a>Usage</h2>
<ul>
<li>For using in your project,</li>
</ul>
<blockquote>
<p>npm install typescript-collection</p>
</blockquote>
<ul>
<li>
<p>For contributing,</p>
</li>
</ul>
<blockquote>
<p>npm install</p>
<p>npm run test</p>
<p>npm run test-coverage</p>
</blockquote>
<p>&nbsp;</p>
<p>Following are the interfaces, classes along with their methods provided in the current API.</p>
<p>&nbsp;</p>
<h2><a name="_Toc462579161"></a>Collection</h2>
<ul>
<li>This is the basic interface containing the generic methods.</li>
<li>Parent interface of this API</li>
</ul>
<table width="955">
<tbody>
<tr>
<td width="186">
<p><strong>Method Name</strong></p>
</td>
<td width="74">
<p><strong>Return </strong></p>
</td>
<td width="756">
<p><strong>Description</strong></p>
</td>
</tr>
<tr>
<td width="125">
<p>add(e:E)</p>
</td>
<td width="74">
<p>Boolean</p>
</td>
<td width="756">
<p>returns true if map contains the supplied key, K.</p>
</td>
</tr>
<tr>
<td width="125">
<p>clear()</p>
</td>
<td width="74">
<p>Boolean</p>
</td>
<td width="756">
<p>clears the set and returns true is succeeds else returns false</p>
</td>
</tr>
<tr>
<td width="125">
<p>contains(e:E)</p>
</td>
<td width="74">
<p>Boolean</p>
</td>
<td width="756">
<p>returns true is set contains e</p>
</td>
</tr>
<tr>
<td width="125">
<p>isEmpty()</p>
</td>
<td width="74">
<p>Boolean</p>
</td>
<td width="756">
<p>returns true if set is empty</p>
</td>
</tr>
<tr>
<td width="125">
<p>remove(e:E)</p>
</td>
<td width="74">
<p>Boolean</p>
</td>
<td width="756">
<p>removes object e from collection</p>
</td>
</tr>
<tr>
<td width="125">
<p>size()</p>
</td>
<td width="74">
<p>number</p>
</td>
<td width="756">
<p>returns the size of the collection</p>
</td>
</tr>
<tr>
<td width="125">
<p>toArray()</p>
</td>
<td width="74">
<p>Array&lt;E&gt;</p>
</td>
<td width="756">
<p>returns an array containing the collection</p>
</td>
</tr>
<tr>
<td width="125">
<p>forEach(func)</p>
</td>
<td width="74">
<p>function</p>
</td>
<td width="756">
<p>Executes the supplied function on every element of the collection</p>
</td>
</tr>
<tr>
<td width="125">
<p>filter(func)</p>
</td>
<td width="74">
<p>function</p>
</td>
<td width="756">
<p>filters map based on Boolean outcome of passed function</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h2><a name="_Toc462579162"></a>List</h2>
<ul>
<li>This interface extends collection interface</li>
<li>It represents collection of elements in sequential order</li>
</ul>
<p>Following are some of the implementations of this interface.</p>
<h3><a name="_Toc462579163"></a>LinkedList</h3>
<ul>
<li>This collection stores data in a list fashion.</li>
<li>Useful for random insertions, deletions is to be performed on list</li>
</ul>
<h2><a name="_Toc462579164"></a>Set</h2>
<ul>
<li>Another sub interface of collection</li>
<li>Models mathematical set abstraction</li>
<li>Unique values are stored</li>
</ul>
<p>&nbsp;</p>
<p>Following are some of the implementations of this interface.</p>
<h3><a name="_Toc462579165"></a>HashSet</h3>
<ul>
<li>Stores data based on the hash generated from it.</li>
<li>It uses MD5 algorithm to calculate hash of the data.</li>
</ul>
<h2><a name="_Toc462579166"></a>Map</h2>
<ul>
<li>Map is collection of key, value pairs</li>
<li>Unlike other collections ,this is a collection of pairs</li>
<li>Stores unique keys, although values can be duplicate</li>
</ul>
<p>Following are the methods provided by this interface,</p>
<table>
<tbody>
<tr>
<td width="186">
<p><strong>Method Name</strong></p>
</td>
<td style="width: 106px;" width="106">
<p><strong>Return </strong></p>
</td>
<td width="667">
<p><strong>Description</strong></p>
</td>
</tr>
<tr>
<td width="186">
<p>put(key:K,value:V)</p>
</td>
<td width="106">
<p>value:V</p>
</td>
<td width="667">
<p>Inserts value v, with key k and returns the stored value</p>
</td>
</tr>
<tr>
<td width="186">
<p>clear()</p>
</td>
<td width="106">
<p>Boolean</p>
</td>
<td width="667">
<p>Clears map collection, returns true if succeeds in doing so else false</p>
</td>
</tr>
<tr>
<td width="186">
<p>containsKey(key:K)</p>
</td>
<td width="106">
<p>boolean</p>
</td>
<td width="667">
<p>returns true if map contains the supplied key, K.</p>
</td>
</tr>
<tr>
<td width="186">
<p>containsValue(value:V)</p>
</td>
<td width="106">
<p>boolean</p>
</td>
<td width="667">
<p>returns true if map contains the supplied value, V</p>
</td>
</tr>
<tr>
<td width="186">
<p>isEmpty()</p>
</td>
<td width="106">
<p>boolean</p>
</td>
<td width="667">
<p>returns true if map is empty</p>
</td>
</tr>
<tr>
<td width="186">
<p>size()</p>
</td>
<td width="106">
<p>number</p>
</td>
<td width="667">
<p>returns the number of entries in map</p>
</td>
</tr>
<tr>
<td width="186">
<p>get(key:K)</p>
</td>
<td width="106">
<p>value:V</p>
</td>
<td width="667">
<p>Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.</p>
</td>
</tr>
<tr>
<td width="186">
<p>forEach(func)</p>
</td>
<td width="106">
<p>function</p>
</td>
<td width="667">
<p>performs the supplied function on each entry</p>
</td>
</tr>
<tr>
<td width="186">
<p>Filter(func)</p>
</td>
<td width="106">
<p>function</p>
</td>
<td width="667">
<p>filters map based on Boolean outcome of passed function</p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h3><a name="_Toc462579167"></a>Treemap</h3>
<ul>
<li>Concrete implementation of map interface.</li>
<li>Stores data in binary search tree form</li>
</ul>
<p>&nbsp;</p>
<p>&nbsp;</p>
