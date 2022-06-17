<template>
  <div id="frontBack" class="text-center">
    <div id="header">
      <v-row class="big-title">
        <v-col cols="12">
          <h1>API : Communication entre le FrontEnd et le BackEnd → Analogie Restaurant</h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <h1>LA SALLE (le front-end)</h1>
          <h3>Les clients ont un besoin : ils doivent grailler</h3>
        </v-col>

        <v-col cols="6" class="backSide">
          <h1>LA CUISINE (le back-end)</h1>
          <h3>En cuisine, tout est mis en oeuvre pour répondre aux besoins des clients</h3>
        </v-col>
      </v-row>
    </div>

    <v-row id="main">
      <!-- Coté FRONT -->
      <v-col class="frontSide" cols="6">
        <v-row>
          <v-col cols="6" class="text-center offset-1">
            <v-img :src="require('/static/api-front-back/client-table.png')" />
            <v-img :src="require('/static/api-front-back/bubble-customer.png')" class="bubble bubble-customer" width="40%" :class="displayBubbleCustomer" />
          </v-col>

          <v-col cols="5">
            <v-img :src="require('/static/api-front-back/serveur.png')" class="waiter" :class="displayWaiter" />
            <!--<v-img :src="require('/static/api-front-back/serveur-postit.png')" class="waiter-note" :class="displayWaiterNote" />-->
            <v-img :src="require('/static/api-front-back/post-it.png')" class="post-it" :class="displayPostIt" width="20%" />
            <v-img :src="require('/static/api-front-back/bubble-waiter.png')" class="bubble bubble-waiter" width="40%" :class="displayBubbleWaiter" />
          </v-col>
        </v-row>
      </v-col>

      <!-- Coté BACK -->
      <v-col class="backSide" cols="6">
        <v-row>
          <v-col cols="5" class="offset-1">
            <v-img :src="require('/static/api-front-back/cuisinier.png')" class="chief" :class="displayChief" />
            <v-img :src="require('/static/api-front-back/bubble-chief-1.png')" class="bubble bubble-chief-1" width="40%" :class="displayBubbleChief1" />
            <v-img :src="require('/static/api-front-back/bubble-chief-2.png')" class="bubble bubble-chief-2" width="40%" :class="displayBubbleChief2" />
          </v-col>

          <v-col cols="5">
            <v-row>
              <v-col cols="9" class="offset-3">
                <v-img width="70%" :src="require('/static/api-front-back/frigo.png')" class="frigo" />
                <v-img width="40%" :src="require('/static/api-front-back/jambon.png')" class="ham" :class="displayHam" />
                <v-img width="70%" :src="require('/static/api-front-back/four.png')" class="four" />
                <v-img width="35%" :src="require('/static/api-front-back/pizza.png')" class="pizza" :class="displayPizza" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row id="description">
      <v-col cols="6" class="text-center">
        <v-row>
        <v-col cols="6">
          <div v-if="stepAnalogy">
            <h3 class="mb-3">Ce qui se passe dans notre resto</h3>
            <div class="tooltipStyle d-inline-block" v-html="stepAnalogy"></div>
          </div>
        </v-col>
        <v-col cols="6">
          <div v-if="stepAnalogyTranslation">
            <h3 class="mb-3">Équivalent en informatique</h3>
            <div class="tooltipStyle d-inline-block" v-html="stepAnalogyTranslation"></div>
          </div>
        </v-col>
        </v-row>
      </v-col>

      <v-col cols="6" class="backSide"></v-col>
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
  head() {
    return {
      title: "API : Front → Back"
    };
  },
  layout: "support",
  name: "ApiFrontBackPage",
  data: function () {
    return {
      step: 0,
    };
  },
  computed: {
    stepAnalogy() {
      switch (this.step) {
        case 0: return "Les clients ont lu le menu et on fait leur choix";
        case 1: return "Les clients interpellent le serveur et passe commande";
        case 2: return "\"Lire la bulle\"";
        case 4: return "Le serveur transmet la demande des clients à la cuisine";
        case 6: return "Luigi le cuisto va utiliser ses couteaux et autres ustensiles, chercher les bons ingrédients et faire le plat demandé";
        case 9: return "Le plat est prêt, il faut l'envoyer aux clients";
        case 11: return "La cuisine donne le plat au serveur pour qu'il le donne aux clients";
        case 13: return "Le serveur donne le plat aux clients, ils peuvent en faire ce qu'ils veulent (frisbee de pizza YOUHOU !!!)";
        default: "";
      }
    },
    stepAnalogyTranslation() {
      switch (this.step) {
        case 0: return "Le développeur FrontEnd à regarder la doc de l'API et sait laquelle appeler pour avoir les data dont il a besoin";
        case 1: return "Le développeur code l'appel à l'API et l'utilise";
        case 2: return "Salut API, je voudrais la liste complète des catégories";
        case 4: return "L'API transmet la demande du FrontEnd au BackEnd";
        case 6: return "Le BackEnd va utiliser ses applications (PHP, BDD, etc), chercher les data nécessaires et composer la liste de catégories demandée";
        case 9: return "Les liste de catégorie est prête, il faut la transmettre au FrontEnd";
        case 11: return "Le BackEnd donne la liste de catégories à l'API pour qu'elle la donne au FrontEnd";
        case 13: return "L'API donne la liste de catégories au FrontEnd, il peut en faire ce qu'il veut";
        default: "";
      }
    },
    displayWaiter() {
      switch (true) {
        case this.step === 1:
        case this.step === 2:
        case this.step === 3:
        case this.step === 12:
        case this.step === 13:
          return 'waiterNextToTheCustomer';
        default:
          return '';
      }
    },
    displayPostIt() {
      switch (true) {
        case this.step <= 2 || this.step >= 6:
          return 'd-none';
        case this.step >= 4 && this.step < 6:
          return 'postItInKitchen';
        default:
          return '';
      }
    },
    displayChief() {
      switch (true) {
        case this.step > 5 && this.step < 10:
          return 'chiefNextToTheStove';
        case this.step === 9:
          return 'chiefNextTheWaiter';
        default:
          return '';
      }
    },
    displayHam() {
      switch (true) {
        case this.step === 7:
          return 'hamInOven';
        case this.step >= 8:
          return 'hamInOvenHidden';
        default:
          return '';
      }
    },
    displayPizza() {
      switch (true) {
        case this.step === 8:
          return 'pizzaInOven';
        case this.step === 9:
          return 'pizzaInChiefHand';
        case this.step === 10:
          return 'pizzaInChiefHandBeforeWaiter';
        case this.step === 11:
          return 'pizzaInWaiterHand';
        case this.step === 12:
          return 'pizzaInWaiterHandBeforeCustomer';
        case this.step === 13:
          return 'pizzaOnTable';
        default:
          return '';
      }
    },
    displayBubbleCustomer() {
      switch (true) {
        case this.step === 2:
          return '';
        default:
          return 'd-none';
      }
    },
    displayBubbleWaiter() {
      switch (true) {
        case this.step === 13:
          return '';
        default:
          return 'd-none';
      }
    },
    displayBubbleChief1() {
      switch (true) {
        case this.step === 5:
          return '';
        default:
          return 'd-none';
      }
    },
    displayBubbleChief2() {
      switch (true) {
        case this.step === 11:
          return '';
        default:
          return 'd-none';
      }
    },
  },
  methods: {
    prevStep() {
      if (this.step > 0) {
        this.step = this.step - 1;
      }
    },
    nextStep() {
      if (this.step < 13) {
        this.step = this.step + 1;
      }
    },
  },
};
</script>

