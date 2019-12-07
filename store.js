 //This is the store-file ---> index.js in the class. I named it store.js since I do not
//have a store yet :) SOME Default will prob. appear in the index.js in the Store when 
//imported from the browser view/App

    mutations: {},
    setIsUserWinner(state, choices) {
        let isUserWinner
        if (choices.userChoice === 'rock' && 
        choices.computerChoice === 'scissor') {
            isUserWinner = true;
        } else if (choices.userChoice === 'paper' && 
        choices.computerChoice === 'rock') {
            isUserWinner = true;
        } else if (choices.userChoice === 'scissors' &&
        choices.computerChoice === 'paper') {
            isUserWinner = true;
        } else if (choices.userChoice === 
        choices.computerChoice) {
            isUserWinner = false;
        } else {
            isUserWinner = false;
        }
        // return this.isUserWinner;
        state.isUserWinner = isUserWinner
        },
    },
actions: {
    playGame({commit, state} userSelection) {
        const computerChoice = state.choices //const bc we are not updating it
        [Math.floor(Math.random() *
        state.choices.length)];
        const userChoice = userSelection
        //this.userChoice = document.querySelector
        //('.radio:checked').value;
        console.log(.userChoice, computerChoice, 
        state.isUserWinner); //isUserWinner is still a state!
        commit('setIsUserWinner', {computerChoice, userChoice}) //creating an object
        //this.checkWinner();
        //this.showResult = !this.showResult;
        }
    },
modules: {},
});


