<template>
    <div id="app">
        <div>
            <button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
                <flag :iso="entry.flag" v-bind:squared=false /> {{ entry.title }}
            </button>
        </div>

        <img alt="Vue logo" src="./assets/logo.png" style="width: 20%;">
        <br /><br /><br />
        <div>
            <div class="alert alert-success hello">
                <h1>{{ $t('heading') }}</h1>
                <hr />
                <p>
                    {{ $t('content') }}<br>
                </p>
            </div>
            <div>
                <br /><br />
                <p style="color: red;">Source Link : https://www.toppr.com/guides/essays/christmas-essay/<br />
                    Note : Google Translate use to convert langages
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import i18n from '@/plugins/i18n';

export default {
    name: 'app',
    components: {
    },
    data() {
        return {
            languages: [
                { flag: 'us', language: 'en', title: 'English' },
                { flag: 'es', language: 'es', title: 'Español' },
                { flag: 'lk', language: 'si', title: 'සිංහල' },
                { flag: 'in', language: 'ta', title: 'தமிழ்' },
                { flag: 'cn', language: 'zh', title: 'Chinese' },
            ]
        };
    },
    methods: {
        changeLocale(locale) {
            i18n.locale = locale;
        }
    }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    button {
        padding: 15px;
        border: 1px solid green;
        font-size: 18px;
        margin: 15px;
    }
</style>
