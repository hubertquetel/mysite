// Finsweet Cookies

<script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.min.js"></script>

<script>
  
    const seenBanner = Cookies.get('seenBanner');
  if(!seenBanner){
    $('.announcement-bar').css('display', 'flex');
    Cookies.set('seenBanner', true, { expires: 1 });

    setTimeout(()=>{
      $('.announcement-bar').fadeOut(2000);
    }, 4500);
  }

  $('.clear-cookie').click(()=>{
    Cookies.remove('seenBanner');
  });
});
</script>
