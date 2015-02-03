(function ($) {

  $.fn.slider = function (options) {
    var defaults = {
      indicators: true,
      height: 400,
      transition: 500,
    }
    options = $.extend(defaults, options);

    return this.each(function() {

      // For each slider, we want to keep track of
      // which slide is active and its associated content
      var $this = $(this);
      var $slider = $this.find('ul.slides').first();
      var $slides = $slider.find('li');
      var $active_index = $slider.find('.active').index();
      var $active;
      if ($active_index != -1) { $active = $slides.eq($active_index); }

      // Animate inline scroll move to current element
      function animateMove (element) {
        var offset = element.offsetLeft;

          $('ul.indicators').stop().animate({
              scrollLeft: offset - 255  
          }, 300);
      }

      // This function will transition the slide to any index of the next slide
      function moveToSlide(index) {
        if (index >= $slides.length) index = 0;
        else if (index < 0) index = $slides.length -1;

        $active_index = $slider.find('.active').index();

        // Only do if index changes
        if ($active_index != index) {
          $active = $slides.eq($active_index);
          $caption = $active.find('.caption');

          $active.removeClass('active');
          $active.velocity({opacity: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad',
                            complete: function() {
                              $slides.not('.active').velocity({opacity: 0, translateX: 0, translateY: 0}, {duration: 0, queue: false});
                            } });


          // Update indicators
          if (options.indicators) {
            $indicators.eq($active_index).removeClass('active');
          }

          $slides.eq(index).velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
          $slides.eq(index).find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, delay: options.transition, queue: false, easing: 'easeOutQuad'});
          $slides.eq(index).addClass('active');


          // Update indicators
          if (options.indicators) {
            $indicators.eq(index).addClass('active');
          }
        }
      }

      // Set height of slider
      if (options.height != 400) {
        $this.height(options.height + 40);
        $slider.height(options.height);
      }

      // Set initial dimensions of images
      $slides.find('img').each(function () {
        $(this).load(function () {
          if ($(this).width() < $(this).parent().width()) {
            $(this).css({width: '100%', height: 'auto'});
          }
        });
      });

      // dynamically add indicators
      if (options.indicators) {
        var $indicators = $('<ul class="indicators"></ul>');
        $slides.each(function( index ) {
          $srcImg = $(this).children('img').attr('src').replace("medium", "thumb");
         
        if ($(window).width() <= 600) {
          var $indicator = $('<li class="indicator-item"></li>');
        } else {
          var $indicator = $('<li class="indicator-item"><img  class="responsive-img" src='+ $srcImg +'></li>');
        }

          // Handle clicks on indicators
          $indicator.click(function () {
            var $parent = $slider.parent();
            var curr_index = $parent.find($(this)).index();
            moveToSlide(curr_index);

            animateMove(this);
          });

          $indicators.append($indicator);
        });
        $this.append($indicators);
        $indicators = $this.find('ul.indicators').find('li.indicator-item');

        if (!($(window).width() <= 600)) {
          $('<div class="arrow arrow-left"></div>').insertBefore('ul.indicators');
          $('<div class="arrow arrow-right"></div>').insertAfter('ul.indicators');
        }

          // Handle clicks on arrows
          $('div.arrow-left').click(function () {

            var $parent = $slider.parent();
            var curr_index = $parent.find($('li.active')[0]).index() - 1;
            moveToSlide(curr_index);

            animateMove($('ul.indicators li.indicator-item.active')[0]);


          });

          $('div.arrow-right').click(function () {
            var $parent = $slider.parent();
            var curr_index = $parent.find($('li.active')[0]).index() + 1;
            moveToSlide(curr_index);

            animateMove($('ul.indicators li.indicator-item.active')[0]);
          });


      }

      if ($active) {
        $active.show();
      }
      else {
        $slides.first().addClass('active').velocity({opacity: 1}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});

        $active_index = 0;
        $active = $slides.eq($active_index);

        // Update indicators
        if (options.indicators) {
          $indicators.eq($active_index).addClass('active');
        }
      }

      // Adjust height to current slide
      $active.find('img').load(function() {
        // Handler for .load() called.
        $active.find('.caption').velocity({opacity: 1, translateX: 0, translateY: 0}, {duration: options.transition, queue: false, easing: 'easeOutQuad'});
      });


      // HammerJS, Swipe navigation

      // Touch Event
      var panning = false;
      var swipeLeft = false;
      var swipeRight = false;

      $this.hammer({
          prevent_default: false
      }).bind('pan', function(e) {
        if (e.gesture.pointerType === "touch") {

          var direction = e.gesture.direction;
          var x = e.gesture.deltaX;
          var velocityX = e.gesture.velocityX;

          $curr_slide = $slider.find('.active');
          $curr_slide.velocity({ translateX: x
              }, {duration: 50, queue: false, easing: 'easeOutQuad'});

          // Swipe Left
          if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.65)) {
            swipeRight = true;
          }
          // Swipe Right
          else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.65)) {
            swipeLeft = true;
          }

          // Make Slide Behind active slide visible
          var next_slide;
          if (swipeLeft) {
            next_slide = $curr_slide.next();
            if (next_slide.length === 0) {
              next_slide = $slides.first();
            }
            next_slide.velocity({ opacity: 1
                }, {duration: 300, queue: false, easing: 'easeOutQuad'});
          }
          if (swipeRight) {
            next_slide = $curr_slide.prev();
            if (next_slide.length === 0) {
              next_slide = $slides.last();
            }
            next_slide.velocity({ opacity: 1
                }, {duration: 300, queue: false, easing: 'easeOutQuad'});
          }


        }

      }).bind('panend', function(e) {
        if (e.gesture.pointerType === "touch") {

          $curr_slide = $slider.find('.active');
          panning = false;
          curr_index = $slider.find('.active').index();

          if (!swipeRight && !swipeLeft) {
            // Return to original spot
            $curr_slide.velocity({ translateX: 0
                }, {duration: 300, queue: false, easing: 'easeOutQuad'});
          }
          else if (swipeLeft) {
            moveToSlide(curr_index + 1);
            $curr_slide.velocity({translateX: -1 * $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                  complete: function() {
                                    $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                  } });
          }
          else if (swipeRight) {
            moveToSlide(curr_index - 1);
            $curr_slide.velocity({translateX: $this.innerWidth() }, {duration: 300, queue: false, easing: 'easeOutQuad',
                                  complete: function() {
                                    $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: false});
                                  } });
          }
          swipeLeft = false;
          swipeRight = false;

        }
      });


    });

  };
}( jQuery ));