<template>
  <div id="frontBack" class="text-center">
    <v-row id="header">
      <v-col cols="6">
        <h1>CLIENT</h1>
        <h3>Le client représente le navigateur du client</h3>
      </v-col>

      <v-col cols="6" class="backSide">
        <h1>SERVEUR</h1>
        <h3>Le serveur représente la machine qui héberge les pages du site visité</h3>
      </v-col>
    </v-row>

    <v-row id="main">
      <!-- Coté FRONT -->
      <v-col class="frontSide" cols="6">
        <v-row>
          <!-- A gauche de l'image d'écran -->
          <v-col cols="2">
            <div v-if="step >= 11" class="tooltipStyle d-inline-block tooltipStep11">
              Le navigateur récupère le code HTML/CSS/JS fourni par le serveur, puis il l'interprête pour afficher la page
            </div>
          </v-col>

          <!-- Le centre de la partie client -->
          <v-col cols="8" class="text-center">
            <!-- L'image d'écran -->
            <div class="screen">
              <!-- La photo du site de O'clock -->
              <v-img v-if="step >= 11" src="/front-back/oclock.png" />

              <!-- Le contenu de l'écran avant d'afficher la photo du site de O'clock -->
              <div v-else class="screenNavigators">
                <!-- Icones navigateurs -->
                <v-row>
                  <v-col cols="4"><v-img width="7em" src="/front-back/chrome.png" class="mb-5" /></v-col>
                  <v-col cols="4"><v-img width="7em" src="/front-back/firefox.png" class="mb-5" /></v-col>
                  <v-col cols="4"><v-img width="7em" src="/front-back/internet-explorer.png" class="mb-5" /></v-col>
                </v-row>

                <!-- Input URL Readonly -->
                <v-text-field outlined disabled dense :value="step > 0 ? 'https://oclock.io' : ''" />
              </div>
            </div>
            <div class="screenFootOne"></div>
            <div class="screenFootTwo"></div>

            <div v-if="step >= 1" class="tooltipStyle d-inline-block mt-3">
              L'utilisateur tape un nom de domaine sur son navigateur
            </div>
          </v-col>

          <!-- A droite de l'image d'écran -->
          <v-col cols="2">
            <div v-if="step >= 2" class="askRequest askApache">
              <v-progress-linear indeterminate height="8" color="green" />
              <v-icon>mdi-menu-right</v-icon>

              <div class="tooltipStyle d-inline-block mb-3">
                Le client contacte le serveur pour lui demander la page à afficher
              </div>
            </div>

            <div v-if="step >= 10" class="responseRequest responseApache">
              <v-progress-linear indeterminate height="8" color="orange" reverse />
              <v-icon>mdi-menu-left</v-icon>

              <div class="tooltipStyle d-inline-block mb-3">
                Apache envoi au client le code HTML/CSS/JS qui a été fabriqué
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <!-- Coté BACK -->
      <v-col class="backSide" cols="6">
        <v-row>
          <!-- Colonne Apache -->
          <v-col cols="2" class="offset-1">
            <div class="serverElement apache" :class="serverColorCircle(3, 10)">
              <v-img src="/front-back/apache.png" contain v-bind="attrs" v-on="on" />

              <div v-if="step >= 3" class="tooltipStyle d-inline-block mt-3">
                Apache reçoit la requête et cherche les fichiers liés à la page demandée
              </div>
            </div>
          </v-col>

          <v-col cols="2">
            <div v-if="step >= 4" class="askRequest askPhp">
              <v-progress-linear indeterminate height="8" color="green" />
              <v-icon>mdi-menu-right</v-icon>

              <div class="tooltipStyle d-inline-block mb-3">
                Apache demande à PHP de construire le HTML/CSS/JS de la page
              </div>
            </div>

            <div v-if="step >= 9" class="responseRequest responsePhp">
              <v-progress-linear indeterminate height="8" color="orange" reverse />
              <v-icon>mdi-menu-left</v-icon>

              <div class="tooltipStyle d-inline-block mb-3">
                PHP envoi le code HTML/CSS/JS qu'il a fabriqué à Apache
              </div>
            </div>
          </v-col>

          <!-- Colonne PHP -->
          <v-col cols="2">
            <div class="serverElement php" :class="serverColorCircle(5, 9)">
              <v-img src="/front-back/php.png" contain v-bind="attrs" v-on="on" />

              <div v-if="step >= 5" class="tooltipStyle d-inline-block mt-3">
                PHP va chercher toutes les infos nécessaire pour construire le HTML/CSS/JS
              </div>
            </div>
          </v-col>

          <v-col cols="2">
            <div v-if="step >= 6" class="askRequest askDatabase">
              <v-progress-linear indeterminate height="8" color="green" />
              <v-icon>mdi-menu-right</v-icon>

              <div class="tooltipStyle d-inline-block mb-3">
                Si nécessaire, PHP demande à la BDD de lui donner certaines infos
              </div>
            </div>

            <div v-if="step >= 8" class="responseRequest responseDatabase">
              <v-progress-linear indeterminate height="8" color="orange" reverse />
              <v-icon>mdi-menu-left</v-icon>

              <div class="tooltipStyle d-inline-block mb-3">
                La BDD donne à PHP les données demandées
              </div>
            </div>
          </v-col>

          <!-- Colonne BDD -->
          <v-col cols="2">
            <div class="serverElement database" :class="serverColorCircle(7, 8)">
              <v-img src="/front-back/database.png" contain v-bind="attrs" v-on="on" />

              <div v-if="step >= 7" class="tooltipStyle d-inline-block mt-3">
                La BDD traite la demande
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row id="footer">
      <v-col cols="6" class="text-right">
        <v-btn class="btnStep btnStepPrev mr-5" @click="prevStep()" >Étape précédente</v-btn>
      </v-col>

      <v-col cols="6" class="text-left backSide">
        <v-btn class="btnStep btnStepNext ml-5" @click="nextStep()" >Étape suivante</v-btn>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  layout: "support",
  name: "InspirePage",
  data: function () {
    return {
      step: 0,
    };
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
        return "finished";
      }

      if (this.step >= stepForGreen) {
        return "active";
      }
    },
  },
};
</script>

