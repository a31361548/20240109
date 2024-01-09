$('#reg_btn,#login_btn').on('click', function () {
  $('body,#navbar').css({
    overflow: 'auto',
    paddingRight: 0
  })
})

$('#race a').on('click', function () {
  $('#race a').removeClass('active')
  $(this).addClass('active')
})
