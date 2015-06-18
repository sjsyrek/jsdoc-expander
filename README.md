# TextExpander snippets for JSDoc

There are two snippets:

- `javascriptJSDoc` contains the JavaScript code that produces the text output for the snippet
- `@jsdoc` is the abbreviation you should use for the snippet itself (rename this to whatever you want)

The snippet will probably not function if you try to expand the JavaScript code by itself. This code runs within TextExpander's native JavaScript environment. It does not run Apple's JavaScript for Automation (JSA), which I can't yet get to work. The enclosing `@jsdoc` snippet consists entirely of a nested snippet macro:

```
%snippet:javascriptJSDoc%
```

You could add a `%filltop%` macro just before this (on the same line to avoid line breaks) if you want more of an interface look, but I like having a preview of how the expanded text will appear.

Note that the JavaScript builds up the expansion text by creating TextExpander macros. It seems necessary to keep the percent signs (%) separate from the rest of any given text string, lest TextExpander interpret that as a macro before your code has fully executed.

A more powerful version is possible using JSA and dialog boxes. I had envisioned offering multiple options for the output, such as for optional, required, and variable function parameters, but this is the best I can do right now. I think it will be very handy for inserting frequently-used JSDoc tags. Enjoy.