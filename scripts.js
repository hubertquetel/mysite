// Finsweet Cookies

<script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.min.js"></script>

<script>
  
    const seenBanner = Cookies.get('seenBanner');
  if(!seenBanner){
    $('.hack6-loading-wrapper').css('display', 'flex');
    Cookies.set('seenBanner', true, { expires: 1 });

    setTimeout(()=>{
      $('.hack6-loading-wrapper').fadeOut(500);
    }, 4500);
  }

  $('.clear-cookie').click(()=>{
    Cookies.remove('seenBanner');
  });
});
</script>
