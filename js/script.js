const app = new Vue(
    {
        el: '#app',

        data: {
            message: 'Hello World, scrivi e cambia messaggio',
            sourceImage: 'https://picsum.photos/200',
            anotherImage: 'https://picsum.photos/300',
            anotherSmallImage: 'https://picsum.photos/200'
        },

        methods: {
            updateImage: function () {
                this.sourceImage = this.anotherImage;
            },

            backToSmallerImage: function () {
                this.sourceImage = this.anotherSmallImage;
            }
        }
    }
);
