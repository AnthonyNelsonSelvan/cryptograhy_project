import React, { useState } from "react";

const Playground = () => {
  const [playgroundText, setPlaygroundText] = useState("");
  const [playgroundKey, setPlaygroundKey] = useState("1");
  const [playgroundOutput, setPlaygroundOutput] = useState("");
  const [selectedCipher, setSelectedCipher] = useState("kautilya");

  const kautilyaEncrypt = (text, key) => {
    const shift = parseInt(key, 10) % 26;
    if (isNaN(shift)) return "Invalid key";
    let encrypted = "";
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
        const newCharCode = ((charCode - 97 + shift) % 26) + 97;
        encrypted += String.fromCharCode(newCharCode);
      } else {
        encrypted += text[i];
      }
    }
    return encrypted;
  };

  const kautilyaDecrypt = (text, key) => {
    const shift = parseInt(key, 10) % 26;
    if (isNaN(shift)) return "Invalid key";
    let decrypted = "";
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      if (charCode >= 97 && charCode <= 122) {
        const newCharCode = ((charCode - 97 - shift + 26) % 26) + 97;
        decrypted += String.fromCharCode(newCharCode);
      } else {
        decrypted += text[i];
      }
    }
    return decrypted;
  };

  const vigenereEncrypt = (text, keyword) => {
    const cleanedText = text.toLowerCase().replace(/[^a-z]/g, "");
    const cleanedKeyword = keyword.toLowerCase().replace(/[^a-z]/g, "");
    if (cleanedKeyword.length === 0) return "Keyword cannot be empty.";
    let encrypted = "";
    for (let i = 0, j = 0; i < cleanedText.length; i++) {
      const charCode = cleanedText.charCodeAt(i);
      const keyChar = cleanedKeyword.charCodeAt(j % cleanedKeyword.length);
      const shift = keyChar - 97;
      const newCharCode = ((charCode - 97 + shift) % 26) + 97;
      encrypted += String.fromCharCode(newCharCode);
      j++;
    }
    return encrypted;
  };

  const vigenereDecrypt = (text, keyword) => {
    const cleanedText = text.toLowerCase().replace(/[^a-z]/g, "");
    const cleanedKeyword = keyword.toLowerCase().replace(/[^a-z]/g, "");
    if (cleanedKeyword.length === 0) return "Keyword cannot be empty.";
    let decrypted = "";
    for (let i = 0, j = 0; i < cleanedText.length; i++) {
      const charCode = cleanedText.charCodeAt(i);
      const keyChar = cleanedKeyword.charCodeAt(j % cleanedKeyword.length);
      const shift = keyChar - 97;
      const newCharCode = ((charCode - 97 - shift + 26) % 26) + 97;
      decrypted += String.fromCharCode(newCharCode);
      j++;
    }
    return decrypted;
  };

  const handleEncrypt = () => {
    const text = playgroundText.toLowerCase();
    let result;
    if (selectedCipher === "kautilya") {
      result = kautilyaEncrypt(text, playgroundKey);
    } else {
      result = vigenereEncrypt(text, playgroundKey);
    }
    setPlaygroundOutput(result);
  };

  const handleDecrypt = () => {
    const text = playgroundText.toLowerCase();
    let result;
    if (selectedCipher === "kautilya") {
      result = kautilyaDecrypt(text, playgroundKey);
    } else {
      result = vigenereDecrypt(text, playgroundKey);
    }
    setPlaygroundOutput(result);
  };

  return (
    <div className="p-8 space-y-6 bg-white/70 rounded-3xl shadow-lg border border-gray-200 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center text-slate-800">
        Cipher Playground
      </h2>
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <label htmlFor="cipher-select" className="text-lg font-medium text-slate-700">
          Select Cipher:
        </label>
        <select
          id="cipher-select"
          value={selectedCipher}
          onChange={(e) => {
            setSelectedCipher(e.target.value);
            setPlaygroundText("");
            setPlaygroundOutput("");
            setPlaygroundKey(e.target.value === "kautilya" ? "1" : "");
          }}
          className="p-2 border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <option value="kautilya">Kautilya's Cipher</option>
          <option value="vigenere">Vigenère Cipher</option>
        </select>
      </div>
      <div className="bg-slate-50 p-6 rounded-2xl shadow-inner border border-gray-200">
        <h3 className="text-2xl font-semibold mb-4 text-slate-700">
          {selectedCipher === "kautilya" ? "Kautilya's Cipher" : "Vigenère Cipher"}
        </h3>
        <p className="text-slate-600 mb-4">
          {selectedCipher === "kautilya"
            ? "This is a simple substitution cipher where each letter is shifted by a certain number of positions in the alphabet. Kautilya mentioned a similar concept in his Arthashastra."
            : "The Vigenère cipher is a polyalphabetic substitution cipher that uses a keyword to shift letters by different amounts, making it more secure than simple substitution."
          }
        </p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex-1">
            <label
              htmlFor="playground-text"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Input Text:
            </label>
            <textarea
              id="playground-text"
              value={playgroundText}
              onChange={(e) => setPlaygroundText(e.target.value)}
              className="w-full h-32 p-4 border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Enter your message here..."
            ></textarea>
          </div>
          <div className="flex-1">
            <label
              htmlFor="playground-output"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Output:
            </label>
            <textarea
              id="playground-output"
              value={playgroundOutput}
              readOnly
              className="w-full h-32 p-4 border border-slate-300 rounded-xl bg-slate-100 focus:outline-none"
              placeholder="Output will appear here..."
            ></textarea>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <label
            htmlFor="playground-key"
            className="text-sm font-medium text-slate-700"
          >
            {selectedCipher === "kautilya" ? "Key (Shift):" : "Keyword:"}
          </label>
          <input
            id="playground-key"
            type={selectedCipher === "kautilya" ? "number" : "text"}
            value={playgroundKey}
            onChange={(e) => setPlaygroundKey(e.target.value)}
            className={`p-2 border border-slate-300 rounded-xl text-center focus:outline-none focus:ring-2 focus:ring-sky-500 ${
              selectedCipher === "kautilya" ? "w-24" : "w-auto"
            }`}
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
      <div className="bg-slate-50 p-6 rounded-2xl shadow-inner border border-gray-200">
        <h3 className="text-2xl font-semibold mb-4 text-slate-700">
          Code Demo in Python
        </h3>
        <p className="text-slate-600 mb-4">
          This app runs the cipher using JavaScript, but here is a simple Python
          function to achieve the same result. You can copy and run this in a
          local Python environment.
        </p>

        <h4 className="text-xl font-semibold text-slate-700 mt-6 mb-2">Kautilya's Cipher</h4>
        <h5 className="text-lg font-medium text-slate-600 mb-1">Encryption Code</h5>
        <pre className="bg-slate-800 text-sky-200 p-4 rounded-xl overflow-x-auto shadow-md">
          <code>
            {`
def encrypt_kautilya(text, key):
    result = ""
    for char in text.lower():
        if 'a' <= char <= 'z':
            shift = (ord(char) - ord('a') + key) % 26
            result += chr(shift + ord('a'))
        else:
            result += char
    return result

# Example usage:
# message = "hello world"
# secret_message = encrypt_kautilya(message, 3)
# print(secret_message) # Output: "khoor zruog"
`}
          </code>
        </pre>
        <h5 className="text-lg font-medium text-slate-600 mt-4 mb-1">Decryption Code</h5>
        <pre className="bg-slate-800 text-sky-200 p-4 rounded-xl overflow-x-auto shadow-md">
          <code>
            {`
def decrypt_kautilya(text, key):
    result = ""
    for char in text.lower():
        if 'a' <= char <= 'z':
            shift = (ord(char) - ord('a') - key + 26) % 26
            result += chr(shift + ord('a'))
        else:
            result += char
    return result

# Example usage:
# encrypted_message = "khoor zruog"
# original_message = decrypt_kautilya(encrypted_message, 3)
# print(original_message) # Output: "hello world"
`}
          </code>
        </pre>

        <h4 className="text-xl font-semibold text-slate-700 mt-6 mb-2">Vigenère Cipher</h4>
        <h5 className="text-lg font-medium text-slate-600 mb-1">Encryption Code</h5>
        <pre className="bg-slate-800 text-sky-200 p-4 rounded-xl overflow-x-auto shadow-md">
          <code>
            {`
def encrypt_vigenere(text, keyword):
    result = ""
    cleaned_text = text.lower().replace(" ", "")
    cleaned_keyword = keyword.lower()
    keyword_len = len(cleaned_keyword)
    
    if not keyword_len:
        return "Keyword cannot be empty."

    for i, char in enumerate(cleaned_text):
        if 'a' <= char <= 'z':
            shift = ord(cleaned_keyword[i % keyword_len]) - ord('a')
            new_char = ((ord(char) - ord('a') + shift) % 26)
            result += chr(new_char + ord('a'))
        else:
            result += char
    return result

# Example usage:
# message = "hello world"
# secret_message = encrypt_vigenere(message, "key")
# print(secret_message) # Output: "rihxy qbcfb"
`}
          </code>
        </pre>
        <h5 className="text-lg font-medium text-slate-600 mt-4 mb-1">Decryption Code</h5>
        <pre className="bg-slate-800 text-sky-200 p-4 rounded-xl overflow-x-auto shadow-md">
          <code>
            {`
def decrypt_vigenere(text, keyword):
    result = ""
    cleaned_text = text.lower().replace(" ", "")
    cleaned_keyword = keyword.lower()
    keyword_len = len(cleaned_keyword)
    
    if not keyword_len:
        return "Keyword cannot be empty."

    for i, char in enumerate(cleaned_text):
        if 'a' <= char <= 'z':
            shift = ord(cleaned_keyword[i % keyword_len]) - ord('a')
            new_char = ((ord(char) - ord('a') - shift + 26) % 26)
            result += chr(new_char + ord('a'))
        else:
            result += char
    return result

# Example usage:
# encrypted_message = "rihxy qbcfb"
# original_message = decrypt_vigenere(encrypted_message, "key")
# print(original_message) # Output: "hello world"
`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Playground;
