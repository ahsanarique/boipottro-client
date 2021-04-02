import React, { useContext } from "react";
import { UserContext } from "../../App";
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
  const [loggedInUser] = useContext(UserContext);

  const { image, name } = loggedInUser;

  const avatarStyle = {
    verticalAlign: "middle",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  };

  const avatar = (
    <img className="mx-2" style={avatarStyle} src={image} alt="avatar" />
  );

  const manageIcon = <FontAwesomeIcon icon={faThLarge} />;
  const addIcon = <FontAwesomeIcon icon={faPlus} />;
  const editIcon = <FontAwesomeIcon icon={faEdit} />;
  const bookIcon = <FontAwesomeIcon icon={faBookOpen} />;

  const adminPageStyle = {
    height: "100vh",
  };

  const linkStyle = {
    color: "white",
  };

  return (
    <div style={adminPageStyle} className="bg-light d-flex">
      <div style={adminPageStyle} className="bg-dark">
        <div className="m-4 mt-3">
          <Link style={linkStyle} to="/">
            <h4 className="mb-5">{bookIcon} Boipottro</h4>
          </Link>

          <div>{avatar}</div>
          <div className="mt-2 mb-4 border-bottom border-light">
            <h5 className="text-center text-light">{name}</h5>
          </div>

          <div>
            <Link style={linkStyle} to="/admin/manageBooks">
              <h6>
                <span className="mx-2">{manageIcon}</span> Manage Books
              </h6>
            </Link>
            <Link style={linkStyle} to="/admin/addBook">
              <h6>
                <span className="mx-2">{addIcon}</span> Add Book
              </h6>
            </Link>
            <Link style={linkStyle} to="/admin/editBook">
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
