---
name: Local Storage
summary: Showing how to integrate localStorage reads and writes
---

#### Functionality

This very simple demo shows a button per Pokemon Go team, with the current team highlighted. Clicking a button selects that team.

Team selection is stored in `localStorage`.


#### Rationale

This demo aims to show off...

* looping in template
* initialising values
* reading and writing to state
* dynamic classes


#### Implementation instructions

Create a `voter` component tracking the current selection in a `team` state variable. This should be an `int` 0-2. 

The current selection should be given an `active` CSS class.

Write selections to the `JSCOMPVOTE` localStorage key (meaning the selection will be shared across implementations).

Read the selection from localStorage upon creation.
