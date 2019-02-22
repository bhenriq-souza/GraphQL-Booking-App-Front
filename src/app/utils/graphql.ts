

export class GraphQLUtils {

  /**
   * Generate query GraphQL for API request
   *
   * @param queryType Query to be build
   * @param data Query data
   *
   * @returns Query builded
   */
  generateGraphQLQuery(queryType: string, data: any): any {
    switch (queryType) {
      case 'login':
        return this.loginQuery(data);
      case 'registration':
        return this.createUserQuery(data);
      default:
        return null;
    }
  }

  /**
   * Generate query GraphQL for create users mutation
   *
   * @param params Data object for generate a query
   *
   * @returns Query builded
   */
  private createUserQuery({ email, password }): any {
    return {
      query: ``,
      variables: {}
    }
  }

  /**
   * Generate query GraphQL for login
   *
   * @param params Data object for generate a query
   *
   * @returns Query builded
   */
  private loginQuery({ email, password }): any {
    return {
      query: `
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            userId,
            token,
            tokenExpiration
          }
        }
      `,
      variables: {
        email,
        password
      }
    }
  }
}
