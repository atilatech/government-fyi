//export default {
const ColorMap = new Map([
	['purple1', 'hsla(295, 86%, 67%, 1)'], // #E664F3
	['purple2', 'hsla(291, 76%, 55%, 1)'], // #C834E3
	['orange1', 'hsla(33, 100%, 67%, 1)'], // #FFB558
	['orange2', 'hsla(23, 100%, 59%, 1)'], // #FF7E2C
	['pink1', 'hsla(326, 100%, 63%, 1)'], // #FF43AE
	['pink2', 'hsla(337, 100%, 56%, 1)'], // #FF2076
	['yellow1', 'hsla(41, 100%, 77%, 1)'], // #FFD988
	['yellow2', 'hsla(34, 100%, 66%, 1)'], // #FFB250
	['blue1', 'hsla(205, 100%, 87%, 1)'], // #BFE4FF
	['blue2', 'hsla(210, 100%, 77%, 1)'], // #8BC5FF
  ['black', 'hsla(0, 0%, 20%, 1)'], // #323232
  ['red', 'hsla(358,100%,64%,1)'], // #FF454C
  ['gray1', 'hsla(0, 0%, 70%, 1)'],
  ['gray2', 'hsla(0, 0%, 70%, 1)'],
	['green', 'hsla(133,50%,69%,1)'],//#88D799
	['green2', 'hsla(133,50%,50%,1)'],
])

const Color = (name, deltaSaturation=0, deltaTint=0, opacity=1) => {
	if(!name) return '#000';
	const base = ColorMap.get(name);
	if(opacity === 1 && deltaTint === 0) {return base;}
	let hsl = base.split(',');
	let newSaturation = parseInt(hsl[1],10) + deltaSaturation;
	newSaturation = (newSaturation > 100) ? 100 : newSaturation;
	let newLightness = parseInt(hsl[2],10) + deltaTint;
	newLightness = (newLightness > 100) ? 100 : newLightness;
	hsl[1] = (newSaturation + '%');
	hsl[2] = (newLightness + '%');
	hsl[3] = (opacity+')');
	return hsl.join();
}

export default Color;
