import { render, screen } from '@testing-library/react';
import { App } from './App';
import data from './data.json';

describe('prueba en el componente App', () => {
  beforeAll( () => jest.spyOn( window, 'fetch' ));

  // it('renders learn react link', () => {
  //   render(<App />);
  //   expect (screen.getByText("Luke Skywalker")).toBeInTheDocument();
  // });


  // it('mostrar cada uno de los nombres del archivo JSON', ()=>{
  //   render(<App />);

  //   for(let character of data.results) {
  //     expect(screen.getByText(character.name)).toBeInTheDocument();
  //   }
  //});


  it('debe mostrar los character desde la API', async() => {

    window.fetch.mockResolvedValueOnce({
      ok:true,
      json: async ()=> data
    })
    render(<App />);

    expect( window.fetch ).toHaveBeenCalledTimes(1);
    expect( window.fetch ).toHaveBeenCalledWith("https://swapi.dev/api/people/");

    for(let character of data.results) {
      expect(await screen.findByText(character.name)).toBeInTheDocument();
    }
  });




})

