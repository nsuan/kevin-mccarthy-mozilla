walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
    //Kevin McCarthy
	v = v.replace(/\bKevin McCarthy\b/g, "14-time speaker reject Kevin McCarthy");
	v = v.replace(/\bkevin McCarthy\b/g, "14-time speaker reject kevin McCarthy");
	v = v.replace(/\bkevin mcCarthy\b/g, "14-time speaker reject kevin mcCarthy");
	v = v.replace(/\bkevin mccarthy\b/g, "14-time speaker reject kevin mccarthy");
	
	textNode.nodeValue = v;
}


