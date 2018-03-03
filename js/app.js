// My resume objects
const bio = {
	name: "Harikaran",
	role: "Front-end web developer",
	contacts: {
		mobile: "+94779960595",
		email: "harikaran797@gmail.com",
		github: "hari343",
		location: "Dehiwela, Sri Lanka"
	},
	welcomeMessage: "Hi, I'm Hari. I'm fond of computers. I like programming a lot. I like electronics as well.",
	biopic: "images/Harry.jpg",
	skills: ["HTML5", "CSS3", "ES6", "React", "Knockout.js","Jasmine.js", "jQuery", "Bootstrap"],
	display: function() {
		let formattedName = `<h1 id="name">${this.name}</h1>`;
		let formattedRole = `<span class="hrole">${this.role}</span><hr>`;
		let formattedBiopic = `<img src="${this.biopic}" class="biopic myImage">`;
		let formattedWM = `<span class="welcome-message">${this.welcomeMessage}</span>`;
		$('#header').prepend(formattedName + formattedRole);
		$('#header').append(formattedBiopic + formattedWM);
		// Append skills (if there is any)
		if (this.skills.length) {
			$('#header').append(`<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>`);
			this.skills.forEach(skill => {
				let formattedSkill = `<li class="flex-item"><span class="white-text">${skill}</span></li>`;
				$('#skills').append(formattedSkill);
			});
		}
		// Append contact details
		let formattedMobile = `<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">${this.contacts.mobile}</span></li>`;
		let formattedEmail = `<li class="flex-item"><span class="orange-text">email</span><span class="white-text">${this.contacts.email}</span></li>`;
		let formattedGithub = `<li class="flex-item"><span class="orange-text">github</span><span class="white-text">${this.contacts.github}</span></li>`;
		let formattedLocation = `<li class="flex-item"><span class="orange-text">location</span><span class="white-text">${this.contacts.location}</span></li>`;
		$('#topContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedLocation); 
		$('#footerContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);		
	}
}

const work = {
	jobs: [],
	display: function() {
		this.jobs.forEach(job => {
			$('#workExperience').append(`<div class="work-entry"></div>`);
			let formattedEmployer = `<a href="#">${job.employer}`;
			let formattedJobTitle = ` - ${job.title}</a>`;
			let formattedDates = `<div class="date-text">${job.dates}</div>`;
			let formattedLocation = `<div class="location-text">${job.location}</div>`;
			let formattedDescription = `<p><br>${job.description}</p>`
			$('.work-entry:last').append(formattedEmployer + formattedJobTitle + formattedDates + formattedLocation + formattedDescription);
		});
	}};

const projects = {
	projects: [{
		title: "Animal Trading Cards",
		url: "https://hari343.github.io/animal_trading_cards/", 
        dates: "Oct 2017",
        description: "This small card describes some characteristics of Jelly fish.",
        images: ["images/jelly.jpg"]
	}, {
		title: "CSS Calculator",
		url:"https://hari343.github.io/css_calculator/",
		dates:"Feb 2018",
		description: "\"Design\" is very important for a front-end developer. CSS calculator has a nice flat design & smooth animations. I\'ve designed the CSS calculator to be fully responsive so that it looks beautiful even in the relatively small display of a smartphone.",
		images: ["images/calc.png"]
	}, {
		title: "This!",
		url: "#", 
        dates: "Oct 2017",
        description: "My resume. This fully responsive resume makes extensive use of the JavaScript template literals & jQuery's DOM manipulation methods. I have also implemented the Google Maps API to show the places I've lived and worked at the bottom of the page.",
        images: ["images/resume.png"]
	}, {
		title: "Frogger clone",
		url: "https://hari343.github.io/frogger_clone/", 
        dates: "Nov 2017 ",
        description: "This is a Frogger clone I've developed using vanilla JS. This game also has some cool background music and sound effects.",
        images: ["images/arcade.png"]
	}, {
		title: "My Neighborhood",
		url: "https://hari343.github.io/my_neighborhood/",
		dates: "Jan 2018",
		description: "This app marks some popular clothing stores in my neighborhood. Knockout.js library is used for this project. I've also used Google Maps API for the map. Foursquare API is used to pull some additional details about the stores.",
		images: ["images/neighborhood.png"]
	}, {
		title: "Feed-reader Tester",
		url: "https://hari343.github.io/feed_tester/",
		dates: "Jan 2018",
		description: "This Jasmine based project tests a simple RSS feed reader app provided by Udacity to check whether its working as it should.",
		images: ["images/jasmine.png"]
	}],
	
	display: function() {
		this.projects.forEach(project => {
			$('#projects').append('<div class="project-entry"></div>');
			let formattedTitle = `<a class="title" href="${project.url}">${project.title}</a>`;
			let formattedDates = `<div class="date-text">${project.dates}</div>`;
			let formattedDescription = `<p class="des"><br>${project.description}</p>`;
			$('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription);
			project.images.forEach(img => {
				let formattedImage = `<img class="project-img" src="${img}">`;
				$('.project-entry:last').append(formattedImage);	
			});
		});
	}
}

const education = {
	schools: [{
		name: "Vavuniya Tamil Madya Maha Vidyalayam",
		location: "Vavuniya, Sri Lanka",
		degree: "High school",
		url: "http://www.vtmmv.sch.lk",
		dates: "2011",
		majors: ["G.C.E. A/L"]
	}, {
		name: "University of Moratuwa",
		location: "Moratuwa, Sri Lanka",
		url: "http://www.mrt.ac.lk",
		degree: "B.Sc in Chemical & Process Engineering",
		dates: "2017",
		majors: ["Polymer engineering"]
	}],
	onlineCourses: [{
		title: "Front-end Web Developer Nanodegree",
		school: "Udacity",
		dates: "Jan 2018",
		url: "https://www.udacity.com"
	}],
	display: function() {
		this.schools.forEach(school => {
			$('#education').append(`<div class="education-entry"></div>`);
			let formattedName = `<a href="${school.url}">${school.name}`;
			let formattedDegree = ` -- ${school.degree}</a>`;
			let formattedDates = `<div class="date-text">${school.dates}</div>`;
			let formattedLocation = `<div class="location-text">${school.location}</div>`;
			$('.education-entry:last').append(formattedName + formattedDegree + formattedDates + formattedLocation);
			school.majors.forEach(major => {
				let formattedMajor = `<em><br>Major: ${major}</em>`;
				$('.education-entry:last').append(formattedMajor);
			});
		});
		this.onlineCourses.forEach(course => {
			$('#education').append(`<div class="education-entry"></div>`);
			let formattedTitle = `<a href="${course.url}">${course.title}`;
			let formattedSchool = ` - ${course.school}</a>`;
			let formattedDates = `<div class="date-text">${course.dates}</div>`;
			let formattedURL = `<br><a href="${course.url}">Website</a>`;
			$('.education-entry:last').append(formattedTitle + formattedSchool + formattedDates + formattedURL);
		});
		
	} 

};

// Time to render the resume objects
bio.display();
work.display();
education.display();
projects.display();

// Now for the Google Map. This map will show the locations where I've worked and studied.
let map;

function initializeMap() {
	let locations;
	let mapOptions = {
		disableDefaultUI: true
	};

	map = new google.maps.Map(document.getElementById('map'), mapOptions);

	// Function to filter locations from the above objects
	function locationFinder() {
	    let locations = [];
	    locations.push(bio.contacts.location);
	    
	    education.schools.forEach(school => {
	      locations.push(school.location);
	    });
	 
	    work.jobs.forEach(job => {
	      locations.push(job.location);
	    });

	    return locations;
	}

	// I'm using Google Places to get the exact latitude and longitude of the locations in the locations array.
	function createMapMarker(placeData) {
	    let lat = placeData.geometry.location.lat();  
	    let lng = placeData.geometry.location.lng();  
	    let name = placeData.formatted_address;   
	    let bounds = window.mapBounds;            

	    let marker = new google.maps.Marker({
	      map: map,
	      position: placeData.geometry.location,
	      animation: google.maps.Animation.DROP,
	      title: name
	    });
 
	    let infoWindow = new google.maps.InfoWindow({
	      content: name
	    });

	    google.maps.event.addListener(marker, 'click', () => {
	      map.panTo(marker.position);
	      marker.setAnimation(google.maps.Animation.BOUNCE);
	        setTimeout(() => {
	           marker.setAnimation(null);
	        }, 2100);
	    });

	    bounds.extend(new google.maps.LatLng(lat, lng));
	    map.fitBounds(bounds);
	    map.setCenter(bounds.getCenter());
	}

	function callback(results, status) {
	    if (status == google.maps.places.PlacesServiceStatus.OK) {
	      createMapMarker(results[0]);
	    }
	}

	function pinPoster(locations) {
	    let service = new google.maps.places.PlacesService(map);

	    locations.forEach(place => {
	      let request = {
	        query: place
	      };
	      service.textSearch(request, callback);
	    });
	}

	window.mapBounds = new google.maps.LatLngBounds();
	locations = locationFinder();
	pinPoster(locations);

}

window.addEventListener('load', initializeMap);

window.addEventListener('resize', e => {
  map.fitBounds(mapBounds);
});

$('#mapDiv').append(`<div id="map"></div>`);
















