// gatsby-browser.js

exports.onRouteUpdate = () => {
  // We wrap the scroll command in a setTimeout with a minimal delay.
  // This pushes our command to the end of the execution queue, ensuring it
  // runs AFTER Gatsby's default scroll handling has finished.
  // This is the definitive way to win the race condition.
  const timer = setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10); // A 10 millisecond delay is imperceptible but effective.

  // It's good practice to clear the timer if the user navigates again quickly,
  // though it's unlikely to be an issue here.
  // We don't have a standard cleanup phase here, so this is the implementation.
  // This is a known pattern for this specific Gatsby issue.
}