

$(document).ready(function () {

  // click event to save the form
  $(".saveBtn").on("click", function () {
    

    // Save inputs to local storage
    const timeBlockID = $(this).parent().attr("id");
    const description = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockID, description);
      
  });




// Get the current hour in 24-hour format 
const currentHour = dayjs().format('H');

console.log("Current Hour:", currentHour);

// Loop through all time blocks
$('.time-block').each(function() {
  // Extract the hour from the time block's ID
  const timeBlockHour = parseInt($(this).attr('id').split('-')[1]);

  console.log("Time Block Hour:", timeBlockHour);

  // Compare the current hour with the time block's hour
  if (timeBlockHour < currentHour) {
    // Time block is in the past
    $(this).removeClass('present future').addClass('past');
  } else if (timeBlockHour == currentHour) {
    // Time block is in the present
    $(this).removeClass('past future').addClass('present');
  } else {
    // Time block is in the future
    $(this).removeClass('past present').addClass('future');
  }
});





  $('.time-block').each(function() {
    const timeBlockID = $(this).attr('id');
    const savedInput = localStorage.getItem(timeBlockID);
  
    // Check if there is saved input for this time block
    if (savedInput !== null) {
      // Set the saved input as the value of the textarea
      $(this).find('.description').val(savedInput);
    }
  });
  


  // TODO: Add code to display the current date in the header of the page.
  const currentDate = dayjs().format('dddd, MMMM D YYYY');
  $('#currentDay').text(currentDate);

});

