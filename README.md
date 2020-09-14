# Quick start
* Clone repo
* Open index.html in browser
* Get organized!

# To whom it may concern
The goal of this excercise for me was to make the smallest possible implementation with no libraries. The project obviously leaves a lot of room to grow, and depending on the features that need to be added and as the complexity goes up, design decisions need to be changed. The design decisions for this project were:

Simple build system - there isn't one. No gcc/yarn/webpack, or dependancies of any kind!
Simple deployment strategy - you can clone -> open the html file -> save as bookmark -> boom, webapp

# Future work
##### backend
Most obvious feature missing is server side storage, and opening it up to be multi-user, etc

##### frontend
One could add many features to the front end, like adding lifecycle features (can't delete until complete, etc), creation dates, due dates, in browser reminders via notification system. For the current scope of the exercise living with 2 way binding was ok for me, but creating a more functional, redux-like flow would be nice.

##### dev
It's arguably elegant that it's single file app - however once complexity sets in we'll want to separate concerns. Separate css, js from the html entrypoint to begin, and eventually we'll want to add in libraries and with that yarn + webpack, etc. Also, as the feature set grows the data model and render complexity may warrant using a framework du jour like react/redux.  

