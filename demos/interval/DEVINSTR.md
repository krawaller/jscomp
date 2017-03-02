
Here're the ground rules:

* Define a `Singer` component in a `singer` file
* It should render a single line of the song
* That component should have a `pos` data tracking which line we are on (0,1,...)
* After `pos` 3 we should loop back to 0
* Each line should be displayed `1500` ms
