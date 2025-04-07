<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="Fastkart">
        <meta name="keywords" content="Fastkart">
        <meta name="author" content="Fastkart">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="icon" href="assets/images/favicon/1.png" type="image/x-icon">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet">
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap">

        <!-- bootstrap css -->
        <link id="rtl-link" rel="stylesheet" type="text/css" href="assets/css/vendors/bootstrap.css">

        <!-- wow css -->
        <link rel="stylesheet" href="assets/css/animate.min.css">

        <!-- Iconly css -->
        <link rel="stylesheet" type="text/css" href="assets/css/bulk-style.css">
        <link rel="stylesheet" type="text/css" href="assets/css/vendors/animate.css">

        <!-- Template css -->
        <link id="color-link" rel="stylesheet" type="text/css" href="assets/css/style.css">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'AsBeez') }}</title>

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        <script>
      function initializeClock(id, endtime) {
        const clock = document.getElementById(id);
        if (!clock) {
            console.error(`Element with id ${id} not found.`);
            return;
        }

        const timeinterval = setInterval(() => {
            const t = getTimeRemaining(endtime);
            clock.querySelector('.days').innerText = t.days;
            clock.querySelector('.hours').innerText = ('0' + t.hours).slice(-2);
            clock.querySelector('.minutes').innerText = ('0' + t.minutes).slice(-2);
            clock.querySelector('.seconds').innerText = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }, 1000);
    }

    // Example usage
    document.addEventListener('DOMContentLoaded', (event) => {
        const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for demo purposes
        initializeClock('clockdiv', deadline);
    });
    </script>

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="bg-effect">
        <div id="clockdiv" style="display: none;">
            <span class="days"></span>
            <span class="hours"></span>
            <span class="minutes"></span>
            <span class="seconds"></span>
        </div>
        <div id="clockdiv-1" style="display: none;">
            <span class="days"></span>
            <span class="hours"></span>
            <span class="minutes"></span>
            <span class="seconds"></span>
        </div>
        @inertia

    <!-- latest jquery-->
    <script src="assets/js/jquery-3.6.0.min.js"></script>

    <!-- jquery ui-->
    <script src="assets/js/jquery-ui.min.js"></script>

    <!-- Bootstrap js-->
    <script src="assets/js/bootstrap/bootstrap.bundle.min.js"></script>
    <script src="assets/js/bootstrap/bootstrap-notify.min.js"></script>
    <script src="assets/js/bootstrap/popper.min.js"></script>

    <!-- feather icon js-->
    <script src="assets/js/feather/feather.min.js"></script>
    <script src="assets/js/feather/feather-icon.js"></script>

    <!-- Lazyload Js -->
    <script src="assets/js/lazysizes.min.js"></script>

    <!-- Slick js-->
    <script src="assets/js/slick/slick.js"></script>
    <script src="assets/js/slick/slick-animation.min.js"></script>
    <script src="assets/js/slick/custom_slick.js"></script>

    <!-- Auto Height Js -->
    <script src="assets/js/auto-height.js"></script>

    <!-- Timer Js -->
    <script src="assets/js/timer1.js"></script>

    <!-- Fly Cart Js -->
    <script src="assets/js/fly-cart.js"></script>

    <!-- Quantity js -->
    <script src="assets/js/quantity-2.js"></script>

    <!-- WOW js -->
    <script src="assets/js/wow.min.js"></script>
    <script src="assets/js/custom-wow.js"></script>

    <!-- script js -->
    <script src="assets/js/script.js"></script>

    <!-- theme setting js -->
    <script src="assets/js/theme-setting.js"></script>

    </body>
</html>
