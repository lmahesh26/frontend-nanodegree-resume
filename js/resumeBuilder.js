//work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.
//projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.
//bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.
//education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.
var work = {
    "jobs": [{
        "employer": "Verimatrix Inc.",
        "title": "Software Fulfilment Intern",
        "location": "San Diego, CA",
        "dates worked": "Oct 13 to Dec 14",
        "description": "Worked on salesforce"
    }, {
        "employer": "San Diego State Univeristy",
        "title": "Student Frondesk Assistance",
        "location": "Student Computing Center",
        "dates worked": "Aug13 to Oct13",
        "description": "Worked as a front desk assistant helping with student issues"
    }]
};
work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var emplr = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmplrTitle = emplr + title;
        $(".work-entry:last").append(formattedEmplrTitle);

        var dtes = HTMLworkDates.replace("%data%", work.jobs[job]["dates worked"]);
        $(".work-entry:last").append(dtes);

        var loc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(loc);

        var desc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(desc);
    }
};


var projects = {
    "projects": [{
        "title": "License Automation",
        "dates worked": "Oct14-Dec14",
        "description": "Worked on automating license generation",
        "images": [
            "images/project.jpg", "images/passport.jpg"
        ]
    }]
};
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var tits = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(tits);
        var dat = HTMLprojectDates.replace("%data%", projects.projects[project]["dates worked"]);
        $(".project-entry:last").append(dat);
        var des = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(des);
        for (var imash = 0; imash < projects.projects[project].images.length; imash++) {
            var im = HTMLprojectImage.replace("%data%", projects.projects[project].images[imash]);
            $(".project-entry:last").append(im);
        }
    }
};

var bio = {
    "name": "Mahesh Lakkaraju",
    "role": "Salesforce Developer",
    "contacts": {
        "mobile": "6197391897",
        "email": "lmahesh26@gmail.com",
        "github": "lmahesh26",
        "twitter": "lmahesh33",
        "location": "San Diego, CA"
    },
    "welcomeMessage": "Hi, I am a Salesforce Developer working at Verimatrix Inc.",
    "skills": [
        "JAVA", "Salesforce Apex", "Javascript"
    ]

};
bio.display = function() {
    var hrole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(hrole);
    var fname = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(fname);
    var wmsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(wmsg);
    var pic = HTMLbioPic.replace("%data%", "images/passport.jpg")
    $("#header").append(pic);
    var mbl = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(mbl);
    var eml = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(eml);
    var twt = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(twt);
    var gth = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(gth);
    var loc = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(loc);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};


var education = {

    "schools": [{
        "name": "San Diego State",
        "location": "San Diego, CA",
        "degree": "Masters",
        "majors": "Computer Science",
        "dates attended": "Oct14-Dec14",
        "url": "www.sdsu.edu"
    }],
    "onlinecourses": [{
        "title": "Front End developer Nanodegree",
        "school": "Udacity",
        "dates attended": "Oct14-Dec14",
        "url": "www.udacity.com"

    }]
};
education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var nm = HTMLschoolName.replace("%data%", education.schools[school].name);
        //$("#education-entry").append(nm);
        var dg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var n2 = nm + dg;
        console.log(n2);
        $(".education-entry:last").append(n2);
        var ds = HTMLschoolDates.replace("%data%", education.schools[school]["dates attended"]);
        $(".education-entry:last").append(ds);
        var lc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(lc);
        var mj = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(mj);
        var ur = HTMLonlineURL.replace("%data%", education.schools[school].url);
        $(".education-entry:last").append(ur);
    }

    $("#education").append(HTMLonlineClasses);
    for (onlinecourse in education.onlinecourses) {
        $("#education").append(HTMLschoolStart);
        var nm1 = HTMLonlineTitle.replace("%data%", education.onlinecourses[onlinecourse].title);
        //$("#education-entry").append(nm1);
        var dg1 = HTMLonlineSchool.replace("%data%", education.onlinecourses[onlinecourse].school);
        var n1 = nm1 + dg1;
        $(".education-entry:last").append(n1);
        var ds1 = HTMLonlineDates.replace("%data%", education.onlinecourses[onlinecourse]["dates attended"]);
        $(".education-entry:last").append(ds1);
        var mj1 = HTMLonlineURL.replace("%data%", education.onlinecourses[onlinecourse].url);
        $(".education-entry:last").append(mj1);
    }
};

bio.display();

work.display();

projects.display();

education.display();


$("#mapDiv").append(googleMap);