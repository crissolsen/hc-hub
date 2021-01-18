<template>
  <div id="game-page">
      <TheNavBar />
      <p>How many steps in your robot's program?</p>
      <input id="set-div-length" type="number" v-model.number= "divLength" max="5" />
      <p>How long does each step take?</p>
      <input type="number" v-model.number= "timer" />
      <button @click = "lengthCheck">Ready!</button>
      <div id="game-wrapper" v-if= "ready">
        <div v-for= "index in divLength" :key= "index"  >
            <div class="colour-block" :id= "`block-${index}`" :style= "`background: ${initialRandomiser()}`" @click= "setRandomColour(index)"><h4>{{ actions[~~(Math.random()*actions.length)] }}</h4></div>
            <h3 style="text-align: center;">Step {{ index }}</h3>
      </div> 
      </div>
      <button v-if= "ready" @click= "go">Go!</button>
      <button v-if= "ready" @click= "reset">Reset</button>
  </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Robot Game 2021"
        }
      },
    data() {
        return {
            divLength: 1,
            ready: false,
            actions: ["jump", "hop right foot", "say something silly", "stick out tongue", "spin around", "sit down", "touch ears", "touch nose", "touch toes", "laugh", "blink 5 times", "tickle yourself", "hop left foot", "squeak like a mouse", "spin around", "touch chin", "touch shoulders", "touch shin", "touch knees", "scratch elbow", "pinch tummy"],
            timer: 2,
            timerRunning: false,
            divLengthMax: 100
        }
    },
    methods: {
        setRandomColour(index) {
            const selectedBlock = document.getElementById("block-" + index)
            selectedBlock.style.background = "rgb(" + Math.floor(Math.random()* 255) +","+ Math.floor(Math.random()* 255) + "," + Math.floor(Math.random()* 255) + ")"
            selectedBlock.innerHTML = "<h4>" + this.actions[~~(Math.random()*this.actions.length)] + "</h4>"
        },
        initialRandomiser() {
            return "rgb(" + Math.floor(Math.random()* 255) +","+ Math.floor(Math.random()* 255) + "," + Math.floor(Math.random()* 255) + ")"
        },
        go() {
            let initialClass = 1
            this.timerRunning = true
            if (this.timerRunning) {
                setInterval(()=> {
                    let lengthOfDivs = document.querySelectorAll('.colour-block').length
                    if(initialClass > lengthOfDivs || !this.timerRunning) {
                        console.log("Cleared!")
                        initialClass = 1
                        return
                    }
                    let selected = document.getElementById(`block-${initialClass}`)
                    selected.classList.add('active-class')
                    initialClass += 1
                }, this.timer*1000)
          }
        },
        reset() {
            this.timerRunning = false
            let allBlocks = document.querySelectorAll('.colour-block')
            for (let i=0; i < allBlocks.length; i++ ) {
               allBlocks[i].classList.remove('active-class')
             }

            // location.reload()
        },
        lengthCheck() {
            if (this.divLength < this.divLengthMax) {
            this.ready = !this.ready
            } else {
                alert(`The maximum number of steps is ${this.divLengthMax}, please try again.`)
            }
        } 
    }
 }
</script>


<style>
    #game-wrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    #game-page input {
        margin: 0 auto;
        font-size: 1em;
        text-align: center;
        font-family: 'Comfortaa', sans-serif;
    }

    #game-page button {
        background: #00735cff;
        padding: 1em;
        border-radius: 10px;
        color: white;
        text-decoration: none;
        margin-left: 1em;
        /* box-shadow: 5px 5px 2px 2px #606462ff; */
        font-weight: 800;
        /* border: 2px solid black; */
        border: none;
        font-family: 'Comfortaa', sans-serif;
    }

    .colour-block {
        height: 18vmax;
        width: 18vmax;
        background: blue;
        text-align: center;
        font-size: 1.5em;
        color:white;
        cursor: pointer;
        margin: 0.3em;
    }

    @media screen and (max-width: 400px){
        .colour-block {
            font-size: 1em;
        }
    }

    .colour-block h4 {
        background: black;
    }

    .active-class {
        border: 5px solid black;
        border-radius: 10%;
    }

    .active-class h4 {
        background: black !important;
        font-size: 1em;
    }
</style>