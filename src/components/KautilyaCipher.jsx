import { useState } from "react";

const KautilyaCipher = () => {
  const [inputText, setInputText] = useState("");
  const [key, setKey] = useState(1);
  const [output, setOutput] = useState("");

  const handleEncrypt = () => {
    const text = inputText.toLowerCase().replace(/[^a-z]/g, "");
    const numericKey = parseInt(key, 10) % 26;
    if (isNaN(numericKey)) {
      setOutput("Please enter a valid number for the key.");
      return;
    }

    let encrypted = "";
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const newCharCode = ((charCode - 97 + numericKey) % 26) + 97;
      encrypted += String.fromCharCode(newCharCode);
    }
    setOutput(encrypted);
  };

  const handleDecrypt = () => {
    const text = inputText.toLowerCase().replace(/[^a-z]/g, '');
    const numericKey = parseInt(key, 10) % 26;
    if (isNaN(numericKey)) {
      setOutput('Please enter a valid number for the key.');
      return;
    }

    let decrypted = '';
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const newCharCode = ((charCode - 97 - numericKey + 26) % 26) + 97;
      decrypted += String.fromCharCode(newCharCode);
    }
    setOutput(decrypted);
  };

  return (
    <div className="bg-slate-50 p-6 rounded-2xl shadow-inner border border-gray-200">
      <h3 className="text-2xl font-semibold mb-4 text-slate-700">
        Kautilya's Cipher
      </h3>
      <p className="text-slate-600 mb-4">
        This is a simple substitution cipher where each letter is shifted by a
        certain number of positions in the alphabet. Kautilya mentioned a similar
        concept in his Arthashastra.
      </p>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="flex-1">
          <label
            htmlFor="kautilya-input"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Input Text:
          </label>
          <textarea
            id="kautilya-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full h-32 p-4 border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Enter your message here..."
          ></textarea>
        </div>
        <div className="flex-1">
          <label
            htmlFor="kautilya-output"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Output:
          </label>
          <textarea
            id="kautilya-output"
            value={output}
            readOnly
            className="w-full h-32 p-4 border border-slate-300 rounded-xl bg-slate-100 focus:outline-none"
            placeholder="Output will appear here..."
          ></textarea>
        </div>
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <label
          htmlFor="kautilya-key"
          className="text-sm font-medium text-slate-700"
        >
          Key (Shift):
        </label>
        <input
          id="kautilya-key"
          type="number"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="w-24 p-2 border border-slate-300 rounded-xl text-center focus:outline-none focus:ring-2 focus:ring-sky-500"
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

export default KautilyaCipher;
