# JSDocExpander
## TextExpander snippets for JSDoc

Expand a simple abbreviation with TextExpander 5.0 to automatically insert custom JSDoc comments into your JavaScript code. [TextExpander 5.0][1] is required for these snippets to function, as they take advantage of its new JavaScript scripting features. The inserted text will look like this:
```
/**
 * 
 * @const {string} 
 */
```
The cursor is inserted after the `*` on the second line, so you can enter a description conveniently after expansion. Options are available for many common [JSDoc][2] and [Google Closure Compiler][3] tags and type expressions. There are two snippets:

- `javascriptJSDoc` contains the JavaScript code that produces the text output for the snippet
- `@jsdoc` is the abbreviation you should use for the snippet itself (rename this to whatever you want)

The snippet will probably not function if you try to expand the JavaScript code by itself, which runs within TextExpander's native JavaScript environment. It does not run [Apple's JavaScript for Automation][4] (JSA), which I can't yet get to work reliably. The enclosing `@jsdoc` snippet consists entirely of a nested snippet macro:

```
%snippet:javascriptJSDoc%
```

You could add a `%filltop%` macro just before this (on the same line to avoid breaks) if you want more of an interface look, but I like having a preview of how the expanded text will appear. See [TextExpander Help][5] for more details.

Note that the JavaScript builds up the expansion text by creating TextExpander macros. It seems necessary to keep the percent signs (%) separate from the rest of any given text string, hence all the `'%'` strings, lest TextExpander interpret it as the beginning of a macro before your code has fully executed.

A more powerful version is possible using JSA and dialog boxes. I had envisioned offering multiple options for the output—such as for optional, required, and variable function parameters as well as Array and Object types—but this is the best I can do right now. I think it will be very handy for inserting frequently-used JSDoc tags into your code. Enjoy.

[1]:  http://smilesoftware.com/TextExpander/index.html "TextExpander"
[2]: http://usejsdoc.org/index.html "JSDoc"
[3]: https://developers.google.com/closure/compiler/docs/js-for-compiler "Annotating JavaScript for the Closure Compiler"
[4]: https://developer.apple.com/library/mac/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/index.html "JavaScript for Automation Release Notes"
[5]: http://smilesoftware.com/help/TextExpander/index.html "TextExpander Help"