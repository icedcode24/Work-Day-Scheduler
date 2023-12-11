

function () {
  $('.saveBtn').on('click', function () {
    var value = $(this).prev().val();
    var psrentId = $(this).parent().attr('id');
    localStorage.setItem(parentid, value);
  });
}
$('.time-block').each(function () {
  var curr = dayjs().hour();
  var rowId = $(this).attr('id');
  var value = localStorage.getitem(rowId);
  console.log(currentDate)

  $(this).find('.description').val(value);
  if (rowId.split('-').pop() == curr) {
    $(this).addClass('present');
  }
  if (rowId.split('-').pop() > curr) {
    $(this).addClass('future');
  }
  if (rowId.split('-').pop() < curr) {
    $(this).addClass('past');
  }
})
var currentDate = dayjs().format('mmmm DD YYYY h:mm: A');
$('#currentDay').text(currentDate);
});