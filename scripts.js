<script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.min.js"></script>

<script>
    $(document).ready(function() {
  function playGif(gifclass){
    const gif = $(gifclass); 
    gif[0].src = gif[0].src.replace(/\?.*$/,"")+"?x="+Math.random(); 
  }
  
  const seenGif = Cookies.get('seenGif');
  if(!seenGif){
    $('.hack6-loading-wrapper').css('display', 'flex');
    playGif('.hack6-gif');
    Cookies.set('seenGif', true, { expires: 1 });

    setTimeout(()=>{
      $('.hack6-loading-wrapper').fadeOut(500);
    }, 4500);
  }

  // this code is only for our hack instance! You don't need it in your code
  // when .clear-cookie is clicked 
  $('.clear-cookie').click(()=>{
    Cookies.remove('seenGif');
  });
});
</script>
