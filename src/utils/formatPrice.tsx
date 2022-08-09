
export const FormatMoney = (value: number) => {
	// eslint-disable-next-line
	const numero = new Intl.NumberFormat('en-IN', {
		style: 'decimal',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(Number(value));

	const real = Number(value)?.toLocaleString('de-DE', {
		minimumFractionDigits: 2,
	});

	return real;
};