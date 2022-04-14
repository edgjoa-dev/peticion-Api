

export const getPeople = () => {

    const getcharacters = async() => {

        const url = 'https://swapi.dev/api/people/';
        const resp = await fetch(url);
        const data = await resp.json();

        return data;
    }

    return getcharacters();

}
