<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';

	let element: Element;
	let editor: Editor;

	onMount(() => {
		editor = new Editor({
            editorProps: {
                attributes: {
                    class: [
                        "p-4 rounded-b-lg outline-1",
                        "-outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2",
                        "focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                    ].join(" "),
                },
            },
			element: element,
			extensions: [StarterKit],
			content: '<p>Hello World! 🌍️ </p>',
			onTransaction: () => {
				// force re-render so `editor.isActive` works as expected
				editor = editor;
			},
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

{#if editor}
	<nav class="editor-nav">
        <button
            on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            class:active={editor.isActive('heading', { level: 1 })}
        >
            H1
        </button>
        <button
            on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            class:active={editor.isActive('heading', { level: 2 })}
        >
            H2
        </button>
        <button
            on:click={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            class:active={editor.isActive('heading', { level: 3 })}
        >
            H3
        </button>
        <button
            on:click={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            class:active={editor.isActive('heading', { level: 4 })}
        >
            H4
        </button>
        <button
            on:click={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
            class:active={editor.isActive('heading', { level: 5 })}
        >
            H5
        </button>
        <button
            on:click={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
            class:active={editor.isActive('heading', { level: 6 })}
        >
            H6
        </button>
        <button
            on:click={() => editor.chain().focus().setParagraph().run()}
            class:active={editor.isActive('paragraph')}
        >
            P
        </button>
    </nav>
{/if}

<div bind:this={element}></div>

<style lang="postcss">
    @reference "tailwindcss";

    :global(.editor-nav) {
        @apply flex items-start bg-slate-100 border-x border-t border-gray-300 rounded-t-lg px-4;

        & > button {
            @apply py-1 px-2 text-sm font-semibold;
        }

        button.active {
            @apply bg-slate-500 text-white;
        }
    }
</style>
