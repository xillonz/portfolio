module.exports = {
	darkMode: 'class',

	content: [
		'./resources/**/*.antlers.html',
		'./resources/**/*.antlers.php',
		'./resources/**/*.blade.php',
		'./resources/**/*.vue',
		'./content/**/*.md'
	],
	theme: {
		extend: {
			borderRadius: {
				'4xl': '20px',
				'5xl': '35px',
			},
			fontSize: {
				'26xl': '26px',
				'15xl': '15px',
			},
			height: {
				'450': '450px',
				'26': '26px',
			},
			width: {
				'850': '850px',
				'560': '560px',
			},
			padding: {
				'50': '50px',
			},
			zIndex: {
				'100': '22222222222222',
			},
			colors: {
				'color-810': "rgb(248 251 251)",
				'dark-tblack': '#111111',
				'dark-tblack1': '#1d1d1d',
				'dark-black2': '#323232',
				'light-gray': '#F3F6F6',
				'dark-gray-2': '#A6A6A6',
				'dark-gray-3': '#212425',
				'gary-4': '#E3E3E3',
				'dark-gray-4': '#3D3A3A',
				'gary-5': '#44566C',
				'gray-6': '#F8FBFB',
				'dark-gray-6': '#0D0D0D',
				'gary-7': '#B5B5B5',
				'dark-gray-7': '#333333',
				'gray-8': '#edf2f2',
				'dark-gray-8': '#1c1c1c',
				'gray-9': '#fcf4ff',
				'gray-10': '#fff3fc',
				'gray-2': '#7B7B7B',
				'brand-orange': '#FA5252',
				'brand-red': '#DD2476',
				'brand-red-2': '#fa5252ef',
				// ...
			  },
			backgroundImage: {
				'homeBg': "url('../../public/assets/bg.jpg')",
				'close-light': "url('../../public/assets/closelight.jpg')",
				'previewBg': "url('../../public/assets/previewbg.png')",
				'homeTwoBg-dark': "url('../../public/assets/bgtwo.jpg')",
				'homeBg-dark': "url('../../public/background/bg-dark.jpg')",
				'close-dark': "url('../../public/assets/closedark.png')",
			},
			fontFamily: {
				'sans': ['Poppins', 'Arial', 'sans-serif']
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
