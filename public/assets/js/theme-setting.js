document.addEventListener('DOMContentLoaded', function () {
    /*=====================
          Color Picker
    ==========================*/
    var colorPickerElement = document.getElementById('colorPick');
    if (colorPickerElement) {
        var color_picker1 = colorPickerElement.value;
        colorPickerElement.onchange = function () {
            color_picker1 = this.value;
            document.body.style.setProperty('--theme-color', color_picker1);
            document.body.style.setProperty('--theme-color-rgb', color_picker1);
        };
    }

    /*=====================
          Clock Initialization
    ==========================*/
    var clockElement = document.getElementById('clockdiv');
    if (!clockElement) {
        console.error('Element with id "clockdiv" not found.');
        return;
    }

    // Example clock initialization logic
    var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
    initializeClock('clockdiv', deadline);

    /*========================
       Dark setting js
    ==========================*/
    $('#darkButton').on('click', function () {
        var href = $('#color-link').attr('href');
        $('body').removeClass('light');
        $('body').addClass('dark');
        document.getElementById('color-link').setAttribute('href', '../assets/css/dark.css');
    });

    $('#lightButton').on('click', function () {
        var href = $('#color-link').attr('href');
        $('body').removeClass('dark');
        $('body').addClass('light');
        document.getElementById('color-link').setAttribute('href', '../assets/css/style.css');
    });

    /*========================
       RTL setting js
    ==========================*/
    $('.rtl').on('click', function () {
        if ($('body').hasClass('ltr')) {
            $('html').attr('dir', 'rtl');
            $('body').removeClass('ltr');
            $('body').addClass('rtl');
            $('#rtl-link').attr('href', '../assets/css/vendors/bootstrap.rtl.css');
        } else {
            $('html').attr('dir', '');
            $('body').removeClass('rtl');
            $('body').addClass('ltr');
            $('#rtl-link').attr('href', '../assets/css/vendors/bootstrap.css');
        }
    });
});
