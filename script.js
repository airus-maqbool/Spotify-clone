
// document.getElementById("log_btnId").onclick = function () {
//   window.location.href = "login.html"; // Redirect to login.html
// };



// portion for faqs

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq)=>{
  faq.addEventListener("click", ()=>{
    if(faq.classList.contains("active")){
      faq.classList.remove("active")
    }else{
      faq.classList.add("active")
      faqs.forEach((otherfaqs)=>{
            //  to close the other opened faqs
        if(otherfaqs!=faq){ 
          otherfaqs.classList.remove("active");   
        }
      })
    }
  })
})

// faq portion end


// music palyer portion



// music player  ends here copy from backup

// more artist - show all button
document.querySelector('.show_button button').addEventListener('click', function() {
  const secondRow = document.querySelector('.second_artist');
  const button = this;

  // Toggle the visibility of the second artist row
  secondRow.classList.toggle('d-none');

  // Toggle the text of the button between 'Show all' and 'Show less'
  if (secondRow.classList.contains('d-none')) {
    button.textContent = 'Show all';
  } else {
    button.textContent = 'Show less';
  }
});
// more albums - show all button
document.querySelector('.show_button_second button').addEventListener('click', function() {
  const secondRow = document.querySelector('.second_album');
  const button = this;

  // Toggle the visibility of the second artist row
  secondRow.classList.toggle('d-none');

  // Toggle the text of the button between 'Show all' and 'Show less'
  if (secondRow.classList.contains('d-none')) {
    button.textContent = 'Show all';
  } else {
    button.textContent = 'Show less';
  }
});
// Scroll to top button jquery
$(document).ready(function () {
  // Scroll to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#scrollTopBtn').fadeIn();
    } else {
      $('#scrollTopBtn').fadeOut();
    }
  });

  $('#scrollTopBtn').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600);
    return false;
  });

  
  
      // copy from backup and paste it here 

      // review end
});

