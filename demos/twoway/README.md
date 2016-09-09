---
name: Twoway
summary: Demonstrating two-way data binding
---

#### Functionality 

A field where you can type your name. Under the field the current name is displayed, updated live as the field content changes. There's also a button, which changes the name to Batman. Clicking the button focuses the field.


#### Ratinoale

Show off...

* two way data binding
* node reference and manipulation


#### Implementation instruction

* Create a `phonebooth` component rendered from `bootstrap`.
* Track the current `name`.
* Initialise `name` to `"Steve"`.
* Show the current name, and a field to update the name, all with two-way data binding.
* Render a button which changes the name to `"Batman"`
* Clicking the button focuses the field.