<h1>Collection in typescript</h1>
<p>This is collection framework in typescript inspired by java collection API.</p>
<h3><strong>Table of contents</strong></h3>
<ol>
<li><a href="#collection">Collection</a><br />
<ol>
<li>List<br />
<ol>
<li>Arraylist</li>
</ol>
</li>
<li>Set<br />
<ol>
<li>TreeSet</li>
</ol>
</li>
</ol>
</li>
<li>Map
<ol>
<li>TreeMap</li>
</ol>
</li>
</ol>
<p>&nbsp;</p>
<p id="collection"><strong>Collection</strong></p>
<p><strong>&nbsp;</strong>This is the basic interface containing the genric methods.</p>
<p>&nbsp;</p>
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
