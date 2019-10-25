new Vue({
    el: '#vue-app',
    data: {
        name: 'Jhon',
        job: 'dev',
        web: 'google.com',
        webTag: '<a href="google.com">search in google</a>',
        year: 2019,
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        logKeyboard: 0,
        textValue: '',
        available: false,
        nearby: false,
        error: false,
        success: false,
        testArray: ['tes1', 'tes2', 'tes3', 'tes4'],
        employees: [{
                name: 'jhon',
                age: 20
            },
            {
                name: 'Dhoe',
                age: 31
            },
            {
                name: 'jane',
                age: 25
            }
        ]


    },
    methods: {
        greet: function (time) {
            return 'good ' + time + " " + this.name;
        },
        add(inc) {
            this.year += inc;
        },
        subtract(dec) {
            this.year -= dec;
        },
        updateXY(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        show_alert() {
            alert("Link Clicked");
        },
        log_keyboard() {
            console.log("tes");
            this.logKeyboard++;
        },
        addToA() {
            console.log("add to A");
            return this.a + this.year;
        }
    },
    computed: {
        addToB: function () {
            console.log("add to B");
            return this.b + this.year;
        },
        compClasses: function () {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }

    }
});