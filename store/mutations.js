export default {
  // ARTIGOS ::
  set_artigosDestaque(state, payload) {
    state.artigosDestaque = payload
  },
  set_artigos(state, payload) {
    state.artigos = payload
  },
  set_artigo(state, payload) {
    state.artigo = payload[0]
  },

  // QUEM SOMOS ::
  set_quemSomos(state, payload) {
    state.quemSomos = payload
  },

  // MUNDOPLAY ::
  set_MundoPlayCategorias(state, payload) {
    state.mundoPlayCategorias = payload
  },
  set_MundoPlayCategoriasPage(state, payload) {
    state.mundoPlayCategoriasPage = payload
  },

  set_pagination(state, payload) {
    state.pagination = payload
  },

  // PODCAST ::
  set_podcastEpisodios(state, payload) {
    state.podcastEpisodios = payload
  },
}
