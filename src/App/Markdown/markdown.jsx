import React from 'react';
import ReactMarkdown from 'react-markdown';
import ReactMde from 'react-mde';

const input = `

# Live demo

> Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no  is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?


Pretty neat, eh?

## Tables?

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)

`

const MarkdownExample = () => {
    return <ReactMarkdown source={input}/>
    // return <ReactMde value={input} />
}

export default MarkdownExample;