interface IPokemonBoxName{
    name:string|undefined;
    miniSprite:string;
}


const PokemonBoxName=({name,miniSprite}:IPokemonBoxName)=>{
    return(
                <div className='pokemon-box-name'>
                    <div className='pokemon-box-name-layer'>
                        <div className='pokemon-mini-image' style={{ backgroundImage: `url("${miniSprite}")` }} ></div>
                        <h5>{name}</h5>
                        <div className='pokeball-icon'></div>
                    </div>
                </div>
    );
}
export default PokemonBoxName;