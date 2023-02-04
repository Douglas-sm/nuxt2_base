import Vue from 'vue'

export default {
  // QUEM SOMOS ::
  async getQuemSomos({ commit }) {
    const response = await this.$axios.$get('quem-somos/', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    commit('set_quemSomos', response)
  },

  // ARTIGOS ::
  getArtigos({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$get(`artigos/?limit=12&page=${payload.page}`)
      .then(function (response) {
        commit('set_artigos', response)
        resolve(response)
      })
      .catch(function (error) {
        resolve(error)
      });
    });
  },

  // ARTIGOS DESTAQUE ::
  getArtigosDestaque({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$get(`artigos-destaque`)
      .then(function (response) {
        commit('set_artigosDestaque', response)
        resolve(response)
      })
      .catch(function (error) {
        resolve(error)
      });
    });
  },

  // ARTIGO ::
  getArtigo({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$get(`artigo/${payload.slug}`)
      .then(function (response) {
        commit('set_artigo', response)
        resolve(response)
      })
      .catch(function (error) {
        resolve(error)
      });
    });
  },

  // MUNDO PLAY ::
  async getMundoPlayCategorias({ commit }) {
    const response = await this.$axios.$get(`mundoplay-categorias`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    commit('set_MundoPlayCategorias', response)
  },

  // MUNDO PLAY CATEGORIAS LISTA SCROLLER ::
  async getMundoPlayCategoriasLista({ commit }, payload) {

    this.$axios.$get(`mundoplay-programas/${payload.categorie}?limit=12`, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
        return response
    }).catch(error => {
        return error
    })
  },

  // MUNDO PLAY CATEGORIAS PAGE ::
  getMundoPlayCategoriasPage({ commit }, payload) {
    this.$axios.$get(`mundoplay-programas/${payload.slug}?page=${payload.page}&limit=12`)
    .then(response => {
        console.log(response)
        commit('set_MundoPlayCategoriasPage', response)
    }).catch(error => {
        return error
    })
  },

  // HOME - FRASE ::
  getFraseDestaque () {
    return new Promise((resolve, reject) => {
      this.$axios.$get(`frase-destaque`)
      .then(function (response) {
        resolve(response[0])
      })
      .catch(function (error) {
        resolve(error)
      });
    });
  },











  /* TESTES ----------------------------------------------------------------------------------------- */
  async getCategorias({ commit }) {

    /*
    const result = await this.$axios.$get('items/Categoria?access_token=6fzjYJvqMkRZgU6bqI0Xku6A3Q5z7Pez', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    */
    const result = await this.$axios.$get('items/categorias', {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log(result.data)
    commit('set_categorias', result.data)
  },

  async postCategorias({ commit }, payload) {
    const result = await this.$axios.$post('items/Categoria?access_token=6fzjYJvqMkRZgU6bqI0Xku6A3Q5z7Pez', payload)
    try {
      const retorno = await this.$axios.$get(`items/Categoria/?access_token=6fzjYJvqMkRZgU6bqI0Xku6A3Q5z7Pez`)
      commit('set_categorias', retorno.data)
    } catch (error) {
      console.log('error')
    }
  },

  async patchCategorias({ commit }, payload) {
    const result = await this.$axios.$patch(`items/Categoria/${ payload.id }?access_token=6fzjYJvqMkRZgU6bqI0Xku6A3Q5z7Pez`, payload)
    try {
      const retorno = await this.$axios.$get(`items/Categoria/?access_token=6fzjYJvqMkRZgU6bqI0Xku6A3Q5z7Pez`)
      commit('set_categorias', retorno.data)
    } catch (error) {
      console.log('error')
    }
  },

  async deleteCategorias({ commit }, payload) {
    const result = await this.$axios.$delete(`items/Categoria/${ payload.id }?access_token=6fzjYJvqMkRZgU6bqI0Xku6A3Q5z7Pez`, payload)
    try {
      const retorno = await this.$axios.$get(`items/Categoria/?access_token=6fzjYJvqMkRZgU6bqI0Xku6A3Q5z7Pez`)
      commit('set_categorias', retorno.data)
    } catch (error) {
      console.log('error')
    }
  }
}
