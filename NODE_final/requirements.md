# API Requirements
This API is based on 3 main routes (user, category, product)
- user can signup and signin
- CRUD on categories
- CRUD on porducts

### API Endpoints
- **users**
  - signup route: `/registration` [POST]
  - signin route: `/login` [POST]

- **categories**
  - read all route: `/categories` [GET]
  - create route: `/categories` [POST] [token-required]
  - read one route: `/categories/:id` [GET]
  - update route: `/categories/:id` [PUT] [token-required]
  - delete route: `/categories/:id` [DELETE] [token-required]

- **products**
  - read all route: `/products` [GET]
  - create route: `/products` [POST] [token-required]
  - read one route: `/products/:id` [GET]
  - update route: `/products/:id` [PUT] [token-required]
  - delete route: `/products/:id` [DELETE] [token-required]

****
### Data Shapes
- user
  ```
  email: string
  password: string
  token: string
  ```
- category
  ```
  id: number
  name: string
  ```
- product
  ```
  id: number
  name: string
  price: number
  category_id: number
  ```