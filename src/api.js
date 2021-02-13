import axios from "axios";

const url = "https://pokemongame-backend.herokuapp.com/pokemons";

const Api = {
  getAll: () => axios.get(url),
  getPokeById: (id) => axios.get(`${url}/${id}`),
  getPokeInfoById: (id, info) => axios.get(`${url}/${id}/${info}`),
};

export default Api;
