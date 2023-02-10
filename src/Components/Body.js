import React, { useState } from "react";
import { sha256 } from "js-sha256";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import TagSharpIcon from "@mui/icons-material/TagSharp";

const Body = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [error, setError] = useState("");

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputText === "") {
      setError("Please enter input text!");
      return;
    }

    try {
      const hashedText = sha256(inputText);
      setOutputText(hashedText);
      setError("");
    } catch (error) {
      setError("An error occurred while trying to hash the text!");
    }
  };

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(outputText);
  };

  return (
    <div>
      <br />
      <br />

      <div className="info">
        <h3>Info:</h3>
        <br />
        <p>
          The SHA-256 Hash Algorithm is a high-level cryptographic algorithm
          used to generate a 256-bit hash value from any given input data. It is
          used to create a secure, reliable hash value for web applications,
          allowing them to store and share sensitive data securely. It is a
          one-way function, meaning that the original data cannot be recovered
          from the hash. The algorithm is designed to be fast and efficient, and
          is widely used across the internet for web security and applications.
          SHA-256 is resilient to brute-force attacks and has been used for
          cryptographic key generation, password protection, and digital
          signatures.
        </p>
        <p>
          A hash is not ‘encryption’ – it cannot be decrypted back to the
          original text (it is a ‘one-way’ cryptographic function, and is a
          fixed size for any size of source text). This makes it suitable when
          it is appropriate to compare ‘hashed’ versions of texts, as opposed to
          decrypting the text to obtain the original version. Such applications
          include hash tables, integrity verification, challenge handshake
          authentication, digital signatures, etc.
        </p>
        <br />

        <p>
          ♢ ‘challenge handshake authentication’ (or ‘challenge hash
          authentication’) avoids transmissing passwords in ‘clear’ – a client
          can send the hash of a password over the internet for validation by a
          server without risk of the original password being intercepted
        </p>
        <br />
        <p>
          ♢ anti-tamper – link a hash of a message to the original, and the
          recipient can re-hash the message and compare it to the supplied hash:
          if they match, the message is unchanged; this can also be used to
          confirm no data-loss in transmission
        </p>
        <br />
        <p>
          ♢ digital signatures are rather more involved, but in essence, you can
          sign the hash of a document by encrypting it with your private key,
          producing a digital signature for the document. Anyone else can then
          check that you authenticated the text by decrypting the signature with
          your public key to obtain the original hash again, and comparing it
          with their hash of the text.
        </p>
      </div>
      <br />
      <form className="note" onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={handleTextChange}
          placeholder="Add data"
        ></textarea>
        <button type="submit">
          {" "}
          <TagSharpIcon />
        </button>
      </form>
      <br />
      <br />
      <div className="note">
        {" "}
        {error && <p>{error}</p>} {outputText && <p>{outputText}</p>}
        {outputText && (
          <button onClick={handleCopy}>
            <ContentCopyRoundedIcon />
          </button>
        )}
      </div>
      <br />
      <br />
    </div>
  );
};

export default Body;
