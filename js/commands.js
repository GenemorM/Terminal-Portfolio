var linkedin = "https://www.linkedin.com/in/genemor-muyangana-237119364/";
var github = "https://github.com/GenemorM";
var sudo = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";
var email = "mailto:genemormuyangana@gmail.com";

let banner = [
  `<div id="banner-section" class="banner">
 Welcome to my portfolio! — Type <span class="command">help</span> for a list of supported commands.
  </div>`,
];

let aboutme = [
  "<br>",
  `<div id="aboutme-section">`,
  `<span class='underline'>Hello, I'm Genemor! 👋</span>`,
  "<br>",
  `<li>🎓 Currently pursuing a BSc (Hons) in Computer Science (Artificial Intelligence) at Asia Pacific University & De Montfort University (Dual Degree).</li>`,
  `<li>🔧 Aspiring AI engineer with insnterest in fullstack development .</li>`,
  `<li>💡 Always eager to learn new technologies and build meaningful digital products.</li>`,
  `<li>🧠 Experienced in building responsive websites using Next.js and Tailwind CSS.</li>`,
  `<li>📂 Developed <b>Lexio</b>, an AI-powered learning companion that generates personalised notes, flashcards, and quizzes using Google Gemini API & TTS.</li>`,
  `<li>💻 Skilled in Python, Java, C#, SQL, ReactJS, Node.js, TensorFlow, PyTorch, Hugging Face, AWS, and Git/GitHub.</li>`,
  `<li>📂 Use the <span class="command">projects</span> command to check out what I've built!</li>`,
  `<li>👥 Looking to collaborate on exciting frontend/backend projects.</li>`,
  `<li>📫 Contact: <a href="mailto:genemormuyangana@gmail.com" target="_blank">genemormuyangana@gmail.com</a></li>`,
  `<li>🔗 LinkedIn: <a href="https://www.linkedin.com/in/genemor-muyangana-237119364/" target="_blank">https://www.linkedin.com/in/genemor-muyangana-237119364/</a></li>`,
  "</div>",
  "<br>",
];

let social = [
  "<br>",
  'linkedin       <a href="' +
    linkedin +
    '" target="_blank">linkedin/genemorm</a>',
  'github         <a href="' +
    github +
    '" target="_blank">github/GenemorM</a>',
  "<br>",
];

let help = [
  `<br><div id="help-section"><pre class="whitespace-pre-wrap">
<span class="command">aboutme</span>
↳ Displays who I am?
<span class="command">social</span>
↳ Lists social networks.
<span class="command">projects</span>
↳ View coding projects.
<span class="command">email</span>
↳ To send me an email.
<span class="command">history</span>
↳ View command history.
<span class="command">help</span>
↳ Displays this help message.
<span class="command">sudo</span>
↳ Try it out for yourself.
<span class="command">snake</span>
↳ Run Snake Game.
<span class="command">clear</span>
↳ Clear the terminal.
</pre></div><br>`,
];
let projects = [
  "<br>",
  `<div id="projects-section">`,
  `<a href="https://www.lexio.cloud/" target="_blank"><span class='underline'>Lexio - AI-Powered Learning Companion</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
An intelligent study app that generates personalised notes, flashcards, quizzes, podcasts, and concept maps from your documents or YouTube videos. Includes study plans, progress tracking, and community forums.
Live: <a href="https://www.lexio.cloud/" target="_blank">lexio.cloud</a>
Built With:
- React (Vite)
- Tailwind CSS
- Shadcn/ui
- Convex
- Clerk
- Google Gemini API
- Google Text-to-Speech
- Vercel
</pre>`,

  `<a href="https://github.com/GenemorM/ASL-Detection" target="_blank"><span class='underline'>Real-Time Sign Language Translator</span></a>`,
  `<pre class="indent-8 whitespace-pre-wrap break-words overflow-x-auto">
AI-powered app that translates American Sign Language (ASL) gestures into text in real-time using computer vision and deep learning. Features optional text-to-speech, live webcam integration, and a responsive UI.
Built With:
- TensorFlow/Keras (MobileNetV2)
- OpenCV
- MediaPipe
- Flask (API backend)
- React.js (frontend)
- Web Speech API
</pre>`,
  "</div>",
  "<br>",
];
