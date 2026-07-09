$(document).ready(function () {
    $.ajax({
        // url of bin in which json data of feedbacks is saved
        url: "https://api.jsonbin.io/v3/b/67309095acd3cb34a8a5ee7c",   
        method: "GET",
        headers:{
            "X-Master-Key": "$2a$10$b3eIB8ks2ToJxE0iQFr9CuhNQsQddPfePjDYp7WfA.4khuRwZv7iu"
        },
        // will automatically convert json response to javascript object
           
        success: function(data){
          // data is return by api in json that is automatically converted to js object/arrays
          console.log(data.record);
        },
        error: function(error){
          console.log("Error fetching data", error);
        }
      }
      );
});