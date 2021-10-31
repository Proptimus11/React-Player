import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faIcons } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus, currentSong }) => {
  return (
    <nav>
      <div
        style={{
          color: `${currentSong.color[0]}`,
        }}
        className="logo"
      >
        <div className="logo-svg">
          <FontAwesomeIcon
            // style={{
            //   color: `${currentSong.color[0]}`,
            // }}
            size="2x"
            icon={faIcons}
          />
        </div>

        <h1>Waves</h1>
      </div>

      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
