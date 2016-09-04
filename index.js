'use strict';
module.exports = (input, opts) => {
	const steuersatz = opts.s || 19;
	if(typeof input !== 'number') {
		throw new Error('Be sure you specified a JS valid Number/Float like 23.12 (no , allowed)')
	}
	const steueranteil = input * (steuersatz / 100);
	const netto = (steueranteil + input).toFixed(2)

	console.log(`Brutto: ${netto}€ (${steuersatz}% MwSt = ${steueranteil.toFixed(2)})`);
};
