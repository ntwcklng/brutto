#!/usr/bin/env node
'use strict';
const meow = require('meow');
const brutto = require('./');

const cli = meow(`
	Usage
	  $ brutto [input]

	Options
	  --steuer Anderer Steuersatz [Default: 19%]

	Examples
	  $ brutto 23,12
	  Brutto: 27,51€ (19% MwSt = 4,39€)
	  $ brutto 23,12 --tax 7
	  Brutto: 24,73€ (7% MwSt = 1,61€)
`, {
	alias: {
		s: 'steuer'
	}
});

brutto(cli.input[0], cli.flags);
