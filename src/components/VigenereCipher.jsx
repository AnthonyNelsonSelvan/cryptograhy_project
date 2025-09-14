import React, { useState } from "react";

const VigenereCipher = () => {
  const [inputText, setInputText] = useState("");
  const [keyword, setKeyword] = useState("");
  const [output, setOutput] = useState("");

  const encrypt = () => {
    const plainText = inputText.toLowerCase().replace(/[^a-z]/g, "");
    const cleanedKeyword = keyword.toLowerCase().replace(/[^a-z]/g, "");
    if (!cleanedKeyword) {
      setOutput("Keyword cannot be empty.");
      return;
    }

    let result = "";
    for (let i = 0; i < plainText.length; i++) {
      const char = plainText[i];
      const keyChar = cleanedKeyword[i % cleanedKeyword.length];
      const shift = keyChar.charCodeAt(0) - 97;
      const encryptedChar = String.fromCharCode(
        ((char.charCodeAt(0) - 97 + shift) % 26) + 97
      );
      result += encryptedChar;
    }
    setOutput(result);
  };

  const decrypt = () => {
    const encryptedText = inputText.toLowerCase().replace(/[^a-z]/g, "");
    const cleanedKeyword = keyword.toLowerCase().replace(/[^a-z]/g, "");
    if (!cleanedKeyword) {
      setOutput("Keyword cannot be empty.");
      return;
    }

    let result = "";
    for (let i = 0; i < encryptedText.length; i++) {
      const char = encryptedText[i];
      const keyChar = cleanedKeyword[i % cleanedKeyword.length];
      const shift = keyChar.charCodeAt(0) - 97;
      const decryptedChar = String.fromCharCode(
        ((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97
      );
      result += decryptedChar;
    }
    setOutput(result);
  };

  return (
    <div className="bg-slate-50 p-6 rounded-2xl shadow-inner border border-gray-200">
      <h3 className="text-2xl font-semibold mb-4 text-slate-700">
        Vigenère Cipher
      </h3>
      <p className="text-slate-600 mb-4">
        The Vigenère cipher is a method of encrypting alphabetic text by using a
        series of interwoven Caesar ciphers based on the letters of a keyword.
      </p>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="flex-1">
          <label
            htmlFor="vigenere-input"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Input Text:
          </label>
          <textarea
            id="vigenere-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full h-32 p-4 border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter your message here..."
          ></textarea>
        </div>
        <div className="flex-1">
          <label
            htmlFor="vigenere-output"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Output:
          </label>
          <textarea
            id="vigenere-output"
            value={output}
            readOnly
            className="w-full h-32 p-4 border border-slate-300 rounded-xl bg-slate-100 focus:outline-none"
            placeholder="Output will appear here..."
          ></textarea>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <label
          htmlFor="vigenere-key"
          className="text-sm font-medium text-slate-700"
        >
          Keyword:
        </label>
        <input
          id="vigenere-key"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="p-2 border border-slate-300 rounded-xl text-center focus:outline-none focus:ring-2 focus:ring-sky-500 w-auto"
        />
      </div>
      <div className="flex space-x-4 mt-6 justify-center">
        <button
          onClick={encrypt}
          className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-2xl shadow-md hover:bg-sky-600 transition-colors duration-200 transform hover:scale-105"
        >
          Encrypt
        </button>
        <button
          onClick={decrypt}
          className="px-6 py-3 bg-slate-500 text-white font-semibold rounded-2xl shadow-md hover:bg-slate-600 transition-colors duration-200 transform hover:scale-105"
        >
          Decrypt
        </button>
      </div>
    </div>
  );
};

export default VigenereCipher;