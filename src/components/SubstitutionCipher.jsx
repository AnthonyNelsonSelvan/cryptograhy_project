import { useState } from "react";

const SubstitutionCipher = () => {
  const [inputText, setInputText] = useState("");
  const [keyAlphabet, setKeyAlphabet] = useState("phqgiumeaylnofdxjkrcvstzwb");
  const [output, setOutput] = useState("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const handleEncrypt = () => {
    const text = inputText.toLowerCase().replace(/[^a-z]/g, "");
    if (keyAlphabet.length !== 26 || [...new Set(keyAlphabet)].length !== 26) {
      setOutput("Key alphabet must contain 26 unique letters.");
      return;
    }
    
    let encrypted = "";
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const index = alphabet.indexOf(char);
      if (index !== -1) {
        encrypted += keyAlphabet[index];
      } else {
        encrypted += char;
      }
    }
    setOutput(encrypted);
  };

  const handleDecrypt = () => {
    const text = inputText.toLowerCase().replace(/[^a-z]/g, "");
    if (keyAlphabet.length !== 26 || [...new Set(keyAlphabet)].length !== 26) {
      setOutput("Key alphabet must contain 26 unique letters.");
      return;
    }

    let decrypted = "";
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const index = keyAlphabet.indexOf(char);
      if (index !== -1) {
        decrypted += alphabet[index];
      } else {
        decrypted += char;
      }
    }
    setOutput(decrypted);
  };

  return (
    <div className="bg-slate-50 p-6 rounded-2xl shadow-inner border border-gray-200">
      <h3 className="text-2xl font-semibold mb-4 text-slate-700">
        Substitution Cipher
      </h3>
      <p className="text-slate-600 mb-4">
        This cipher replaces each letter of the plaintext with a different
        letter from a scrambled alphabet, also known as the "key alphabet."
      </p>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="flex-1">
          <label
            htmlFor="substitution-input"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Input Text:
          </label>
          <textarea
            id="substitution-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full h-32 p-4 border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter your message here..."
          ></textarea>
        </div>
        <div className="flex-1">
          <label
            htmlFor="substitution-output"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Output:
          </label>
          <textarea
            id="substitution-output"
            value={output}
            readOnly
            className="w-full h-32 p-4 border border-slate-300 rounded-xl bg-slate-100 focus:outline-none"
            placeholder="Output will appear here..."
          ></textarea>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <label
          htmlFor="substitution-key"
          className="text-sm font-medium text-slate-700"
        >
          Key Alphabet:
        </label>
        <input
          id="substitution-key"
          type="text"
          value={keyAlphabet}
          onChange={(e) => setKeyAlphabet(e.target.value.toLowerCase())}
          className="p-2 border border-slate-300 rounded-xl text-center focus:outline-none focus:ring-2 focus:ring-sky-500 w-auto"
        />
      </div>
      <div className="flex space-x-4 mt-6 justify-center">
        <button
          onClick={handleEncrypt}
          className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-2xl shadow-md hover:bg-sky-600 transition-colors duration-200 transform hover:scale-105"
        >
          Encrypt
        </button>
        <button
          onClick={handleDecrypt}
          className="px-6 py-3 bg-slate-500 text-white font-semibold rounded-2xl shadow-md hover:bg-slate-600 transition-colors duration-200 transform hover:scale-105"
        >
          Decrypt
        </button>
      </div>
    </div>
  );
};

export default SubstitutionCipher;