<style lang="scss">

$headerHeight: 15vh;
$descriptionHeight: 20vh;
$footerHeight: 11vh;

#frontBack {

  font-size: 0.8vw;

  background-color: #aaa;

  .tooltipStyle {
    background-color: rgba(39, 39, 39, 0.9);
    padding: .4em .8em;
    border-radius: 7px;
    margin: auto;
  }

  .backSide {
    background-color: #555;
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

  #description {
    height: $descriptionHeight
  }

  #main {
    > .col {
      height: 100vh - $headerHeight - $descriptionHeight - $footerHeight;
    }

    .waiter, .waiter-note, .chief, .ham, .pizza, .bubble, .post-it {
      transition: top .5s, left .5s;
      top: 0;
      left: 0;
    }

    .waiter, .waiter-note {
      left: 13.5vw;
    }

    .waiterNextToTheCustomer {
      left: -2vw;
    }

    .chiefNextToTheStove {
      left: 12vw;
    }

    .chiefNextTheWaiter {
      left: -2vw;
    }

    .frigo, .four, .ham, .pizza {
      margin: auto;
    }

    .frigo {
      z-index: 2;
    }

    .ham {
      top: -4.55vw;
    }

    .hamInFridge {
      top: -5vw;
    }

    .hamInOven {
      top: 17vw;
    }

    .hamInOvenHidden {
      top: 17vw;
      opacity: 0;
    }

    .four {
      margin-top: 9vw;
      z-index: 2;
    }

    .pizza {
      opacity: 0;
      top: -6vw;
    }

    .pizzaInOven {
      opacity: 1;
    }

    .pizzaInChiefHand {
      opacity: 1;
      top: -20vw;
      left: -7.2vw;
    }

    .pizzaInChiefHandBeforeWaiter {
      opacity: 1;
      top: -20vw;
      left: -19.2vw;
    }

    .pizzaInWaiterHand {
      opacity: 1;
      top: -33vw;
      left: -31.8vw;
    }

    .pizzaInWaiterHandBeforeCustomer {
      opacity: 1;
      top: -33vw;
      left: -47.3vw;
    }

    .pizzaOnTable {
      opacity: 1;
      top: -24vw;
      left: -72vw;
    }

    .post-it {
      top: -20.5vw;
      left: 9.3vw;
    }

    .postItInKitchen {
      left: 24.8vw
    }

    .bubble-customer {
      top: -25vw;
      left: 7vw;
    }

    .bubble-chief-1 {
      top: -20vw;
      left: 13vw;
    }

    .bubble-chief-2 {
      top: -20vw;
      left: 13vw;
    }

    .bubble-waiter {
      top: -24vw;
      left: 7vw;
    }
  }

  .tooltipStyle {
    background-color: rgba(39, 39, 39, 0.9);
    padding: .4em .8em;
    border-radius: 7px;
    margin: auto;
  }

  #description {
    font-size: 12px;
  }

  .big-title {
    background-color: #000;
  }
}

</style>
