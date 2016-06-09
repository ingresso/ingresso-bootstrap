---
layout: docs
title: Microformats
group: getting-started
---

A Ingresso.com utiliza Microformats para organizar as informações. Mais precisamente, utilizamos <a href="http://schema.org/" target="_blank">schema.org</a>.

## Schema

Admite-se dois alguns tipos de formato, para a utilização do Schema, mas focaremos na utilização do formato JSON-LD.
Este formato é recomendado pelo Google e é mais amigável do que usar como atributos no HTML.

## Exemplo com as informações da Ingresso

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

## Exemplo com lista de filmes

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