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

