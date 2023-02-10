import React from "react";
import DataSaverOnSharpIcon from "@mui/icons-material/DataSaverOnSharp";

function Header() {
  return (
    <header>
      <h1>
        <DataSaverOnSharpIcon />
        Hash Gen
      </h1>
      <p>SHA-256 Cryptographic Hash Algorithm</p>

      <nav class="navbar navbar-expand-lg navbar-dark">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <h2>
              <a class="nav-link" href=" https://en.wikipedia.org/wiki/SHA-2">
                <p>About SHA</p>{" "}
              </a>
            </h2>
          </li>
          <li class="nav-item">
            <h2>
              <a class="nav-link" href="https://github.com/Shyam-Sundar-Reddy">
                <p>View github</p>
              </a>
            </h2>
          </li>

          <li class="nav-item">
            <h2>
              <a
                class="nav-link"
                href="https://shyam-sundar-reddy.github.io/CV-with-html-CSS/"
              >
                <p>About me</p>
              </a>
            </h2>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
