---
layout: docs
title: Microformats
group: getting-started
---

A Ingresso.com utiliza Microformats para organizar as informações. Mais precisamente, utilizamos <a href="http://schema.org/" target="_blank">schema.org</a>.

## Schema

It's possible to use many formats by Schema, but We'll focus on <a href="http://json-ld.org/" target="_blank">JSON-LD</a> format.
This is the recommended format by Google and It's more friendly than use HTML attributes.

## Using Ingresso information


{% highlight js %}
<script type="application/ld+json">
{
    "@context":"http://schema.org",
    "@type":"Organization",
    "name":"Ingresso.com",
    "url":"http://www.ingresso.com",
    "foundingDate":"1995-09-25",
    "legalName":"Ingresso.com Ltda",
    "email":"contato@ingresso.com",
    "logo":"https://ingresso-a.akamaihd.net/catalogo/img/logo.png",
    "contactPoint":{
        "@type":"ContactPoint",
        "contactType":"customer service",
        "url":"https://atendimento.ingresso.com/"
    },
    "telephone":"4003-2330",
    "address":{
        "@type":"PostalAddress",
        "streetAddress":"Rua da Quitanda, 86 - 9&ordm; andar",
        "postalCode":"20091-005",
        "addressLocality":"Rio de Janeiro",
        "addressRegion":"RJ",
        "addressCountry":"BR"
    },
    "seeks":{
        "@type":"Demand",
        "acceptedPaymentMethod":[
            {
                "@type":"PaymentMethod",
                "name":"Visa"
            },
            {
                "@type":"PaymentMethod",
                "name":"MasterCard"
            },
            {
                "@type":"PaymentMethod",
                "name":"Diners"
            },
            {
                "@type":"PaymentMethod",
                "name":"Elo"
            },
            {
                "@type":"PaymentMethod",
                "name":"Cartão Submarino"
            },
            {
                "@type":"PaymentMethod",
                "name":"Aura"
            },
            {
                "@type":"PaymentMethod",
                "name":"American Express"
            }
        ]
    }
}
</script>
{% endhighlight %}

## Using one Event object


{% highlight js %}
<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "Doidas e Santas",
  "description":"Beatriz vive uma crise. Embora no auge da carreira profissional, a vida pessoal anda um caos. Sua mãe, a extravagante dona Elda voltou a morar com ela e vive às turras com sua filha adolescente (também Josie Antello). E o marido Orlando após vinte anos de casamento, está cada vez mais distante, mais surdo, mais mudo, mais morno, mais jogado no sofá. Um casamento acomodado e duas gerações em crise. Assim, não há “santa” que aguente, qualquer uma fica “doida”. Durante uma visita da irmã caçula, a solteirona-não-tão-convicta-assim , Beatriz decide dar um basta. Separa-se de um inconformado Orlando e resolve abraçar os prazeres da vida e da juventude mais uma vez. Sai para as noites, canta, dança, conhece um rapaz... Beatriz acha que preencheu o vazio, que botou a vida nos trilhos. Até que uma longa conversa com a mãe, sobre o passado e as esperanças para o futuro, faz reacender uma fagulha. Aponta a dorzinha da saudade.",
  "image":"https://ingresso-a.akamaihd.net/img/teatro/cartaz/734_d_iphone.jpg",
  "location": {
    "@type": "Place",
    "name": "Teatro SESI - Centro",
    "address": {
      "@type": "PostalAddress",
      "postalCode":"20030-002",
      "streetAddress": "Avenida Graça Aranha, 1",
      "addressLocality": "Rio de Janeiro",
      "addressRegion": "RJ"
    }
  },
  "offers": {
    "@type": "Offer",
    "price":"47.20",
    "businessFunction":"sell",
    "priceCurrency": "BRL",
    "availability": "In Stock"
  },
  "startDate": "2016-04-21T20:00",
  "url": "http://www.ingresso.com/rio-de-janeiro/home/espetaculo/teatro/doidas-e-santas"
}
</script>
{% endhighlight %}

## Using a list movie

May be used in any movie catalog.


{% highlight js %}
<script type="application/ld+json">
{
    "@context":"http://schema.org",
    "@type":"ItemList",
    "itemListElement":[
        {
            "@type":"ListItem",
            "position":1,
            "item":{
                "@type":"Movie",
                "name":"Capitão América: Guerra Civil",
                "url":"http://marvel.com/CaptainAmericaPremiere",
                "image":"https://upload.wikimedia.org/wikipedia/pt/5/53/Captain_America_Civil_War_poster.jpg",
                "genre":"Ação",
                "director":[
                    {
                        "@type":"Person",
                        "name":"Anthony Russo"
                    },
                    {
                        "@type":"Person",
                        "name":"Joe Russo"
                    }
                ],
                "actor":[
                    {
                        "@type":"Person",
                        "name":"Robert Downey Jr."
                    },
                    {
                        "@type":"Person",
                        "name":"Chris Evans"
                    }
                ],
                "datePublished":"2016-05-06"
            }
        },
        {
            "@type":"ListItem",
            "position":2,
            "item":{
                "@type":"Movie",
                "name":"Capitão América: Guerra Civil 2",
                "url":"http://marvel.com/CaptainAmericaPremiere",
                "image":"https://upload.wikimedia.org/wikipedia/pt/5/53/Captain_America_Civil_War_poster.jpg",
                "genre":"Ação",
                "director":[
                    {
                        "@type":"Person",
                        "name":"Anthony Russo"
                    },
                    {
                        "@type":"Person",
                        "name":"Joe Russo"
                    }
                ],
                "actor":[
                    {
                        "@type":"Person",
                        "name":"Robert Downey Jr."
                    },
                    {
                        "@type":"Person",
                        "name":"Chris Evans"
                    }
                ],
                "datePublished":"2016-05-06"
            }
        }
    ]
}
</script>
{% endhighlight %}

