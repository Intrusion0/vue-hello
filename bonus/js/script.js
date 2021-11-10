/*
Stampare a schermo un messaggio all’interno di un h1,
utilizzando i data.
*/

/* Bonus
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

var app = new Vue({
    el: '#myApp',
    data: {
        message: 'Benvenuto VUE!!!',
        namePict: 'unsplashTest',
        image: 'https://unsplash.it/300/300?image=',
        testHtml: `<ul><li>Ciao sono un elemento di una lista</li></ul>`
    },
    methods: {
        test: function() {
            if (this.image == 'https://unsplash.it/300/300?image=') {
                this.image = 'https://unsplash.it/350/300?image=';
            } else if (this.image == 'https://unsplash.it/350/300?image=') {
                this.image = 'https://unsplash.it/300/300?image=';
            }
        }
    }
}) 