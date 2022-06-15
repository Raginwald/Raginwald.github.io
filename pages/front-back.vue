<template>
    <v-row id="front-back">
        <v-col cols="1"></v-col>
        <v-col cols="4" id="front-side" class="text-center">
            <h1>CLIENT</h1>
            <h3>Le client représente le navigateur du client</h3>

            <div class="screen">
                <v-img v-if="step >= 11" src="/front-back/oclock.png" class="oclock-site"></v-img>
                <div v-else class="empty-screen">
                    <v-row>
                        <v-col cols="4">
                            <v-img width="7em" src="/front-back/chrome.png" class="mb-5" />
                        </v-col>
                        <v-col cols="4">
                            <v-img width="7em" src="/front-back/firefox.png" class="mb-5" />
                        </v-col>
                        <v-col cols="4">
                            <v-img width="7em" src="/front-back/internet-explorer.png" class="mb-5" />
                        </v-col>
                    </v-row>
                    <v-text-field outlined disabled dense :value="step > 0 ? 'https://oclock.io' : ''" />
                </div>
            </div>
            <div class="footOne"></div>
            <div class="footTwo"></div>

            <div v-if="step >= 1" class="tooltip-style d-inline-block mt-3">L'utilisateur tape un nom de domaine sur son navigateur</div>

            <v-btn class="btn-step btn-step-prev" @click="prevStep()">Étape précédente</v-btn>
        </v-col>

        <v-col cols="1">
            <!-- Contiendra les premières fleches -->
        </v-col>

        <v-col cols="6" id="back-side" class="text-center">
            <h1>SERVEUR</h1>
            <h3>Le serveur représente la machine qui héberge les pages du site visité</h3>

            <div class="server d-flex">
                <div class="server-element apache flex-grow-1" :class="serverColorCircle(3, 10)">
                    <v-tooltip left>
                        <template v-slot:activator="{ on, attrs }">
                            <v-img width="13em" contain src="/front-back/apache.png" v-bind="attrs" v-on="on" />
                        </template>
                        <span>Apache est le programme installé sur le serveur qui écoute les requêtes du client</span>
                    </v-tooltip>

                    <div v-if="step >= 3" class="tooltip-style d-inline-block">
                        Apache reçoit la requête et cherche les fichiers liés à la page demandée
                    </div>
                </div>
                <div class="flex-grow-1">giuvgui eg ervg jkgvkg kvgejkvg grzegjb b gkebgk kfd bkb gkjdb jkbjkb dfjkb jkb jkerg er  ebjkgvjk kjbgvk bekb kvjebjkbvezfeergergerhk ebkv </div>
                <div class="server-element php flex-grow-1" :class="serverColorCircle(5, 9)">
                    <v-tooltip left>
                        <template v-slot:activator="{ on, attrs }">
                            <v-img width="13em" contain src="/front-back/php.png" v-bind="attrs" v-on="on" />
                        </template>
                        <span>PHP est un programme installé sur le serveur et qui peut interpréter le langage PHP</span>
                    </v-tooltip>

                    <div v-if="step >= 5" class="tooltip-style d-inline-block">
                        PHP va chercher toutes les infos nécessaire pour construire le HTML/CSS/JS
                    </div>
                </div>
                <div class="flex-grow-1">giuvgui eg ervg jkgvkg kvgejkvg grzegjb b gkebgk kfd bkb gkjdb jkbjkb dfjkb jkb jkerg er  ebjkgvjk kjbgvk bekb kvjebjkbvezfeergergerhk ebkv </div>
                <div class="server-element database flex-grow-1" :class="serverColorCircle(7, 8)">
                    <v-tooltip left>
                        <template v-slot:activator="{ on, attrs }">
                            <v-img width="13em" contain src="/front-back/database.png" v-bind="attrs" v-on="on" />
                        </template>
                        <span>La base de données contient les données du projet</span>
                    </v-tooltip>

                    <div v-if="step >= 7" class="tooltip-style d-inline-block">
                        La BDD traite la demande
                    </div>
                </div>
            </div>

            <v-btn class="btn-step btn-step-next" @click="nextStep()">Étape suivante</v-btn>
        </v-col>

        <div v-if="step >= 2" class="askRequest askApache">
            <div class="tooltip-style d-inline-block mb-3">
                Le client contacte le serveur pour lui demander la page à afficher
            </div>
            <v-progress-linear indeterminate height="8" color="green"></v-progress-linear>
            <v-icon>mdi-menu-right</v-icon>
        </div>

        <div v-if="step >= 4" class="askRequest askPhp">
            <div class="tooltip-style d-inline-block mb-3">
                Apache demande à PHP de construire le HTML/CSS/JS de la page
            </div>
            <v-progress-linear indeterminate height="8" color="green"></v-progress-linear>
            <v-icon>mdi-menu-right</v-icon>
        </div>

        <div v-if="step >= 6" class="askRequest askDatabase">
            <div class="tooltip-style d-inline-block mb-3">
                Si nécessaire, PHP demande à la BDD de lui donner certaines infos
            </div>
            <v-progress-linear indeterminate height="8" color="green"></v-progress-linear>
            <v-icon>mdi-menu-right</v-icon>
        </div>

        <div v-if="step >= 8" class="responseRequest responseDatabase">
            <div class="tooltip-style d-inline-block mb-3">
                La BDD donne à PHP les données demandées
            </div>
            <v-progress-linear indeterminate height="8" color="green" reverse></v-progress-linear>
            <v-icon>mdi-menu-left</v-icon>
        </div>

        <div v-if="step >= 9" class="responseRequest responsePhp">
            <div class="tooltip-style d-inline-block mb-3">
                PHP envoi le code HTML/CSS/JS qu'il a fabriqué
            </div>
            <v-progress-linear indeterminate height="8" color="green" reverse></v-progress-linear>
            <v-icon>mdi-menu-left</v-icon>
        </div>

        <div v-if="step >= 10" class="responseRequest responseApache">
            <div class="tooltip-style d-inline-block mb-3">
                Apache envoi au client le code HTML/CSS/JS qui a été fabriqué
            </div>
            <v-progress-linear indeterminate height="8" color="green" reverse></v-progress-linear>
            <v-icon>mdi-menu-left</v-icon>
        </div>

        <div v-if="step >= 11" class="showPage tooltip-style d-inline-block">
            Le navigateur récupère le code HTML/CSS/JS fourni par le serveur, puis il l'interprête pour afficher la page
        </div>
    </v-row>

