Vue.component('custom-edit-field', {
    data: () => {
        return {
        editing: false,
        inputValue: '',
        value: '',
        borderColor: 'blue'
        }
    },
    methods: {
        onFocus: function() {
            this.editing = true
            this.borderColor = 'green'
        },
        onFocusLost: function() {
            this.editing = false
            this.borderColor = 'blue'
        },
        onSubmit: function() {
            if (this.editing) {
                this.value = this.inputValue
        }
        },
        onAbort: function() {
            if (this.editing) {
            this.inputValue = this.value
            }
        }
    },
    template: `
        <div>
            <input
                v-on:focusin="onFocus" v-on:focusout="onFocusLost"
                v-on:keyup.enter="onSubmit" v-on:keyup.esc="onAbort"
                type="text" v-model="inputValue"
                class="inputForm"
                v-bind:style="{ borderColor: borderColor }"  
            >
            <span v-if="editing" class="submitInfo">Press enter to save changes, </span>
            <span v-if="editing" class="abortInfo">press esc to discard changes</span>
            <div>
                Current value: {{value}}
            </div>
        </div>
    `
})