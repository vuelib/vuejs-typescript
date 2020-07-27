@component('mail::message')
# Zpráva od {{$data['email']}}

<strong>Email:</strong>{{$data['email']}}

<strong>Předmět zprávy:</strong>{{$data['reason']}}


<strong>Zpráva:</strong>{{$data['message']}}


@endcomponent
