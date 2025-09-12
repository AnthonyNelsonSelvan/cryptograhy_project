const PreQuizInfo = () => {
  return (
    <div className="p-8 space-y-6 bg-white/70 rounded-3xl shadow-lg border border-gray-200 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center text-slate-800">Quiz Preparation</h2>
      <div className="bg-slate-50 p-6 rounded-2xl shadow-inner border border-gray-200 space-y-4">
        <p className="text-lg text-slate-700">
          Ready to test your knowledge? Before you begin the quiz, read through these key points to make sure you're prepared.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">Ancient Ciphers</h3>
        <p className="text-slate-600">
          The concept of cryptography dates back centuries. One of the earliest known mentions of secret codes in India is found in The Arthashastra, a political treatise attributed to Kautilya. It describes simple substitution ciphers, similar to the one in our playground, to protect military and political messages.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">The Power of Substitution</h3>
        <p className="text-slate-600">
          At its core, a substitution cipher works by systematically replacing letters or groups of letters with other letters or symbols. This is the simplest form of encryption, but it was surprisingly effective for a long time. The Vigenère cipher, a more advanced form, used a keyword to apply a different shift to each letter, making it much harder to break.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">Breaking the Code</h3>
        <p className="text-slate-600">
          For every cipher, there is a method to break it. The famous polymath Al-Kindi is often hailed as the father of cryptanalysis for his groundbreaking work on frequency analysis. By studying the patterns of letter frequency, he could crack many simple ciphers without knowing the key.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">Modern History</h3>
        <p className="text-slate-600">
          In the 20th century, machines took over. During World War II, the German military used the Enigma machine, a device that used a system of rotating wheels to create incredibly complex ciphers. Breaking the Enigma code was a crucial part of the Allied victory.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">Public-Key Cryptography</h3>
        <p className="text-slate-600">
          Today, we use digital cryptography for everything from online shopping to secure messaging. The RSA algorithm is the foundation of this modern system. It's a public-key algorithm, meaning it uses two keys—one for encrypting (public) and one for decrypting (private)—to ensure secure communication.
        </p>

      </div>
    </div>
  );
};

export default PreQuizInfo;