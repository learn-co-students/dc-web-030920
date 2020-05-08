class App {
  constructor(trainers){
    this.name = "Awesome Pokemon Teams"
    this.trainers = trainers.map( trainer => new Trainer(trainer.id, trainer.name, trainer.pokemons) )
  }

//in order to get dynamic data, use instance variables
  render(){
    let giantHTML = this.trainers.map( trainer => trainer.render() ).join("")
    return `
    <header>
      <h2>${this.name}!</h2>
     </header>
     <main>
        ${giantHTML}
     </main>`
  }

}
