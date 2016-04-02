function replaceTemplate(template, replace) {
    return template.replace('%data%', replace);
}

var bio = {

    "name" : "karis",
    "role" : "Frontend Developer",
    "contacts" : {
        "mobile" : "010-1123-2311",
        "email" :  "kariskim@email.com",
        "github" : "https://github.com/kariskim" ,
        "location" : "Seoul, Korea"
    },
    "welcomeMessage" : "Welcome Everyone, Nice to meet you",
    "skills" : [
        "Java",
        "Javascript",
        "node.js",
        "d3.js",
        "mongodb"
    ],
    "biopic"  : "images/my_pic.jpg",
    "display" : function () {

        $('#header').prepend(replaceTemplate(HTMLheaderRole, this.role));
        $('#header').prepend(replaceTemplate(HTMLheaderName, this.name));

        $('#topContacts').append(replaceTemplate(HTMLmobile, this.contacts.mobile));
        $('#topContacts').append(replaceTemplate(HTMLemail, this.contacts.email));
        $('#topContacts').append(replaceTemplate(HTMLgithub, this.contacts.github));
        $('#topContacts').append(replaceTemplate(HTMLlocation, this.contacts.location));

        $('#header').append(replaceTemplate(HTMLbioPic, this.biopic));
        $('#header').append(replaceTemplate(HTMLwelcomeMsg, this.welcomeMessage));

        $('#header').append(HTMLskillsStart);

        this.skills.forEach(function (skill) {

            var oneSkill = replaceTemplate(HTMLskills, skill);
            $('ul#skills').append(oneSkill);

        });

        // add to Let's Connect
        $('#footerContacts').append(replaceTemplate(HTMLmobile, this.contacts.mobile));
        $('#footerContacts').append(replaceTemplate(HTMLemail, this.contacts.email));
        $('#footerContacts').append(replaceTemplate(HTMLgithub, this.contacts.github));
        $('#footerContacts').append(replaceTemplate(HTMLlocation, this.contacts.location));

    }
};

var work= {

    "jobs" : [
        {

            "employer" : "Samsung SDS",
            "title" : "Developer & Architect",
            "location" : "Seoul, Korea",
            "dates" : "2008 - 2016",
            "description" : "I have worked as not only a developer but also tech leader who cares team members. I am always interested in latest tech & skill and willing to try them."
        }

    ],
    "display" : function () {

        this.jobs.forEach(function (job) {

            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(replaceTemplate(HTMLworkEmployer,job.employer) + replaceTemplate(HTMLworkTitle,job.title));

            $('.work-entry:last').append(replaceTemplate(HTMLworkDates,job.dates));
            $('.work-entry:last').append(replaceTemplate(HTMLworkLocation,job.location));
            $('.work-entry:last').append(replaceTemplate(HTMLworkDescription,job.description));

        });
    }

};

// Projects
var projects = {

    "projects" : [
        {

            "title" : "Always Project",
            "dates" : "2012",
            "images" : [
                "images/project1_1.jpg",
                "images/project2_1.jpg"
            ],
            "description" : "I developed Admin Portal for Backend Server which is connected to mobile Service"
        },

        {

            "title" : "Samsung Insurance Project",
            "dates" : "2010 - 2011",
            "images" : [
                "images/project2_1.jpg",
                "images/project2_2.jpg"
            ],
            "description" : "I developed Enterprise System using Java, Spring, JSP"
        }

    ],
    "display" : function () {

        this.projects.forEach(function (project) {

            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(replaceTemplate(HTMLprojectTitle,project.title));

            $('.project-entry:last').append(replaceTemplate(HTMLprojectDates,project.dates));
            $('.project-entry:last').append(replaceTemplate(HTMLprojectDescription,project.description));

            project.images.forEach(function (oneSrc) {
                $('.project-entry:last').append(replaceTemplate(HTMLprojectImage,oneSrc));
            });
        });

    }

};

// education

var education = {

    "schools" : [

        {
            "name" : "Sungkyunkwan Univ.",
            "location" : "Suwon, Korea",
            "degree" : "BA",
            "majors" : [
                "Systems Management of Engineering"
            ],
            "dates" : 2002,
            "url" : "http://www.skku.ac.kr/"
        }

    ],

    "onlineCourses" : [

        {
            "title" : "Front-End Web Developer Nanodegree",
            "school" : "Udacity",
            "dates" : 2016,
            "url" : "https://www.udacity.com/"
        }


    ],
    "display" : function () {


        this.schools.forEach(function (school) {

            $('#education').append(HTMLschoolStart);

            $('.education-entry:last').append(replaceTemplate(HTMLschoolName,school.name) + replaceTemplate(HTMLschoolDegree,school.degree));
            $('.education-entry:last').append(replaceTemplate(HTMLschoolDates,school.dates));
            $('.education-entry:last').append(replaceTemplate(HTMLschoolLocation,school.location));
            $('.education-entry:last').append(replaceTemplate(HTMLschoolMajor,school.majors));


        });


        $('#education').append(HTMLonlineClasses);

        this.onlineCourses.forEach(function (onlineCourse) {

            $('#education').append(HTMLschoolStart);

            $('.education-entry:last').append(replaceTemplate(HTMLonlineTitle,onlineCourse.title) + replaceTemplate(HTMLonlineSchool,onlineCourse.school));
            $('.education-entry:last').append(replaceTemplate(HTMLonlineDates,onlineCourse.dates));
            $('.education-entry:last').append(replaceTemplate(HTMLonlineURL,onlineCourse.url));


        });

    }

};

bio.display();
work.display();
projects.display();
education.display();


// map include
$("#mapDiv").append(googleMap);
