# Award Calendar

Powered by [spreadsheets.latimes.com](http://spreadsheets.latimes.com), *Awards Calendar* pulls in the JSON from any LAT spreadsheet and spits them back out via a template.

See the spreadsheet here: [awards spreadsheet](http://spreadsheets.latimes.com/awards-calendar/)
*You'll need to go into databank to edit the content*

## Installation
- Node
- NPM (now included in node package)
- Grunt
- Bower

Use binaries on the official node site - [nodejs.org](http://nodejs.org/download/) or...

On Mac OS X (with homebrew):
    brew install node

Linux:
    sudo apt-get node

Once Node and NPM are installed, download the grunt command-line tool and bower globally.
    npm install -g grunt-cli bower

## Dependencies
The Awards Calendar uses the following JS libs:
- Handlebars
- Moment
- jQuery

These will all be installed via bower

## Time for some action

1. clone the repo
    git clone git@github.com:datadesk/awards-calendar.git

2. Hop into the repo and download the dependecies
    cd awards-calendar
    npm install && bower install

3. Peep your handy work
    grunt server
