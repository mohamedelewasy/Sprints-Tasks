# API Requirements
This API is based on 2 main routes (auth, product)
- user can signup and signin
- CRUD on porducts

### API Endpoints
- **users**
  - signup route: `/signup` [POST]
  - signin route: `/signin` [POST]

- **products**
  - read all route: `/products` [GET]
  - create route: `/products` [POST] [token-required]
  - read one route: `/products/:id` [GET]
  - update route: `/products/:id` [PATCH] [token-required]
  - delete route: `/products/:id` [DELETE] [token-required]
  - add to cart route: `/products/:id/cart` [POST] [token-required]
  - get cart products route: `/products/cart` [GET] [token-required]

****
### Data Shapes
- user
  ```
  email: string
  password: string
  token: string
  ```

- product
  ```
  id: number
  title: string
  price: number
  ```