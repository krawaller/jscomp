---
name: Interval
summary: Looping through the lyrics of a song
---

This is a simple hello-worldish demo, where we declare a single component that loops through the lyrics of a song:

```
let lyrics = ["Eeexiiit light","Eeenteeer niight","Taaake my haaand","We're off to never never land"]
```

Here're the ground rules:

* Define a `Singer` component in a `singer` file
* It should render a single line of the song
* That component should have a `pos` data tracking which line we are on (0,1,...)
* After pos 3 we should loop back to 0
* Each line should be displayed 1500 ms

This demo aims to show off:

* Setting and getting state
* Lifecycle hooks (since we need to start the interval somewhere)
* Computed properties (we use `pos` to display the current `line`)