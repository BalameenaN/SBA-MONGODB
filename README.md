# SBA-MONGODB
- Created a new database using **MONGOOSE**.
- Included data validation through mongoose schema.
- Created three different data collections within the database such as **user,product,cart**
- Created **GET,POST,PUT,DELETE** routes for all the data that should be exposed to the client.
- Included indexes for **categoty** field in **product** collection and for **name** field in **user** collection.
- Used reasonable data modeling practices.
-Following are route for various functions:
 **USER ROUTE**
 * **localhost:5000/user/indexes** - gives the list indexes in the user collection.
 * **localhost:5000/user/create** - creates new user documents in the db.
 * **localhost:5000/user/details** - gives all the user information.
 * **localhost:5000/user/filter/:name** - gives the information about the particular user
 * **localhost:5000/user/update/:id**  - updates the given information for the particular user.
 * **localhost:5000/user/delete/:id** - deletes the particular user with given id.

**PRODUCT AND CART ROUTE** - in the above mentioned route replace user with product/cart to access product/cart details respectively.