</template>

<script>
export default {
    layout: "support",
    name: 'InspirePage',
    data: function() {
        return {
            step: 0,
        }
    },
    methods: {
        prevStep() {
            if (this.step > 0) {
                this.step = this.step - 1;
            }
        },
        nextStep() {
            if (this.step < 11) {
                this.step = this.step + 1;
            }
        },
        serverColorCircle(stepForGreen, stepForOrange) {
            if (this.step >= stepForOrange) {
                return 'finished';
            }

            if (this.step >= stepForGreen) {
                return 'active';
            }
        },
    },
}
</script>

<style lang="scss">

#front-back {
    > .col {
        background-color: #5a6f8b;
        height: 100vh;

    }

    font-size: 0.8vw;

    #front-side, #back-side {
        background-color: #1f3e5e;
        height: 100vh;
    }

    #back-side {
        border-left: 1px solid;
    }

    #front-side {
        background-color: #5a6f8b;

        .screen {
            border: .7em solid;
            border-radius: .35em;
            width: 33em;
            height: 21.8em;
            margin: 8em auto 0;

            .oclock-site {
                margin-top: -1px;
            }

            .empty-screen {
                padding: 2em 1em;

                .row {
                    margin-bottom: 2em;
                }
            }
        }

        .footOne {
            background-color: #fff;
            width: 6em;
            height: 3.5em;
            margin: auto;
        }

        .footTwo {
            background-color: #fff;
            width: 10em;
            height: .7em;
            margin: auto;
            border-radius: .35em;
        }

        .v-image {
            margin: 1em auto;
            display: inline-block;
        }
    }

    #back-side {
        .server {
            margin: 8em auto 0;

            .v-image {
                margin: 2em auto 0;
                border: .2em solid;
                border-radius: 100%;
                width: 13em;
                height: 13em;
            }


            .server-element {
                margin: auto;
                height: 30em;

                &.active {
                    .v-image {
                        background-color: #4CAF50;
                    }
                }

                &.finished {
                    .v-image {
                        background-color: #b35e2e;
                    }
                }

                .tooltip-style {
                    margin: auto;
                    position: relative;
                    // top: 8em;
                    top: 2em;
                    width: 50%;
                }
            }
        }
    }


    .tooltip-style {
        background-color: rgba(97, 97, 97, 0.9);
        padding: 5px 16px;
        border-radius: .25em;
    }

    .btn-step {
        position: absolute;
        bottom: 3em;
        width: 13em;
        padding: 2em 0;

        &.btn-step-prev {
            right: 50vw;
        }

        &.btn-step-next {
            left: 50vw;
        }
    }

    .askRequest {
        position: absolute;
        bottom : 41em;

        .v-icon {
            position: relative;
            top: -0.583em;
            font-size: 2.5em;
            color: #4CAF50;
        }

        .tooltip-style {
            position: absolute;
            bottom: 3em;
        }

        &.askApache {
            left: 47.5em;
            width: 17.5em;

            .v-icon {
                left: 6.57em;
            }
        }

        &.askPhp {
            left: 76.1em;
            width: 8.65em;

            .v-icon {
                left: 3.05em;
            }
        }

        &.askDatabase {
            left: 95.6em;
            width: 8.7em;

            .v-icon {
                left: 3.05em;
            }
        }
    }

    .responseRequest {
        position: absolute;
        bottom : 30em;

        .v-icon {
            position: relative;
            top: -0.583em;
            font-size: 2.5em;
            color: #4CAF50;
        }

        .tooltip-style {
            position: absolute;
            top: 1.4em;
        }

        &.responseDatabase {
            left: 95.6em;
            width: 8.7em;

            .v-icon {
                left: -0.6em;
            }
        }

        &.responsePhp {
            left: 76.1em;
            width: 8.65em;

            .v-icon {
                left: -0.55em;
            }
        }

        &.responseApache {
            left: 47.5em;
            width: 17.5em;

            .v-icon {
                left: -0.55em;
            }
        }
    }

    .showPage {
        position: absolute;
        top: 21em;
        left: .7em;
        width: 12em;
    }


}



</style>