export interface pokeData {
    id: number;
    name: string;
    imgUrl: string;
}

const totalCards = 50;
const maxCardsToShow = 12;

let db: pokeData[] = [];
const pokeIds = [...Array(totalCards).keys()].map((v) => v + 1);
let initialFetch: Promise<void> | null = null;

function fetchData() {
    if (initialFetch !== null) return initialFetch;
    return (initialFetch = fetchFromAPI());
}

async function fetchFromAPI() {
    const data = await Promise.all(
        pokeIds.map((id) =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((res) => {
                if (res.status === 404) throw new Error("error 404");
                else return res.json();
            }),
        ),
    );

    db = data.map((pokemon) => extractData(pokemon));
}

function getRandomCards(): pokeData[] {
    const cards = new Set<pokeData>();
    while (cards.size < maxCardsToShow) {
        const index = Math.floor(Math.random() * totalCards);
        cards.add(db[index]);
    }

    return [...cards];
}

function extractData(pokemon: {
    id: number;
    name: string;
    sprites: { front_default: string };
}): pokeData {
    return {
        id: pokemon.id,
        name: pokemon.name,
        imgUrl: pokemon.sprites.front_default,
    };
}

export { fetchData, getRandomCards };
