# Asynchronous updates in React's useState hook
This repository demonstrates an often overlooked aspect of React's useState hook: its asynchronous updates.

The `bug.js` file contains a component that increments a counter. However, logging the count within the increment function shows the *previous* value of the counter, not the updated one. This is because useState updates happen asynchronously.

The `bugSolution.js` file provides a solution using functional updates (a callback function passed to setState) to ensure the correct value is used.