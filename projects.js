var projs = [{
    name_: "IT202 Final Project",
    repoLink: "https://github.com/Benbigmac/IT202-Final-Project",
    webLink:"../IT202-Final-Project",
    description: "My final project for IT202"
}, {
    name_: "Linux Users Group Website",
    repoLink: "https://github.com/lugatuic/lug.cs.uic.edu-2018",
    webLink:"",
    description: "A new website for LUG @ UIC. Most Recent Branch is under the development branch. Master is reserved for releases"
},{
    name_: "Why Are You Running",
    repoLink: "https://github.com/Benbigmac/whyAreYouRunning",
         webLink:"../whyAreYouRunning",
    description: "My experiments with speech stuff"
},{
    name_: "Google Login Authentication",
    repoLink: "https://github.com/Benbigmac/IT202-Lab-14",
         webLink:"../IT202-Lab-14",
    description: "My experimenting with google authentication"
},{
    
    name_: "IT 202 Week5 Lab",
    repoLink: "https://github.com/Benbigmac/CS202-week5-lab",
     webLink:"../CS202-week5-lab",
    description: "Queries City of Chicago dataportal for data on car and informs you on whether or not you've been towed"
},{
    
    name_: "CS 362 Hover Craft Project",
    repoLink: "https://github.com/Walden1995/CS362-Hovercraft",
    webLink: "https://walden1995.github.io/CS362-Hovercraft",
    description: "An arduino controlled hovercraft which recieves input from a bluetooth controller"
},{
    
    name_: "Heart rate and Respiration Rate Monitoring Device ",
    repoLink: "https://github.com/Benbigmac/HEART-RATE-AND-BREATHING-MONITER",
    webLink: "../HEART-RATE-AND-BREATHING-MONITER",
    description: "An arduino controlled device which transmits EKG data from heart and Respiration rate data"
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
        $("#project").append("<div class='col s12 m6'>" + "<div class='card blue-grey darken-1'>" + "<div class='card-content white-text'>" + "<span class='card-title'>" + name + "</span>" + "<p>" + description + " </p></div><div class='card-action'>" + "<a href=" + repoLink + ">Repo Link</a> <a href=" + i.webLink + ">Web Link</a> </div></div></div>");
        
    });
});
