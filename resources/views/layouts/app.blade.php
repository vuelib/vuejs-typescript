<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <meta name="author" content="Kudlicka Tomas">
    <title>Šotola Miroslav</title>
    <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet" async/>
    <script src="https://kit.fontawesome.com/5bc5abf087.js" crossorigin="anonymous"></script>
</head>
<body>
<div id="app">
</div>
{{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js"></script> --}}
<script src="{{ mix('/js/app.js') }}"></script>
</body>

</html>
