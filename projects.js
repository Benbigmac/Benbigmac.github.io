var projs=[{name_:"IT202 Final Project",repoLink:"https://benbigmac.github.io/IT202-Final-Project/",description:"My final project for IT202"}
           ,{name_:"Linux Users Group Website",repoLink:"https://github.com/lugatuic/lug.cs.uic.edu-2018",description:"A new website for LUG"}]


$( document ).ready(function() {
    console.log( "ready!" );
    $.each(projs, function(v, i) {
              var repoLink=i.repoLink;
               var description=i.description; 
              var name = i.name_;
           //   console.log(i.name_);
              $("#projects").append("<div class='row'>"+
    "<div class='col s12 m6'>"+
      "<div class='card blue-grey darken-1'>"+
        "<div class='card-content white-text'>"+
          "<span class='card-title'>"+name+"</span>"+
          "<p>"+description+" </p></div><div class='card-action'>"
          "<a href="+repoLink+">Project Link</a> </div></div></div> </div>"
                                   );
    
});



      
       
             