// https://v3.vuejs.org/guide/installation.html#for-server-side-rendering
const app = Vue.createApp({
    // template: '<h1>Hello {{lastName}} {{lastName}}</ha>',
    data() {
        return {
            firstName: "Lionel",
            lastName: "Messi",
            email: "lionel@gmail.com",
            gender: 'male',
            picture: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564'
        }
    },
    methods: {
        async getUser() {
            console.log("Welcome to console " + this.firstName);

            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();
            console.log(results);
            this.firstName = results[0].name.first;
            this.lastName = results[0].last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;

        }
    }
});


app.mount('#app');