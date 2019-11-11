var data = {
    name: 'Radit'
}
Vue.component('greeting', {
    template: '<p>Hey There , I am re-usable component {{name}} <button @click="changeName">Change Name</button></p>',
    data: function () {
        /* return {
            name: 'Jhon'
        } */
        return data;
    },
    methods: {
        changeName: function () {
            this.name = 'name Changed'
        }
    }
});

var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: "Title one",

    },
    methods: {

    },
    computed: {
        greet: function () {
            return 'Hello from app one :)';
        }

    }
});

var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: "Title two",

    },
    methods: {
        changeTitle: function () {
            one.title = "Title 1 changed";
        }

    },
    computed: {
        greet: function () {
            return 'yes , this is app two';
        }
    }
});
one.title = "change form outside";

var three = new Vue({
    el: "#vue-app-three",
    data: {
        food: "Indonesia Food",

    },
    methods: {
        readRefs: function () {
            this.food = this.$refs.favFood.value;
            console.log(this.$refs.test.innerText);
        }

    }
});