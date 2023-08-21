class Pokemon {
    constructor(gender, type, lvl, name) {
        this.gender = gender;
        this.type = type;
        this.lvl = lvl;
        this.name = name;
    }
    pokeCry() {
        console.log(`O pokémon: ${this.name} está fazendo barulho!`);
    }
    looksForPoke() {
        console.log("Rastreando Pokémons!");
    }
}


export { Pokemon as default };
