//Import Module
const db = require('./models/db.js');
const Account= require('./models/AccountModel.js');
const Activity= require('./models/ActivityModel.js');
const Comment= require('./models/CommentModel.js');
const Itinerary= require('./models/ItineraryModel.js');
const Memory= require('./models/MemoryModel.js');
const Review= require('./models/ReviewModel.js');
const data = {
	addData: function()
	{
		//Insert Users
		var users = [
			{

				fname:'Maria Patricia',
				lname: 'Javier',
				email: 'mpgjavier@gmail.com',
				username: 'Tricia',
				hash: 'da16e3f0225233aaad307e4be0d1af8dc480798da9a3484d5074ed000e92bb02',
				salt: 'z+Ih6dYaBNOjfvfGSI2wAaMtpvDw52iluC807OytkkNVZBTNl+o1M8uXniorB7grMjxS8W7+ec4seOvDhj6hIQ==',
				age: 20,
				address: 'Cainta, Rizal',
				birthday: '1999-12-28',
				occupation: 'Student',
				passport_id: '12345'
			},
			{

				fname:'Judy May',
				lname: 'Mendoza',
				email: 'judy_may_mendoza@dlsu.edu.ph',
				username: 'Mao',
				hash: '3e53e46273fac801c40fe4665360056acbf66158ce3fb6d5eb9212baf9632628',
				salt: 'z+Ih6dYaBNOjfvfGSI2wAaMtpvDw52iluC807OytkkNVZBTNl+o1M8uXniorB7grMjxS8W7+ec4seOvDhj6hIQ==',
				age: 20,
				address: 'Batangas City, Batangas',
				birthday: '1999-05-10',
				occupation: 'Student',
				passport_id: ''
			},
			{

				fname:'Rhon Christopher',
				lname: 'Infante',
				email: 'rhon_infante@dlsu.edu.ph',
				username: 'Rhon',
				hash: 'a4c773f393510bb2419502ec0caa9d7951a1df7d2020cfba5d7c7daa6801ac4b',
				salt: 'Gz0kFDnOHkgh/xvw9gil0/ssMLpeZ1/bZSn2WOmdq3j5Dc0yLyBou/bB+6ALMNtc/KNYBaqadcy3o2dA5acU2g==',
				age: 20,
				address: 'Cainta, Rizal',
				birthday: '1999-11-20',
				occupation: 'Student',
				passport_id: ''
			},
			{

				fname:'Elderwell',
				lname: 'Ramos',
				email: 'vhinoramos@gmail.com',
				username: 'Vhino',
				hash: '8ad653d3168e80d3c24658a000dde3ec1f52eae0f2302c1dbeb618b61707ecef',
				salt: 'gRmKce6ocVAzmMkXwJJ1txCHgh/1ecsTfIbE+9/HwY+p7u0rLWyBxeG4UukbpXoYusVuab+hj6ex8PC7TGkF3g==',
				age: 20,
				address: 'Cainta, Rizal',
				birthday: '1999-11-20',
				occupation: 'Student',
				passport_id: ''
			},
			{

				fname:'Justine',
				lname: 'Fernandez',
				email: 'justfernandez@gmail.com',
				username: 'Justine',
				hash: '16eab8a9f71b10afe1c56b79247d81b744c734078a60f63e17f0309689140a42',
				salt: 'QeXagLcORttvWJnovXO3zokqo/vOjHyNWABg++qRSvwWMLh7XomRpoEmsERqWxLXzsAbGIx/fnLPZQx8BJNm8Q==',
				age: 19,
				address: 'Chinatown',
				birthday: '2000-09-08',
				occupation: 'Student',
				passport_id: ''
			},
			{

				fname:'Jed',
				lname: 'Tan',
				email: 'jedtan@gmail.com',
				username: 'RealJed',
				hash: '4a9e74f1d4f637e43946dfba162d748245d068e9598c2d14d141162f2162eabe',
				salt: 'jJA7iYxS8pPjEu7d2mCw6poTaSBUpAgrjOSJSZYWj/I5N3H3iu19bibc7QARQ16NAe4Av31hojmmysd3C/T3YQ==',
				age: 19,
				address: 'Caloocan',
				birthday: '2001-02-05',
				occupation: 'Student',
				passport_id: ''
			},
			{

				fname:'Kristal',
				lname: 'Ambrosio',
				email: 'krisambrosio@gmail.com',
				username: '+_xXTalaXx_+',
				hash: '7c7aa94fe8798bd6fde7867ce821a4186b73fc20b62ad900d43c777220947b02',
				salt: '27KBnMzfhO30K/n2B14x0A/gY7dDYrniI4Hkos062U8dAgRmMCxrqGstBhZ0bOTFIJbquseHO5q993INp0JMbQ==',
				age: 21,
				address: 'Dasmarinas, Cavite',
				birthday: '1999-02-12',
				occupation: 'Student',
				passport_id: ''
			}
		];

		db.insertMany(Account, users);

		//Insert memories of users
		var memories = [
			{
				acct_email: 'mpgjavier@gmail.com',
				title: 'New Year in New York',
				description: 'Im so happy to experience something new this 2020',
				sdate: '12/30/2019',
				edate: '01/02/2020',
				totalExp: 'USD1000',
				photoAlbum: ['img/NY.jpg']
			},

			{
				acct_email: 'justfernandez@gmail.com',
				title: 'New Year in New York',
				description: 'Im so happy to experience something new this 2020',
				sdate: '12/30/2019',
				edate: '01/02/2020',
				totalExp: 'USD1000',
				photoAlbum: ['img/NY.jpg']
			},

			{
				acct_email: 'mpgjavier@gmail.com',
				title: 'Lunch Break in Tagaytay',
				description: 'Our prof didnt come to class today so my friends & I had lunch in Tagaytay.',
				sdate: '02/05/2020',
				edate: '02/05/2020',
				totalExp: 'PHP1000',
				photoAlbum: ['img/tagaytay.jpg']
			},

			{
				acct_email: 'mpgjavier@gmail.com',
				title: 'Under the Sea!',
				description: 'My family and I went to Palawan to sea (heh) the sunken ships.',
				sdate: '05/05/2019',
				edate: '05/07/2019',
				totalExp: 'PHP7000',
			},

			{
				acct_email: 'rhon_infante@dlsu.edu.ph',
				title: 'Christmas in Singapore',
				description: 'I had a great time with my family celebrating Christmas in Singapore lah',
				sdate: '12/25/2019',
				edate: '12/25/2019',
				totalExp: 'SGD500',
				photoAlbum: ['img/sg.png']
			},

			{
				acct_email: 'rhon_infante@dlsu.edu.ph',
				title: 'Taiwan Bubble Tea',
				description: 'There are so many bubble tea shops in Taiwan. I dont want to leave anymore!',
				sdate: '12/01/2019',
				edate: '12/01/2019',
				totalExp: 'TWD600',
			},

			{
				acct_email: 'rhon_infante@dlsu.edu.ph',
				title: 'Mommae I went to UK',
				description: 'There was a seat sale for a flight to London so I bought a ticket and flew the next day.',
				sdate: '11/19/2019',
				edate: '11/20/2019',
				totalExp: 'GBP650',
				photoAlbum: ['img/london.jpg']
			},

			{
				acct_email: 'jedtan@gmail.com',
				title: 'Mommae I went to UK',
				description: 'There was a seat sale for a flight to London so I bought a ticket and flew the next day.',
				sdate: '11/19/2019',
				edate: '11/20/2019',
				totalExp: 'GBP650',
				photoAlbum: ['img/london.jpg']
			},

			{
				acct_email: 'vhinoramos@gmail.com',
				title: 'UK Trip',
				description: 'I went to Taytay, Rizal to buy me some UK-UK #sustainable',
				sdate: '11/19/2019',
				edate: '11/20/2019',
				totalExp: 'PHP1000',
			},

			{
				acct_email: 'vhinoramos@gmail.com',
				title: 'USS Japan',
				description: 'I want to drink all the butterbeer!!!!!!',
				sdate: '02/19/2020',
				edate: '02/19/2020',
				totalExp: 'JPY10000',
				photoAlbum: ['img/japan.jpg']
			},

			{
				acct_email: 'vhinoramos@gmail.com',
				title: 'Looking for Whitewalkers',
				description: 'I dont know why theyre all running away from me. Do I look that dead? Currently in Jokulsarlon Glacial Lagoon, Iceland',
				sdate: '01/06/2020',
				edate: '01/07/2020',
				totalExp: 'ISK20000',
				photoAlbum: ['img/iceland.jpg']
			},

			{
				acct_email: 'judy_may_mendoza@dlsu.edu.ph',
				title: 'Kotah Kinabalu Hiking',
				description: 'We went on a hiking trip on the mountains of Kotah Kinabalu. It was especially fun when our tour guide was almost attacked by a wild boar',
				sdate: '11/15/2018',
				edate: '11/15/2018',
				totalExp: 'RM250',
			},

			{
				acct_email: 'judy_may_mendoza@dlsu.edu.ph',
				title: 'Relaxing Trip!!!',
				description: 'Just a rest day for us from all the adventures that we had. We visited a hot spring to relax our sore muscles!',
				sdate: '11/18/2018',
				edate: '11/18/2018',
				totalExp: 'RM500',
				photoAlbum: ['img/spring.jpg']
			},

			{
				acct_email: 'judy_may_mendoza@dlsu.edu.ph',
				title: 'P Sherman 42 Wallaby Way Sydney',
				description: 'Dory, Im here!!',
				sdate: '11/22/2018',
				edate: '11/25/2018',
				totalExp: 'AUD1000',
				photoAlbum: ['img/sydney.jpg']
			},
		];

		db.insertMany(Memory, memories);

		var itineraries = [
			{
				acct_email: "mpgjavier@gmail.com",
				it_id: 87654321,
				it_name : 'JPN Osaka Roundtrip',
				it_sdate : '06/12/2018',
				it_edate : '06/22/2018',
				it_location : 'Osaka, Japan'
			},
			{
				acct_email: "mpgjavier@gmail.com",
				it_name: 'ANIMO SQUAD TEAM BUILDING',
				it_id: 12345678,
				it_sdate: '02/23/2020',
				it_edate: '04/20/2020',
				it_location: 'Zambales, Philippines'
			},
			{
				acct_email: "mpgjavier@gmail.com",
				it_name: 'Pico De Loro Trip',
				it_id: 11892019,
				it_sdate: '09/10/2019',
				it_edate: '09/11/2019',
				it_location: 'Batangas, Philippines'
			},
			{
				acct_email: "judy_may_mendoza@dlsu.edu.ph",
				it_name: 'Henlo Australia',
				it_id: 13572468,
				it_sdate: '10/10/2020',
				it_edate: '10/15/2020',
				it_location: 'Melbourne, Australia'
			},
			{
				acct_email: "rhon_infante@dlsu.edu.ph",
				it_name: 'Singapore Nanaman',
				it_id: 24681357,
				it_sdate: '09/09/2020',
				it_edate: '09/12/2020',
				it_location: 'Tampines, Singapore'
			},
			{
				acct_email :"justfernandez@gmail.com",
				it_name: 'Mt Pinatubo Hiking',
				it_id: 41253401,
				it_sdate: '01/15/2020',
				it_edate: '01/15/2020',
				it_location: 'Mt Pinatubo'
			},
			{
				acct_email : "jedtan@gmail.com",
				it_name: 'Bisita Iglesia',
				it_id: 8609943,
				it_sdate: '10/15/2019',
				it_edate: '10/15/2019',
				it_location: 'Manila'
			},
			{
				acct_email : "vhinoramos@gmail.com",
				it_name: 'Hongkong Krung Krung',
				it_id: 18273645,
				it_sdate: '06/11/2019',
				it_edate: '06/15/2019',
				it_location: 'Tsuen Wan, Hongkong'
			}

		];

		db.insertMany(Itinerary, itineraries);

		var activities = [
			{
				it_id: 12345678,
				name: 'To Crystal Beach',
				date: 'April 20, 2020',
				stime: '06:30',
				etime: '10:30',
				cost: 'Php2500/person',
				cname: 'Tiger Espina',
				cnum: '+63 912 345 6789',
				transpo: 'DLSU Bus'
			},
			{
				it_id: 12345678,
				name: 'Tent Set-Up',
				date: 'April 20, 2020',
				stime: '1:00',
				etime: '2:00',
				transpo: 'on foot'
			},
			{
				it_id: 12345678,
				name: 'Start of Team Building Activities',
				date: 'April 20, 2020',
				stime: '2:30',
				etime: '6:30'
			},
			{
				it_id: 12345678,
				name: 'Dinner in Beach View',
				date: 'April 20, 2020',
				stime: '7:00',
				etime: '9:00',
				cost: 'Php500/person'
			},
			{
				it_id: 12345678,
				name: 'Breakfast in the Patio',
				date: 'April 21, 2020',
				stime: '8:00',
				etime: '9:30',
				cost: 'Php200/person'
			},
			{
				it_id: 12345678,
				name: 'Team Building Activities Day 2',
				date: 'April 21, 2020',
				stime: '10:00',
				etime: '1:00'
			},
			{
				it_id: 12345678,
				name: 'Boodle Fight Lunch',
				date: 'April 21, 2020',
				stime: '1:30',
				etime: '3:00'
			},
			{
				it_id: 12345678,
				name: 'Free Time',
				date: 'April 21, 2020',
				stime: '3:30',
				etime: '8:00'
			},
			{
				it_id: 12345678,
				name: 'Dinner & Night Life',
				date: 'April 21, 2020',
				stime: '8:30',
				etime: '10:00',
				cost: 'Php500/person'
			},
			{
				it_id: 12345678,
				name: 'Breakfast in the Patio',
				date: 'April 22, 2020',
				stime: '8:00',
				etime: '9:30',
				cost: 'Php200/person'
			},
			{
				it_id: 12345678,
				name: 'Back to DLSU Manila',
				date: 'April 22, 2020',
				stime: '10:00',
				etime: '1:00',
				cname: 'Tiger Espina',
				cnum: '+63 912 345 6789',
				transpo: 'DLSU Bus'
			},
			{
				it_id: 11892019,
				name: 'Travel to Pico',
				date: 'September 10, 2019',
				stime: '5:00',
				etime: '9:00',
				cost: 'Php700/person',
				cname: 'Admin',
				cnum: '+63 987 654 3210',
				transpo: 'Rented Van'
			},
			{
				it_id: 11892019,
				name: 'Check-In',
				date: 'September 10, 2019',
				stime: '9:00',
				etime: '10:00',
				cost: 'Php1500/person',
				cname: 'Admin',
				cnum: '+63 987 654 3210',
				transpo: 'shuttle'
			},
			{
				it_id: 11892019,
				name: 'Lunch',
				date: 'September 10, 2019',
				stime: '12:00',
				etime: '2:00',
				cost: 'Php250/person'
			},
			{
				it_id: 11892019,
				name: 'Leisure Time',
				date: 'September 10, 2019',
				stime: '2:00',
				etime: '12:00'
			},
			{
				it_id: 11892019,
				name: 'Night Life',
				date: 'September 11, 2019',
				stime: '12:00',
				etime: '4:00',
				transpo: 'shuttle'
			},
			{
				it_id: 11892019,
				name: 'Travel to Manila',
				date: 'September 11, 2019',
				stime: '5:00',
				etime: '9:00',
				cost: 'Php700/person',
				cname: 'Admin',
				cnum: '+63 987 654 3210',
				transpo: 'Rented Van'
			},
			{
				it_id: 87654321,
				name: 'Visit all Temples',
				date: 'June 12, 2018',
				cost: '¥7000/person',
				cname: 'Arigato',
				cnum: '+63 987 654 3210',
				transpo: 'Bullet Train'
			},
			{
				it_id: 87654321,
				name: 'Ramen Hopping',
				date: 'June 13, 2018',
				cost: '¥2500/person',
				cname: 'Onegaishimasu',
				cnum: '+63 987 654 3210',
				transpo: 'on foot'
			},
			{
				it_id: 87654321,
				name: 'SHOPPING SHOPPING',
				date: 'June 14, 2018',
				cost: '¥20000/person',
				cname: 'Yehes Talap',
				cnum: '+63 987 654 3210',
				transpo: 'Commute'
			},
			{
				it_id: 87654321,
				name: 'Stay at Home',
				date: 'June 15, 2018',
				cost: '¥000000/person',
				cname: 'La Na Arep',
				cnum: '+63 987 654 3210'
			},
			{
				it_id: 13572468,
				name: 'Visit all Parks',
				date: 'October 10, 2020',
				cost: 'AUD7000/person',
				cname: 'Maria',
				cnum: '+63 987 654 3210',
				transpo: 'Train'
			},
			{
				it_id: 13572468,
				name: 'Bar Hopping',
				date: 'October 11, 2020',
				cost: 'AUD2500/person',
				cname: 'Christopher',
				cnum: '+63 987 654 3210',
				transpo: 'on foot'
			},
			{
				it_id: 13572468,
				name: 'SHOPPING SHOPPING',
				date: 'October 12, 2020',
				cost: 'AUD20000/person',
				cname: 'Yehes Talap',
				cnum: '+63 987 654 3210',
				transpo: 'Commute'
			},
			{
				it_id: 13572468,
				name: 'Stay at Home',
				date: 'October 13, 2020',
				cost: 'AUD000000/person',
				cname: 'La Na Arep',
				cnum: '+63 987 654 3210'
			},
			{
				it_id: 18273645,
				name: 'Visit all Parks',
				date: 'June 11, 2020',
				cost: 'HK$7000/person',
				cname: 'Maria',
				cnum: '+63 987 654 3210',
				transpo: 'Train'
			},
			{
				it_id: 18273645,
				name: 'Bar Hopping',
				date: 'June 12, 2020',
				cost: 'HK$2500/person',
				cname: 'Christopher',
				cnum: '+63 987 654 3210',
				transpo: 'on foot'
			},
			{
				it_id: 18273645,
				name: 'SHOPPING SHOPPING',
				date: 'June 13, 2020',
				cost: 'HK$20000/person',
				cname: 'Yehes Talap',
				cnum: '+63 987 654 3210',
				transpo: 'Commute'
			},
			{
				it_id: 18273645,
				name: 'Stay at Home',
				date: 'June 14, 2020',
				cost: 'HK$000000/person',
				cname: 'La Na Arep',
				cnum: '+63 987 654 3210'
			},
			{
				it_id: 24681357,
				name: 'Visit all Museums',
				date: 'September 9, 2020',
				cost: 'S$7000/person',
				cname: 'Maymay',
				cnum: '+63 987 654 3210',
				transpo: 'Train'
			},
			{
				it_id: 24681357,
				name: 'Carshow Hopping',
				date: 'September 10, 2020',
				cost: 'S$2500/person',
				cname: 'Edriane',
				cnum: '+63 987 654 3210',
				transpo: 'on foot'
			},
			{
				it_id: 24681357,
				name: 'SHOPPING SHOPPING',
				date: 'September 11, 2020',
				cost: 'S$20000/person',
				cname: 'Yehes Talap',
				cnum: '+63 987 654 3210',
				transpo: 'Commute'
			},
			{
				it_id: 24681357,
				name: 'Stay at Home',
				date: 'September 12, 2020',
				cost: 'S$000000/person',
				cname: 'La Na Arep',
				cnum: '+63 987 654 3210'
			},
			{
				it_id: 41253401,
				name: 'Registration',
				date: 'January 15, 2020',
				stime: '06:30',
				etime: '07:00',
				transpo: 'Tricycle',
				cost: 'Php900/person',
				cname: 'Kuya Wendel',
				cnum: '+63 919 608 4313'
			},
			{
				it_id: 41253401,
				name: '4x4 Ride',
				date: 'January 15, 2020',
				stime: '07:00',
				etime: '08:00',
				transpo: 'on foot',
				cost: 'Php750/person'
			},
			{
				it_id: 41253401,
				name: 'Start of trekking',
				date: 'January 15, 2020',
				stime: '08:00',
				transpo: 'on foot'
			},
			{
				it_id: 41253401,
				name: 'Lunch at the Crater',
				date: 'January 15, 2020',
				stime: '12:00',
				etime: '13:00',
				cost: 'Php250/person'
			},
			{
				it_id: 41253401,
				name: 'Start of Descencion',
				date: 'January 15, 2020',
				stime: '13:30'
			},
			{
				it_id: 41253401,
				name: '4x4 Ride',
				date: 'January 15, 2020',
				stime: '16:00',
				etime: '17:00',
				cost: 'Php750/person',
				transpo: 'on foot'
			},
			{
				it_id: 41253401,
				name: 'Bus to home',
				date: 'January 15, 2020',
				stime: '18:00',
				etime: '21:00',
				cost: 'Php350/person',
				transpo: 'Bus'
			},
			{
				it_id: 8609943,
				name: 'Parish of Our Lady of the Abandoned',
				date: 'October 15, 2019',
				stime: '09:30',
				etime: '10:30',
				cost: 'Php16/person',
				address: "Pedro Gil St, Santa Ana, Manila, Metro Manila",
				transpo: 'Jeep'
			},
			{
				it_id: 8609943,
				name: 'Our Lady of Remedies Parish Church',
				date: 'October 15, 2019',
				stime: '10:45',
				etime: '11:45',
				cost: 'Php20/person',
				address: "2000 M. H. Del Pilar St, Malate, Manila, 1004 Metro Manila",
				transpo: 'Jeep'
			},
			{
				it_id: 8609943,
				name: 'Lunch at Instramuros',
				date: 'October 15, 2019',
				stime: '12:00',
				etime: '12:30',
				cost: 'Php200/person',
				address: "1002 Metro Manila",
				transpo: 'Jeep'
			},
			{
				it_id: 8609943,
				name: 'San Agustin Church',
				date: 'October 15, 2019',
				stime: '12:45',
				etime: '13:45',
				address: "General Luna St, Manila, 1002 Metro Manila",
				transpo: 'on foot'
			},
			{
				it_id: 8609943,
				name: 'Manila Metropolitan Cathedral-Basilica',
				date: 'October 15, 2019',
				stime: '14:00',
				etime: '15:00',
				address: "Beaterio St, Cabildo St, Intramuros, Manila, 1002 Metro Manila",
				transpo: 'on foot'
			}
		];

		db.insertMany(Activity, activities);

		var reviews = [
			{
				acct_email: "justfernandez@gmail.com",
				it_id: 41253401,
				date: "January 16, 2020",
				time: "17:15",
				content: "This itinerary is perfect for anyone who loves mother nature and a good exercise." +
				"The number of tourists are not overcrowded during this time of the year, and our tour guide is very polite!" +
				"Might revisit this place again soon.",
				stars: 4.5
			},
			{
				acct_email: "jedtan@gmail.com",
				it_id: 8609943,
				date: "October 16, 2019",
				time: "08:45:15",
				content: "If you are a religious person like me, then you will love this itinerary." +
				"It is a perfect trip especially during Holy Week. Try to visit your local churches sometime, it is very fun and relaxing!",
				stars: 5
			}
		];

		db.insertMany(Review, reviews);

		var comments= [
			{
				acct_email: "vhinoramos@gmail.com",
				it_id: 41253401,
				writer: "Elderwell Ramos",
				comment: "Wow, very nice itinerary! I might visit it soon with my family. Cheers!",
				date: "January 18, 2020",
				time: "12:27"
			},
			{
				acct_email: "rhon_infante@dlsu.edu.ph",
				it_id: 41253401,
				writer: "Rhon Christopher Infante",
				comment: "I did this too and it was awesome!",
				date: "January 20, 2020",
				time: "05:35"
			},
			{
				acct_email: "krisambrosio@gmail.com",
				it_id: 8609943,
				writer: "Kristal Ambrosio",
				comment: "I did this before our exam so that I may pass :)",
				date: "December 16, 2019",
				time: "18:53"
			},
			{
				acct_email: "rhon_infante@dlsu.edu.ph",
				it_id: 8609943,
				writer: "Rhon Christopher Infante",
				comment: "This inspired me to become a priest",
				date: "November 05, 2019",
				time: "18:53"
			},
		];

		db.insertMany(Comment, comments);
	}
}

module.exports = data;

