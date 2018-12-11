var projs = [{
    name_: "IT202 Final Project",
    repoLink: "../IT202-Final-Project",
    description: "My final project for IT202"
}, {
    name_: "Linux Users Group Website",
    repoLink: "https://github.com/lugatuic/lug.cs.uic.edu-2018",
    description: "A new website for LUG @ UIC. Most Recent Branch is under the development branch. Master is reserved for releases"
},{
    name_: "Why Are You Running",
    repoLink: "../whyAreYouRunning",
    description: "My experiments with speech stuff"
},{
    name_: "Google Login Authentication",
    repoLink: "../IT202-Lab-14",
    description: "My experimenting with google authentication"
},{
    
    name_: "IT 202 Week5 Lab",
    repoLink: "../CS202-week5-lab",
    description: "Queries City of Chicago dataportal for data on car and informs you on whether or not you've been towed"
}
];
$(document).ready(function() {
    //var count=1;
    console.log("ready!");
    $.each(projs, function(v, i) {
         console.log(i);
        var repoLink = i.repoLink;
        var description = i.description;
        var name = i.name_;
        //   console.log(i.name_);
        $("#project").append("<div class='col s12 m6'>" + "<div class='card blue-grey darken-1'>" + "<div class='card-content white-text'>" + "<span class='card-title'>" + name + "</span>" + "<p>" + description + " </p></div><div class='card-action'>" + "<a href=" + repoLink + ">Project Link</a> </div></div></div>");
        
    });
});