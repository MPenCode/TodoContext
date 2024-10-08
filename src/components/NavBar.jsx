// import {Link} from 'react-router-dom';

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">ToDoList Industries Ltd.</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/todos">Todo</Link>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link to="/">Another Link to Hero</Link>
                </li>
                <li>
                  <Link to="/todos">To Todo again</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
