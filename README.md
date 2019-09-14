# svelte-actions-mutation

MutationObserver action plugin for [Svelte 3](https://svelte.dev). [Demo](https://svelte.dev/repl/ad0a323cbe6145fda049c5a884297b85?version=3.12.1)

## Usage

Install with npm or yarn:

```bash
npm install --save svelte-actions-mutation
```

```html
<button bind:this={btn} use:mutation={options} on:click={mutate}>
	Mutate
</button>

<script>
	import mutation from 'svelte-actions-mutation';
	
	let btn;

	function mutate() {
		btn.classList.add(Math.random().toString(36).substring(7));
  }
  
  const options = {
    attributeOldValue: true,
    attributeFilter: [ 'class' ],
    attributes(mutation) {
		  console.log(`Attribute ${mutation.attributeName} mutated. Old value: ${mutation.oldValue}`);
	  }
  };
</script>
```

## Options

| Name | Type | Description |
| --- | --- | --- | --- | --- |
| `attributes` | `Function` | Callback to watch for changes to the value of attributes on the node or nodes being monitored.  |
| `characterData` | `Function` | Callback to monitor the specified target node or subtree for changes to the character data contained within the node or nodes. |
| `childList` | `Function` | Callback to monitor the target node (and, if `subtree` is `true`, its descendants) for the addition of new child nodes or removal of existing child nodes.|
| `attributeFilter` | `Array` | An array of specific attribute names to be monitored. If this property isn't included, changes to all attributes cause mutation notifications. |
| `attributeOldValue` | `Boolean` | Set to true to record the previous value of any attribute that changes when monitoring the node or nodes for attribute changes. |
| `subtree` | `Boolean` | Set to true to extend monitoring to the entire subtree of nodes rooted at target.|
| `characterDataOldValue` | `Boolean` | Set to true to record the previous value of a node's text whenever the text changes on nodes being monitored. |

## License

MIT &copy; [PaulMaly](https://github.com/PaulMaly)
