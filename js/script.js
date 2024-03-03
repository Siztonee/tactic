$(".header_cn-drpdwn").on("click", function() {
  const dropdownMenu = $(".dropdown_menu");

  if (dropdownMenu.is(":visible")) {
    dropdownMenu.hide();
  } else {
    dropdownMenu.show();
  }
});


$(".header_cn-drpdwn2").on("click", function() {
  const dropdownMenu = $(".dropdown_menu2");

  if (dropdownMenu.is(":visible")) {
    dropdownMenu.hide();
  } else {
    dropdownMenu.show();
  }
});


const r_1 = $(".first_slide");
const r_2 = $(".second_slide");
const r_3 = $(".third_slide");

const rr_1 = $("#rr_1");
const rr_2 = $("#rr_2");
const rr_3 = $("#rr_3");


function autoSlide(rshow, rhide, rhide2, rrshow, rrhide, rrhide2) {
        function toggleVisibility() {
            rhide.hide();
            rrhide.css({
              background: 'white'
            });
            rhide2.hide();
            rrhide2.css({
              background: 'white'
            });
            rshow.show();
            rrshow.css({
              background: 'orange'
            });
        }

        setInterval(function() {
            // Вызываем toggleVisibility каждые 5 секунд
            toggleVisibility();

            // Меняем порядок элементов для следующего вызова toggleVisibility
            var temp = rshow;
            rshow = rhide;
            rhide = rhide2;
            rhide2 = temp;

            var rtemp = rrshow;
            rrshow = rrhide;
            rrhide = rrhide2;
            rrhide2 = rtemp;
        }, 5000);

        // Инициализация состояния
        toggleVisibility();
    }

autoSlide(r_1, r_2, r_3, rr_1, rr_2, rr_3);



$("#rr_1").on("click", function() {
  r_2.hide();
  rr_2.css({
    background: 'white'
  });
  r_3.hide();
  rr_3.css({
    background: 'white'
  });
  r_1.show();
  rr_1.css({
    background: 'orange'
  });
});

$("#rr_2").on("click", function() {
  r_1.hide();
  rr_1.css({
    background: 'white'
  });
  r_3.hide();
  rr_3.css({
    background: 'white'
  });
  r_2.show();
  rr_2.css({
    background: 'orange'
  });
});

$("#rr_3").on("click", function() {
  r_2.hide();
  rr_2.css({
    background: 'white'
  });
  r_1.hide();
  rr_1.css({
    background: 'white'
  });
  r_3.show();
  rr_3.css({
    background: 'orange'
  });
});
