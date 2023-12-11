
//form nhập
function openForm() {
  $('#formModal').modal('show');
}

function closeForm() {
  $('#formModal').modal('hide');
}


function submitForm(event) {
  event.preventDefault();
  // Handle form submission logic here (send data to server, etc.)
  // For this example, we'll just show the success message
  $('#formModal').modal('hide');
  $('#successMessage').show();
  setTimeout(function() {
    $('#successMessage').hide();
  }, 5000); // 5 seconds
}
//video
$('.modal').on('hide.bs.modal', function (e) {
  var iframe = $(this).find('iframe');
  var src = iframe.attr('src');
  iframe.attr('src', '');
  iframe.attr('src', src);
});

$(document).ready(function(){
  $(".close").click(function(){
  });
})

//thông báo 
function showNotification() {
  var notification = document.getElementById('notification');
  notification.style.display = 'block';

  // Ẩn thông báo sau 5 giây
  setTimeout(function() {
      notification.style.display = 'none';
  }, 5000);
}
