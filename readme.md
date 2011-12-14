# Countdownskies
### A simple countdown plugin for jQuery

Most jQuery countdown plugins I've found are really heavy, require images, or require specific markup to work.

I needed a simple countdown that gave me days, hours, minutes, and seconds, required no images, and let me be fairly flexible with my markup.

## Usage
~~~
<p id="countdown"><span class="days">00</span>:<span class="hours">00</span>:<span class="minutes">00</span>:<span class="seconds">00</span></p>
<script type="text/javascript"> $('#countdown').countdownskies(2343223); </script>
~~~

## Requirements
Countdownskies requires [jQuery](http://jquery.com).

## Contribution
This is the first version that minimally met my needs. I left out a lot of frills that would be nice to have, such as:

- Transitions
- Specify units wanted (days, years, months, hours, ETC)
- Callback function for when the clock runs out, or even when units are at zero (such as when the hour hits zero)

Thus, contributions are very welcome. Just fork and send a pull request.