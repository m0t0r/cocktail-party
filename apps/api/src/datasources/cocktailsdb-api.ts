import {RESTDataSource} from 'apollo-datasource-rest'

export class CocktailsDbApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1'
  }

  async getCocktailById({id}) {
    return this.get(`/lookup.php?i=${id}`)
  }
}
