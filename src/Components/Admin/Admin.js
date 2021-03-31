import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AddBook from "./AddBook";
import ManageBooks from "./ManageBooks";
import EditBook from "./EditBook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faPlus,
  faEdit,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const manageIcon = <FontAwesomeIcon icon={faThLarge} />;
  const addIcon = <FontAwesomeIcon icon={faPlus} />;
  const editIcon = <FontAwesomeIcon icon={faEdit} />;
  const bookIcon = <FontAwesomeIcon icon={faBookOpen} />;

  const adminPageStyle = {
    height: "100vh",
  };

  return (
    <div style={adminPageStyle} className="bg-light d-flex">
      <div style={adminPageStyle} className="bg-dark">
        <div className="mx-3 mt-5">
          <Link to="/">
            <h4 className="mb-5">{bookIcon} Boipottro</h4>
          </Link>

          <div>
            <Link to="/admin/manageBooks">
              <h6>
                <span className="mx-2">{manageIcon}</span> Manage Books
              </h6>
            </Link>
            <Link to="/admin/addBook">
              <h6>
                <span className="mx-2">{addIcon}</span> Add Book
              </h6>
            </Link>
            <Link to="/admin/editBook">
              <h6>
                <span className="mx-2">{editIcon}</span> Edit Book
              </h6>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-grow w-75 my-5 me-2">
        <Switch>
          <Route path="/admin/addBook">
            <AddBook />
          </Route>
          <Route path="/admin/manageBooks">
            <ManageBooks />
          </Route>
          <Route path="/admin/editBook">
            <EditBook />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