<style lang="scss">

$headerHeight: 15vh;
$footerHeight: 11vh;

#frontBack {

  font-size: 0.8vw;

  background-color: #5a6f8b;

  .tooltipStyle {
    background-color: rgba(39, 39, 39, 0.9);
    padding: .4em .8em;
    border-radius: 7px;
    margin: auto;
  }

  .backSide {
    background-color: #1f3e5e;
    border-left: 1px solid;
  }

  #header {
    > .col {
      height: $headerHeight;
    }
  }

  #footer {
    > .col {
      height: $footerHeight;
    }

    .btnStep {
      font-size: 1em;
      width: 15em;
      padding: 2em 1em;
    }
  }

  #main {
    > .col {
      height: 100vh - $headerHeight - $footerHeight;
    }

    .frontSide {
      .screen {
        border: 10px solid #000;
        border-radius: 7px;
        width: 100%;
        aspect-ratio: 614/407;
        margin: 50px auto 0;

        .screenNavigators {
          padding: 2em 1em;

          .row {
            margin-bottom: 2em;
          }

          .v-image {
            margin: 50px auto 0;
          }
        }
      }

      .screenFootOne {
        background-color: #000;
        width: 100px;
        height: 50px;
        margin: auto;
      }
      .screenFootTwo {
        background-color: #000;
        width: 140px;
        height: 10px;
        margin: auto;
        border-radius: 7px;
      }
    }

    .backSide {
      .serverElement {
        margin: 160px auto 0;

        .v-image {
          border: 1px solid;
          border-radius: 100%;
          height: calc(100vw / 12 - 24px);
          aspect-ratio: 1;
          margin: auto;
        }

        &.active {
        .v-image {
            background-color: #4caf50;
          }
        }

        &.finished {
          .v-image {
            background-color: #FF9800;
          }
        }
      }
    }
  }

  .askRequest, .responseRequest {
    position: relative;

    .v-icon {
      position: absolute;
      top: -1rem;
      font-size: 2.5rem;
      color: #4caf50;
    }

    .tooltipStyle {
      position: absolute;
      left: 0;
    }
  }

  .askRequest {
    margin-top: 175px;

    .v-icon {
      right: -18px;
    }

    .tooltipStyle {
      bottom: 5px;
    }

    &.askApache {
      width: 160%;
    }
  }

  .responseRequest {
    margin-top: calc((100vw / 12) / 1.4 - 24px);

    .v-icon {
      left: -18px;
      color: #FF9800;
    }

    .tooltipStyle {
      top: 17px;
    }

    &.responseApache {
      width: 160%;
    }
  }

  .tooltipStep11 {
    margin-top: 140px;
    margin-left: 10px;
  }

}

</style>
