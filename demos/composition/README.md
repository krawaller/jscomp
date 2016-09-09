---
name: Composition
summary: How to do composition
---

#### Functionality

A form showing the current name (initialised to `Steve`), a field to update the name and a button to submit the new name in the field.

When the field is empty, the button is disabled.

When the button is clicked the field isn't immediately submitted, instead the user can `confirm` or `cancel`. 

When a new name is submitted the field is emptied.


#### Rationale

This demo shows off

* how to do component composition
* how components communicate with each other. Both parent to child and child to parent.
* reading values from the DOM
* manipulating the DOM (emptying the field upon submission)

#### Implementation instructions

You will be creating three components having the following hierarchy:

![](../images/components.svg)

* The `form` component...
  * is rendered from `bootstrap`
  * holds the `current` submission
  * renders the `field` component
  * provides field with an `instruction` input, which is just plain text that never changes
  * listens to `submission` events from `field`
* The `field` component...
  * contains an `input` field
  * keeps track of the contents of the `field`
  * renders a `confirm` button component
  * tells `confirm` when it should be disabled
  * captures `confirmation` events from the `confirm` component
  * provides `submission` events to `form` parent
* The `confirm` component
  * can be in different `mode`s: `disabled`, `waiting` and `confirm`.
  * listens to `disabled` boolean from `field` parent
  * provides `confirmation` event to `field` parent

