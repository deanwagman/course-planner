# Course Planner

## Contact
Dean Wagman
deanwagman@gmail.com
407.325.9770
@deanwagman
Wednesday August 31st, 2016

## Setup
1. npm install
2. npm run start
3. Navigate to localhost:3090

## Main Tech Stack
- node
- express
- React + Redux

## Notes
- Clicking a course in the left menu adds the course to your calendar
- If the course conflicts with an already selected course, it will show you that course
- Clicking the Header will prompt you for a new title. A more elegant input such as a modal could be iterated.
- Hope you like it :) Please let me know any feedback at all. Love to hear ways of improving. :D
- Feel free to contact me in any way from above.

## Ways To Improve
- CSS was not a focus at this time, and can definitely be improved upon.
- Header Component Can be integrated with Redux for more Consistency.
- Layout needs to be made responsive
- Keyboard Controls
- Server Backup of User's settings and Courses. Was working on this, but is not complete.
- Redux refactoring. I'm still rather new to this and figuring out the best ways to organize my code.

## Developing
There is a npm script called "npm run dev", that will start an express server and a webpack server.
However it can get rather annoying quiting one or the other as sometimes you'll have to go through "ps".
Because of this I usually open one tab to start the Backend Server by running 'npm run start',
and another tab to run 'run npm webpack' to watch and compile my React and Redux assets.
