import React, { useState } from "react";
import KautilyaCipher from "./KautilyaCipher.jsx";
import VigenereCipher from "./VigenereCipher.jsx";
import SubstitutionCipher from "./SubstitutionCipher.jsx";

const Playground = () => {
  const [selectedCipher, setSelectedCipher] = useState("kautilya");

  const renderCipherComponent = () => {
    switch (selectedCipher) {
      case "kautilya":
        return <KautilyaCipher />;
      case "vigenere":
        return <VigenereCipher />;
      case "substitution":
        return <SubstitutionCipher />;
      default:
        return <KautilyaCipher />;
    }
  };

  return (
    <div className="p-8 space-y-6 bg-white/70 rounded-3xl shadow-lg border border-gray-200 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center text-slate-800">
        Cipher Playground
      </h2>
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
        <label
          htmlFor="cipher-select"
          className="text-lg font-medium text-slate-700"
        >
          Select Cipher:
        </label>
        <select
          id="cipher-select"
          value={selectedCipher}
          onChange={(e) => setSelectedCipher(e.target.value)}
          className="p-2 border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
        >
          <option value="kautilya">Kautilya's Cipher</option>
          <option value="vigenere">Vigenère Cipher</option>
          <option value="substitution">Substitution Cipher</option>
        </select>
      </div>
      {renderCipherComponent()}

      <div className="bg-slate-50 p-6 rounded-2xl shadow-inner border border-gray-200">
        <h3 className="text-2xl font-semibold mb-4 text-slate-700">
          Code Demo in Python
        </h3>

        <h4 className="text-xl font-semibold text-slate-700 mt-6 mb-2">
          Kautilya's Cipher
        </h4>
        <h5 className="text-lg font-medium text-slate-600 mb-1">
          Encryption Code
        </h5>
        <pre className="bg-slate-800 text-sky-200 p-4 rounded-xl overflow-x-auto shadow-md">
          <code>
            {`
def encrypt_kautilya(text, key):
    """
    Encrypts a message using the Kautilya's (Caesar) Cipher.
    """
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
        <h5 className="text-lg font-medium text-slate-600 mt-4 mb-1">
          Decryption Code
        </h5>
        <pre className="bg-slate-800 text-sky-200 p-4 rounded-xl overflow-x-auto shadow-md">
          <code>
            {`
def decrypt_kautilya(text, key):
    """
    Decrypts a message using the Kautilya's (Caesar) Cipher.
    """
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

        <h4 className="text-xl font-semibold text-slate-700 mt-6 mb-2">
          Vigenère Cipher
        </h4>
        <h5 className="text-lg font-medium text-slate-600 mb-1">
          Encryption Code
        </h5>
        <pre className="bg-slate-800 text-sky-200 p-4 rounded-xl overflow-x-auto shadow-md">
          <code>
            {`
def encrypt_vigenere(text, keyword):
    """
    Encrypts a message using the Vigenère Cipher.
    """
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
        <h5 className="text-lg font-medium text-slate-600 mt-4 mb-1">
          Decryption Code
        </h5>
        <pre className="bg-slate-800 text-sky-200 p-4 rounded-xl overflow-x-auto shadow-md">
          <code>
            {`
def decrypt_vigenere(text, keyword):
    """
    Decrypts a message using the Vigenère Cipher.
    """
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
        
        <h4 className="text-xl font-semibold text-slate-700 mt-6 mb-2">
          Substitution Cipher
        </h4>
        <h5 className="text-lg font-medium text-slate-600 mb-1">
          Encryption & Decryption Code
        </h5>
        <pre className="bg-slate-800 text-sky-200 p-4 rounded-xl overflow-x-auto shadow-md">
          <code>
            {`
def substitution_cipher(text, key_alphabet, mode='encrypt'):
    """
    Encrypts or decrypts a message using a Substitution Cipher.
    """
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    text = text.lower()
    result = ""

    if len(key_alphabet) != 26 or len(set(key_alphabet)) != 26:
        return "Invalid key alphabet. It must contain 26 unique letters."

    if mode == 'encrypt':
        lookup = str.maketrans(alphabet, key_alphabet)
        result = text.translate(lookup)
    elif mode == 'decrypt':
        lookup = str.maketrans(key_alphabet, alphabet)
        result = text.translate(lookup)
    else:
        return "Invalid mode. Use 'encrypt' or 'decrypt'."
    
    return result

# Example usage:
# key = "phqgiumeaylnofdxjkrcvstzwb"
# message = "hello world"
# encrypted_message = substitution_cipher(message, key, 'encrypt')
# print(encrypted_message) # Output: "riqqf ifmrp"

# decrypted_message = substitution_cipher(encrypted_message, key, 'decrypt')
# print(decrypted_message) # Output: "hello world"
`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Playground;
