new Vue({
    el:"#assignment",
    data() {
        return {
                inputval: '',
                paragraphIsVisible: true,
                inputBackColor:''
        }
    },

    computed: {
        paraClass() {
            return {
                user1: this.inputval === 'user1',
                user2: this.inputval === 'user2',
                hidden:!this.paragraphIsVisible
            }
        },
    },
    
    methods: {
                togglePara()
                {
                    this.paragraphIsVisible = !this.paragraphIsVisible;
                },

            }
});