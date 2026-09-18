import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Heart,
  Sparkles,
  ChevronDown,
  Camera,
  Bike,
  MessageCircle,
  Star,
  Gift,
  Music,
  VolumeX,
  X,
  Mail,
  Moon,
} from "lucide-react";

import her1 from "./assets/her1.jpeg";
import her2 from "./assets/her2.jpeg";
import her3 from "./assets/her3.jpeg";
import her4 from "./assets/her4.jpeg";
import her5 from "./assets/her5.jpeg";
import her6 from "./assets/her6.jpeg";
import romanticMusic from "./assets/romantic-music.mp3";

import "./App.css";
import "./HerUniverse_NewFeatures.css";

// =====================================================
// PERSONALIZATION
// =====================================================

const HER_NAME = "Kismiss (#1313)";

// Add your mp3 here if you want music.
// Example:
// import songFile from "./assets/song.mp3";
// const SONG_SRC = songFile;

const SONG_SRC = romanticMusic;

// =====================================================
// PHOTOS
// =====================================================

const photos = [
  {
    src: her1,
    title: "The Beginning",
    text: "Some stories don't begin with a meeting. Some begin with a feeling.",
  },
  {
    src: her2,
    title: "Class 9",
    text: "That's where our story quietly started.",
  },
  {
    src: her3,
    title: "That Bicycle Ride",
    text: "Those coaching days, riding bicycles together, and that one day when you wore a red frock.",
  },
  {
    src: her4,
    title: "From A Distance",
    text: "We didn't need to stand beside each other to notice each other. Sometimes a terrace was enough.",
  },
  {
    src: her5,
    title: "22 February 2024",
    text: "One Instagram message. One racing heartbeat. And suddenly, everything felt alive again.",
  },
  {
    src: her6,
    title: "Still Connected",
    text: "Maybe we didn't get every moment together, but every moment became a part of my happiness.",
  },
];

// =====================================================
// STORY
// =====================================================

const memories = [
  {
    icon: <Sparkles size={24} />,
    number: "01",
    title: "Class 9",
    text: "We met in class 9. At that time, maybe we didn't know how special these little moments would become.",
  },
  {
    icon: <Bike size={24} />,
    number: "02",
    title: "Those Coaching Days",
    text: "Going to coaching together on bicycles. Simple days, simple moments, but memories that never really left.",
  },
  {
    icon: <Heart size={24} />,
    number: "03",
    title: "After Separation",
    text: "After our 10th exams, life took us in different directions. But I never really stopped looking for you.",
  },
  {
    icon: <MessageCircle size={24} />,
    number: "04",
    title: "22 February 2024",
    text: "When I saw your message on Instagram, my heart suddenly started beating so fast. It felt like something special had returned.",
  },
  {
    icon: <Camera size={24} />,
    number: "05",
    title: "From A Distance",
    text: "Terrace moments, seeing you outside, and those messages or calls asking me to come outside.",
  },
];

// =====================================================
// SURPRISE QUIZ + VIDEOS
// =====================================================
// Put these four MP4 files inside the public/ folder:
// birthday-video.mp4
// terrace-video.mp4
// another-video.mp4
// ai-generated-video.mp4

const quizQuestions = [
  {
    question: "Which class were we in when our story started?",
    options: ["Class 8", "Class 9", "Class 10", "Class 12"],
    answer: "Class 9",
  },
  {
    question: "What did we often do during our coaching days?",
    options: [
      "Ride bicycles together",
      "Play cricket together",
      "Go to the movies",
      "Study at home",
    ],
    answer: "Ride bicycles together",
  },
  {
    question: "After which class did we become separated?",
    options: ["Class 9", "Class 10", "Class 11", "College"],
    answer: "Class 10",
  },
  {
    question: "On which date did we reconnect on Instagram?",
    options: [
      "14 February 2024",
      "22 February 2024",
      "22 March 2024",
      "2 February 2024",
    ],
    answer: "22 February 2024",
  },
  {
    question: "Where were some of those special moments from a distance?",
    options: ["From the terrace", "At school", "At a cafe", "At the park"],
    answer: "From the terrace",
  },
];

const surpriseVideos = [
  {
    title: "Birthday Surprise",
    subtitle: "A little birthday moment made just for you.",
    src: "/birthday-video.mp4",
  },
  {
    title: "Terrace Memories",
    subtitle: "A video from one of those special terrace moments.",
    src: "/terrace-video.mp4",
  },
  {
    title: "One More Memory",
    subtitle: "And one more little video I wanted you to see.",
    src: "/another-video.mp4",
  },
  {
    title: "A Little AI Surprise ✨",
    subtitle: "A little world I created just for you.",
    src: "/ai-generated-video.mp4",
  },
];

// =====================================================
// REVOLVING #1313 BACKGROUND
// =====================================================

function RevolvingNumbers() {
  const numbers = Array.from({ length: 20 });

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        {numbers.map((_, index) => {
          const angle = (index / numbers.length) * Math.PI * 2;
          const radius = 42 + (index % 4) * 6;
          const x = 50 + Math.cos(angle) * radius;
          const y = 50 + Math.sin(angle) * radius;

          return (
            <motion.span
              key={index}
              style={{
                position: "absolute",
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
                color: "rgba(255, 255, 255, 0.22)",
                fontSize: `${16 + (index % 3) * 6}px`,
                fontWeight: 800,
                letterSpacing: "3px",
                whiteSpace: "nowrap",
                textShadow: "0 0 18px rgba(255,255,255,0.15)",
              }}
              animate={{
                opacity: [0.12, 0.55, 0.12],
                scale: [0.85, 1.12, 0.85],
              }}
              transition={{
                duration: 2.5 + (index % 4),
                delay: index * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              #1313
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
}

// =====================================================
// FLOATING HEARTS
// =====================================================

function FloatingHearts() {
  const hearts = Array.from({ length: 20 });

  return (
    <div className="floating-hearts">
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          className="floating-heart"
          initial={{
            y: "110vh",
            x: `${(index * 37) % 100}vw`,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            y: "-15vh",
            opacity: [0, 0.7, 0],
            scale: [0.5, 1, 0.7],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 7 + (index % 5),
            delay: (index % 8) * 1.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
}

// =====================================================
// SPARKLES
// =====================================================

function SparkleField() {
  const sparkles = Array.from({ length: 35 });

  return (
    <div className="sparkle-field">
      {sparkles.map((_, index) => (
        <motion.span
          key={index}
          className="sparkle"
          style={{
            left: `${(index * 29) % 100}%`,
            top: `${(index * 47) % 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2 + (index % 4),
            delay: (index % 5) * 0.4,
            repeat: Infinity,
          }}
        >
          ✦
        </motion.span>
      ))}
    </div>
  );
}

// =====================================================
// MODAL
// =====================================================

function Modal({
  isOpen,
  onClose,
  overlayClassName,
  children,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={overlayClassName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              y: 50,
            }}
            transition={{
              type: "spring",
              damping: 20,
            }}
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// =====================================================
// BIRTHDAY ROAD MOVIE
// =====================================================

function BirthdayRoadScene({ onBack }) {
  const [sceneKey, setSceneKey] = useState(0);

  const replayMovie = () => {
    setSceneKey((prev) => prev + 1);
  };

  return (
    <div className="birthday-road-page">
      {/* BACK TO MAIN WEBSITE */}

      <motion.button
        className="road-back-button"
        onClick={onBack}
        initial={{
          opacity: 0,
          x: -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          delay: 0.5,
        }}
      >
        ← Back to Our Story
      </motion.button>

      <div
        className="birthday-road-wrapper"
        key={sceneKey}
      >
        {/* =================================================
            INTRO TEXT
        ================================================= */}

        <motion.div
          className="road-intro-text"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <div className="small-label">
            A LITTLE MOMENT FOR YOU
          </div>

          <h2>
            No matter how far you are...
          </h2>

          <p>
            Some people are always worth
            crossing the distance for.
          </p>
        </motion.div>

        {/* =================================================
            SKY
        ================================================= */}

        <div className="road-sky">
          <div className="road-stars" />

          <motion.div
            className="road-moon"
            animate={{
              opacity: [0.75, 1, 0.75],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

          <div className="road-sunset-glow" />
        </div>

        {/* =================================================
            CITY
        ================================================= */}

        <div className="road-city">
          <div className="road-building">
            <div className="building-lights" />
          </div>

          <div className="road-building">
            <div className="building-lights" />
          </div>

          <div className="road-building">
            <div className="building-lights" />
          </div>

          <div className="road-building">
            <div className="building-lights" />
          </div>

          <div className="road-building">
            <div className="building-lights" />
          </div>

          <div className="road-building">
            <div className="building-lights" />
          </div>

          <div className="road-building">
            <div className="building-lights" />
          </div>
        </div>

        {/* =================================================
            STREET LIGHT LEFT
        ================================================= */}

        <div className="road-street-light road-light-left">
          <div className="road-lamp-glow" />
          <div className="road-lamp-head" />
          <div className="road-lamp-pole" />
        </div>

        {/* =================================================
            STREET LIGHT RIGHT
        ================================================= */}

        <div className="road-street-light road-light-right">
          <div className="road-lamp-glow" />
          <div className="road-lamp-head" />
          <div className="road-lamp-pole" />
        </div>

        {/* =================================================
            ROAD
        ================================================= */}

        <div className="animated-road">
          <div className="road-mark road-mark-1" />
          <div className="road-mark road-mark-2" />
          <div className="road-mark road-mark-3" />
          <div className="road-mark road-mark-4" />

          <div className="animated-crosswalk">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* =================================================
            MOVING CAR
        ================================================= */}

        <div className="animated-car">
          <div className="animated-car-body">
            <div className="car-window" />
            <div className="car-window car-window-2" />

            <div className="car-headlight" />
          </div>

          <div className="animated-car-wheel car-wheel-1" />
          <div className="animated-car-wheel car-wheel-2" />
        </div>

        {/* =================================================
            GIRL WAITING
        ================================================= */}

        <motion.div
          className="waiting-girl"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
        >
          <div className="girl-aura" />

          <div className="girl-waiting-text">
            Waiting for you...
          </div>

          <div className="girl-waiting-heart">
            ♥
          </div>

          <div className="girl-hair" />

          <div className="girl-head">
            <div className="girl-face">
              <div className="girl-eye girl-eye-left" />
              <div className="girl-eye girl-eye-right" />
              <div className="girl-mouth" />
            </div>
          </div>

          <div className="girl-neck" />

          <div className="girl-body">
            <div className="girl-dress" />

            <div className="girl-arm girl-arm-left" />
            <div className="girl-arm girl-arm-right" />
          </div>

          <div className="girl-leg girl-leg-left" />
          <div className="girl-leg girl-leg-right" />
        </motion.div>

        {/* =================================================
            BOY RUNNING
        ================================================= */}

        <motion.div
          className="running-boy"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.5,
            duration: 0.5,
          }}
        >
          <div className="boy-aura" />

          <div className="boy-running-hearts">
            ♥
          </div>

          <div className="boy-hair" />

          <div className="boy-head">
            <div className="boy-face">
              <div className="boy-eye boy-eye-left" />
              <div className="boy-eye boy-eye-right" />
              <div className="boy-mouth" />
            </div>
          </div>

          <div className="boy-body">
            <div className="boy-shirt" />

            <div className="boy-arm boy-arm-left" />
            <div className="boy-arm boy-arm-right" />
          </div>

          <div className="boy-leg boy-leg-left" />
          <div className="boy-leg boy-leg-right" />
        </motion.div>

        {/* =================================================
            BIRTHDAY WISH
        ================================================= */}

        <motion.div
          className="birthday-wish-card"
          initial={{
            opacity: 0,
            scale: 0.6,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: 6,
            duration: 1,
            type: "spring",
          }}
        >
          <div className="wish-heart">
            ♥
          </div>

          <div className="small-label">
            JUST FOR YOU
          </div>

          <h2>
            Happy Birthday,
            <br />
            {HER_NAME}
          </h2>

          <p>
            I came all this way just to wish you
            <br />
            the happiest birthday. ❤️
          </p>
        </motion.div>

        {/* =================================================
            HEART BURST
        ================================================= */}

        <div className="road-heart-burst">
          {Array.from({ length: 6 }).map(
            (_, index) => (
              <span key={index}>♥</span>
            )
          )}
        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="road-movie-footer">
          A LITTLE MOVIE MADE WITH LOVE
        </div>

        {/* =================================================
            REPLAY
        ================================================= */}

        <motion.button
          className="road-replay-button"
          onClick={replayMovie}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 8,
          }}
        >
          ↻ Replay
        </motion.button>

        {/* =================================================
            PROGRESS
        ================================================= */}

        <div className="road-progress" />
      </div>
    </div>
  );
}


// =====================================================
// EXTRA CINEMATIC EXPERIENCE
// =====================================================

const extraMemories = [
  {
    id: 1,
    icon: "🚲",
    title: "A Memory",
    text: "Those coaching days when we used to ride bicycles together. They were simple days, but somehow they became some of my favorite memories.",
  },
  {
    id: 2,
    icon: "🌙",
    title: "A Feeling",
    text: "Sometimes distance doesn't make someone disappear. Sometimes it makes you realize how much a person quietly means to you.",
  },
  {
    id: 3,
    icon: "❤️",
    title: "A Secret",
    text: "#1313 is not just a number here. It is a tiny reminder that some things can have meaning only because two people give them meaning.",
  },
];

const hiddenLetters = [
  {
    title: "What I never said",
    text: "There were probably many moments when I wanted to say something but didn't know how. So I'm leaving this little message here instead.",
  },
  {
    title: "A memory I still remember",
    text: "Class 9, those coaching days, bicycles, little glances and terrace moments. Life moved forward, but those memories never completely left.",
  },
  {
    title: "Why #1313",
    text: "Because some numbers become special simply because they belong to a story. And this one belongs to ours.",
  },
];

function HerUniverseExtraExperience({ foundSecrets = [], collectSecret = () => {} }) {
  const [selectedExtraMemory, setSelectedExtraMemory] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [lastQuestionAnswer, setLastQuestionAnswer] = useState(null);
  const [showFinalSecret, setShowFinalSecret] = useState(false);

  return (
    <>
      <section className="extra-memory-section">
        <motion.div
          className="extra-section-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="extra-eyebrow">YOU GET TO CHOOSE</span>
          <h2>
            Pick a little piece
            <br />
            of our story.
          </h2>
          <p>
            Maybe you want a memory. Maybe a feeling. Maybe a secret.
          </p>
        </motion.div>

        <div className="memory-choice-grid">
          {extraMemories.map((memory, index) => (
            <motion.button
              key={memory.id}
              className="memory-choice-card"
              onClick={() => setSelectedExtraMemory(memory)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="memory-choice-icon">{memory.icon}</span>
              <span className="memory-choice-title">{memory.title}</span>
              <span className="memory-choice-small">Tap to open</span>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedExtraMemory && (
          <motion.div
            className="extra-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExtraMemory(null)}
          >
            <motion.div
              className="extra-modal-card"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 40 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="extra-modal-icon">{selectedExtraMemory.icon}</div>
              <span className="extra-eyebrow">A LITTLE PIECE OF US</span>
              <h2>{selectedExtraMemory.title}</h2>
              <p>{selectedExtraMemory.text}</p>
              <button
                className="extra-close-button"
                onClick={() => setSelectedExtraMemory(null)}
              >
                Keep exploring ❤️
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="hidden-letter-section">
        <motion.div
          className="extra-section-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="extra-eyebrow">SOME THINGS ARE BETTER WRITTEN</span>
          <h2>
            There are a few
            <br />
            letters hidden here.
          </h2>
          <p>Open whichever one calls your attention.</p>
        </motion.div>

        <div className="hidden-letter-grid">
          {hiddenLetters.map((letter, index) => (
            <motion.button
              key={letter.title}
              className="hidden-letter-card"
              onClick={() => setSelectedLetter(letter)}
              initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, rotate: index % 2 === 0 ? 1 : -1 }}
            >
              <div className="envelope-icon">
                <Mail size={28} />
              </div>
              <span>{letter.title}</span>
              <small>Open letter</small>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            className="extra-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div
              className="letter-paper-card"
              initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 4 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="letter-paper-heart">
                <Heart size={25} fill="currentColor" />
              </div>
              <span className="extra-eyebrow">A LETTER FOR YOU</span>
              <h2>{selectedLetter.title}</h2>
              <p>{selectedLetter.text}</p>
              <div className="letter-paper-signature">
                With love,
                <br />
                <strong>#1313</strong>
              </div>
              <button
                className="extra-close-button"
                onClick={() => setSelectedLetter(null)}
              >
                Close letter
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="night-sky-section">
        <SecretMarker id={10} className="secret-marker-night" onCollect={collectSecret} found={foundSecrets.includes(10)} />
        <div className="night-sky-stars">
          {Array.from({ length: 70 }).map((_, index) => (
            <motion.span
              key={index}
              style={{
                left: `${(index * 37) % 100}%`,
                top: `${(index * 53) % 100}%`,
              }}
              animate={{ opacity: [0.15, 0.9, 0.15], scale: [0.7, 1.2, 0.7] }}
              transition={{ duration: 2 + (index % 4), delay: index * 0.08, repeat: Infinity }}
            >
              {index % 7 === 0 ? "✦" : "·"}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="night-moon"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Moon size={75} />
        </motion.div>

        <motion.div
          className="night-sky-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="extra-eyebrow">SOMEWHERE UNDER THIS SKY</span>
          <h2>
            There is still a story
            <br />
            called us.
          </h2>
          <p>
            Different days. Different places. Same sky.
          </p>
          <div className="night-sky-number">#1313</div>
        </motion.div>
      </section>

      <section className="last-question-section">
        <motion.div
          className="last-question-card"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Sparkles size={30} />
          <span className="extra-eyebrow">ONE LAST QUESTION</span>
          <h2>
            If you could relive
            <br />
            one moment...
          </h2>
          <p>Which one would you choose?</p>

          <div className="last-question-options">
            {[
              ["class9", "Class 9"],
              ["bicycle", "Bicycle days"],
              ["terrace", "Terrace moments"],
              ["instagram", "22 February 2024"],
            ].map(([value, label]) => (
              <button
                key={value}
                className={lastQuestionAnswer === value ? "selected" : ""}
                onClick={() => setLastQuestionAnswer(value)}
              >
                {label}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {lastQuestionAnswer && (
              <motion.div
                className="question-response"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Heart size={17} fill="currentColor" />
                <span>
                  Whatever you chose, I'm glad that moment exists in our story. ❤️
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      <section className="final-secret-section">
        <motion.div
          className="final-secret-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="extra-eyebrow">ONE LAST SECRET</span>
          <h2>
            You found the end...
            <br />
            but not quite.
          </h2>
          <p>
            There is one more little thing hidden behind this number.
          </p>

          <motion.button
            className="final-secret-button"
            onClick={() => setShowFinalSecret(true)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
          >
            <span>{foundSecrets.length === 13 ? "♥" : "#1313"}</span>
            <Heart size={18} fill="currentColor" />
          </motion.button>
        </motion.div>
      </section>

      <AnimatePresence>
        {showFinalSecret && (
          <motion.div
            className="extra-overlay final-secret-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFinalSecret(false)}
          >
            <div className="final-secret-stars">
              {Array.from({ length: 35 }).map((_, index) => (
                <motion.span
                  key={index}
                  style={{
                    left: `${(index * 29) % 100}%`,
                    top: `${(index * 41) % 100}%`,
                  }}
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5] }}
                  transition={{ duration: 2 + (index % 3), delay: index * 0.1, repeat: Infinity }}
                >
                  ✦
                </motion.span>
              ))}
            </div>

            <motion.div
              className="final-secret-card"
              initial={{ opacity: 0, scale: 0.6, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 150, damping: 16 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="final-secret-heart">
                <Heart size={55} fill="currentColor" />
              </div>
              <span className="extra-eyebrow">THE LAST SECRET</span>
              <h2>
                You were always
                <br />
                the reason.
              </h2>
              <p>
                You found the memories.
                <br />
                You found the videos.
                <br />
                You found #1313.
              </p>
              <p>
                But the biggest secret was never hidden anywhere.
              </p>
              <strong>
                You were the reason this little universe existed.
              </strong>
              <div className="final-secret-number">#1313 ❤️</div>
              <button
                className="extra-close-button"
                onClick={() => setShowFinalSecret(false)}
              >
                Continue to the ending
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="cinematic-credits">
        <motion.div
          className="credits-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <div className="credits-line" />
          <span>HER UNIVERSE</span>
          <h2>Kismiss</h2>
          <p>
            A story made from
            <br />
            memories, moments,
            <br />
            distance and feelings.
          </p>

          <div className="credits-block">
            <small>STARRING</small>
            <strong>Kismiss</strong>
          </div>
          <div className="credits-block">
            <small>SPECIAL NUMBER</small>
            <strong>#1313</strong>
          </div>
          <div className="credits-block">
            <small>MADE WITH</small>
            <strong>❤️</strong>
          </div>

          <div className="credits-stars">
            <Star size={15} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={15} fill="currentColor" />
          </div>

          <div className="credits-end">THE END</div>
          <p className="credits-footer">
            ...or maybe just the beginning.
          </p>
        </motion.div>
      </section>
    </>
  );
}

// =====================================================
// HIDDEN #1313 SECRET MARKER
// =====================================================

function SecretMarker({ id, className = "", onCollect, found = false }) {
  const [visible, setVisible] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    onCollect?.(id);
  };

  return (
    <motion.button
      type="button"
      className={`hidden-1313-marker ${className} ${visible ? "is-visible" : ""} ${found ? "found" : ""}`}
      onClick={handleClick}
      onMouseEnter={() => setVisible(true)}
      onFocus={() => setVisible(true)}
      aria-label={`Hidden #1313 symbol ${id + 1}`}
      whileHover={{ scale: 1.35, rotate: 8 }}
      whileTap={{ scale: 0.8 }}
    >
      <span>#1313</span>
    </motion.button>
  );
}

// =====================================================
// MAIN APP
// =====================================================

function App() {
  const [selectedPhoto, setSelectedPhoto] =
    useState(null);

  const [showLetter, setShowLetter] =
    useState(false);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [burst, setBurst] =
    useState(false);

  const [surpriseShown, setSurpriseShown] =
    useState(false);

  const [showSurprise, setShowSurprise] =
    useState(false);

  // IMPORTANT:
  // This controls the separate movie page.
  const [showRoadMovie, setShowRoadMovie] =
    useState(false);

  // Surprise quiz
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizUnlocked, setQuizUnlocked] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // New interactive experience
  const [foundSecrets, setFoundSecrets] = useState([]);
  const [showSecretMessage, setShowSecretMessage] = useState(false);
  const [candlesLit, setCandlesLit] = useState([false, false, false]);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const audioRef = useRef(null);

  // ===================================================
  // LETTER
  // ===================================================

  const closeLetter = () => {
    setShowLetter(false);

    if (!surpriseShown) {
      setSurpriseShown(true);

      setTimeout(() => {
        setShowSurprise(true);

        setTimeout(() => {
          setShowSurprise(false);
        }, 5000);
      }, 500);
    }
  };

  const openLetter = () => {
    setBurst(true);
    setShowLetter(true);

    setTimeout(() => {
      setBurst(false);
    }, 900);
  };

  // ===================================================
  // MUSIC
  // ===================================================

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }

    setIsPlaying((prev) => !prev);
  };

  // ===================================================
  // SURPRISE QUIZ
  // ===================================================

  const startQuiz = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setQuizFinished(false);
    setShowQuiz(true);
  };

  const answerQuiz = (answer) => {
    const currentQuestion = quizQuestions[quizIndex];
    const nextScore =
      quizScore + (answer === currentQuestion.answer ? 1 : 0);

    if (quizIndex === quizQuestions.length - 1) {
      setQuizScore(nextScore);
      setQuizFinished(true);
      setQuizUnlocked(nextScore === quizQuestions.length);
      return;
    }

    setQuizScore(nextScore);
    setQuizIndex((prev) => prev + 1);
  };

  const closeQuiz = () => {
    setShowQuiz(false);
    setQuizFinished(false);
  };

  // ===================================================
  // SECRET #1313 EASTER EGG
  // ===================================================

  const secretSpots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const collectSecret = (id) => {
    setFoundSecrets((prev) => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      if (next.length === secretSpots.length) {
        setTimeout(() => setShowSecretMessage(true), 500);
      }
      return next;
    });
  };

  // ===================================================
  // INTERACTIVE BIRTHDAY CAKE
  // ===================================================

  const toggleCandle = (index) => {
    setCandlesLit((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      if (next.every(Boolean)) {
        setTimeout(() => setShowFinalMessage(true), 700);
      }
      return next;
    });
  };

  const resetCake = () => {
    setCandlesLit([false, false, false]);
    setShowFinalMessage(false);
  };

  // ===================================================
  // SCROLL
  // ===================================================

  const scrollToStory = () => {
    document
      .getElementById("story")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  // ===================================================
  // SEPARATE MOVIE PAGE
  // ===================================================

  if (showRoadMovie) {
    return (
      <BirthdayRoadScene
        onBack={() => setShowRoadMovie(false)}
      />
    );
  }

  // ===================================================
  // MAIN WEBSITE
  // ===================================================

  return (
    <>
      <RevolvingNumbers />
      <div
        className="app"
        style={{ position: "relative", zIndex: 1 }}
      >
      <FloatingHearts />
      <SparkleField />

      {/* =================================================
          HERO
      ================================================= */}

      <section className="hero">
        <SecretMarker id={0} className="secret-marker-hero" onCollect={collectSecret} found={foundSecrets.includes(0)} />
        <div
          className="hero-photo"
          style={{
            backgroundImage: `url(${her1})`,
          }}
        />

        <div className="hero-photo-scrim" />

        <div className="hero-ring ring-one" />
        <div className="hero-ring ring-two" />

        <motion.div
          className="hero-glow"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="hero-content"
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
        >
          <motion.div
            className="small-label"
            initial={{
              opacity: 0,
              letterSpacing: "0px",
            }}
            animate={{
              opacity: 1,
              letterSpacing: "4px",
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
            }}
          >
            ✨ A LITTLE UNIVERSE MADE FOR YOU ✨
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              type: "spring",
            }}
          >
            Happy Birthday, {HER_NAME}
            <span> ❤️</span>
          </motion.h1>

          <motion.div
            className="hero-line"
            initial={{
              width: 0,
            }}
            animate={{
              width: 100,
            }}
            transition={{
              duration: 1,
              delay: 1.3,
            }}
          />

          <motion.p
            className="hero-subtitle"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.2,
              duration: 0.8,
            }}
          >
            For the girl who became a beautiful
            <br />
            part of my story.
          </motion.p>

          <motion.button
            className="story-button"
            onClick={scrollToStory}
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.94,
            }}
          >
            <span>Enter Our Story</span>
            <ChevronDown size={18} />
          </motion.button>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <span>SCROLL</span>
          <ChevronDown size={18} />
        </motion.div>
      </section>

      {/* =================================================
          INTRO
      ================================================= */}

      <section className="intro-section">
        <SecretMarker id={1} className="secret-marker-intro" onCollect={collectSecret} found={foundSecrets.includes(1)} />
        <motion.div
          className="intro-content"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
        >
          <Heart
            className="intro-heart"
            fill="currentColor"
          />

          <h2>
            We never needed
            <br />
            a perfect story.
          </h2>

          <p>
            We didn't meet face to face countless times.
            <br />
            We didn't have hundreds of pictures together.
            <br />
            But somehow...
          </p>

          <strong>
            We connected through the heart.
          </strong>
        </motion.div>
      </section>

      {/* =================================================
          STORY
      ================================================= */}

      <section
        id="story"
        className="story-section"
      >
        <SecretMarker id={2} className="secret-marker-story-one" onCollect={collectSecret} found={foundSecrets.includes(2)} />
        <SecretMarker id={3} className="secret-marker-story-two" onCollect={collectSecret} found={foundSecrets.includes(3)} />
        <motion.div
          className="section-heading"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <span>OUR STORY</span>

          <h2>
            Moments that
            <br />
            stayed with me.
          </h2>

          <p>
            Some memories don't need a photograph
            <br />
            to remain unforgettable.
          </p>
        </motion.div>

        <div className="timeline">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.title}
              className={`timeline-item ${
                index % 2 === 0
                  ? "left"
                  : "right"
              }`}
              initial={{
                opacity: 0,
                x:
                  index % 2 === 0
                    ? -80
                    : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
            >
              <motion.div
                className="timeline-card"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
              >
                <div className="timeline-icon">
                  {memory.icon}
                </div>

                <div className="timeline-content">
                  <span className="timeline-number">
                    {memory.number}
                  </span>

                  <h3>{memory.title}</h3>

                  <p>{memory.text}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =================================================
          DISTANCE
      ================================================= */}

      <section className="distance-section">
        <SecretMarker id={4} className="secret-marker-distance" onCollect={collectSecret} found={foundSecrets.includes(4)} />
        <motion.div
          className="distance-content"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="distance-symbol">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              ❤️
            </motion.div>
          </div>

          <span>FROM A DISTANCE</span>

          <h2>
            Sometimes,
            <br />
            seeing you from far away
            <br />
            was enough.
          </h2>

          <p>
            From the terrace.
            <br />
            From outside the home.
            <br />
            On the way to the market.
            <br />
            And those moments when you would
            <br />
            message or call me to come outside.
          </p>
        </motion.div>
      </section>

      {/* =================================================
          #1313 SECRET HUNT
      ================================================= */}

      <section className="secret-hunt-section">
        <motion.div
          className="secret-hunt-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="eyebrow">A LITTLE SECRET</span>
          <h2>Find the hidden <span>#1313</span>.</h2>
          <p>
            There are thirteen little #1313 symbols hidden throughout this universe.
            Keep exploring and tap the ones you discover.
          </p>

          <div className="secret-counter">
            <strong>{foundSecrets.length}</strong> / 13 found ❤️
          </div>

          <motion.div
            className="secret-hunt-tip"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            ✦ Some are tiny. Some are easy to miss. ✦
          </motion.div>
        </motion.div>
      </section>

      {/* =================================================
          NEW MOVIE INVITATION
      ================================================= */}

      <section className="road-movie-invitation">
        <SecretMarker id={5} className="secret-marker-movie" onCollect={collectSecret} found={foundSecrets.includes(5)} />
        <motion.div
          className="road-movie-invitation-content"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
          }}
        >
          <span className="eyebrow">
            ONE MORE MOMENT
          </span>

          <h2>
            There's a little surprise
            <br />
            waiting for you...
          </h2>

          <p>
            Come with me for one last little journey.
          </p>

          <motion.button
            className="enter-road-movie"
            onClick={() => setShowRoadMovie(true)}
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.94,
            }}
          >
            <span>Enter Our Little Movie</span>
            <span>♡</span>
          </motion.button>

          <motion.button
            onClick={startQuiz}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            style={{
              marginTop: "16px",
              padding: "13px 22px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.25)",
              background: "rgba(255,255,255,0.10)",
              color: "inherit",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            Unlock Your Surprise ✨
          </motion.button>
        </motion.div>
      </section>

      {/* =================================================
          GALLERY
      ================================================= */}

      <section className="gallery-section">
        <SecretMarker id={6} className="secret-marker-gallery-one" onCollect={collectSecret} found={foundSecrets.includes(6)} />
        <SecretMarker id={7} className="secret-marker-gallery-two" onCollect={collectSecret} found={foundSecrets.includes(7)} />
        <motion.div
          className="section-heading"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <span>HER UNIVERSE</span>

          <h2>
            A few moments
            <br />
            of you.
          </h2>

          <p>
            Six pictures.
            <br />
            Six little windows into beautiful memories.
          </p>
        </motion.div>

        <div className="photo-grid">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              className={`photo-card photo-${
                index + 1
              }`}
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.85,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -12,
              }}
              onClick={() =>
                setSelectedPhoto(photo)
              }
            >
              <div className="image-wrapper">
                <motion.img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  whileHover={{
                    scale: 1.12,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                />

                <div className="image-shine" />

                <div className="image-overlay">
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                    }}
                  >
                    <Heart
                      size={30}
                      fill="white"
                    />
                  </motion.div>

                  <span>VIEW MEMORY</span>
                </div>
              </div>

              <div className="photo-caption">
                <span>
                  0{index + 1}
                </span>

                <div className="photo-caption-text">
                  <h3>{photo.title}</h3>
                  <p>{photo.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =================================================
          22 FEBRUARY
      ================================================= */}

      <section className="special-date-section">
        <SecretMarker id={8} className="secret-marker-date" onCollect={collectSecret} found={foundSecrets.includes(8)} />
        <motion.div
          className="special-date"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
        >
          <span>
            THE DAY EVERYTHING CHANGED
          </span>

          <h2>22</h2>

          <div className="date-divider">
            FEBRUARY
          </div>

          <h3>2024</h3>

          <p>
            One message on Instagram.
            <br />
            One uncontrollable heartbeat.
            <br />
            And a feeling that never really disappeared.
          </p>
        </motion.div>
      </section>

      {/* =================================================
          LETTER
      ================================================= */}

      <section className="message-section">
        <SecretMarker id={9} className="secret-marker-message" onCollect={collectSecret} found={foundSecrets.includes(9)} />
        <motion.div
          className="message-card"
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
        >
          <Sparkles
            className="message-sparkle"
            size={32}
          />

          <span>A LETTER FOR YOU</span>

          <h2>
            There are things
            <br />
            pictures can't say.
          </h2>

          <p>
            Your words, your presence and the time
            I spent with you became memories that
            I carried with me.
          </p>

          <motion.button
            className="letter-button"
            onClick={openLetter}
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.94,
            }}
          >
            <Heart size={18} />
            Open My Letter

            {burst && (
              <span className="letter-burst">
                {Array.from({ length: 8 }).map(
                  (_, i) => (
                    <motion.span
                      key={i}
                      className="burst-heart"
                      initial={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 0.6,
                      }}
                      animate={{
                        opacity: 0,
                        x:
                          Math.cos(
                            (i / 8) *
                              Math.PI *
                              2
                          ) * 70,
                        y:
                          Math.sin(
                            (i / 8) *
                              Math.PI *
                              2
                          ) * 70,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                    >
                      ❤
                    </motion.span>
                  )
                )}
              </span>
            )}
          </motion.button>
        </motion.div>
      </section>

      {/* =================================================
          INTERACTIVE BIRTHDAY CAKE
      ================================================= */}

      <HerUniverseExtraExperience
        foundSecrets={foundSecrets}
        collectSecret={collectSecret}
      />

      <section className="cake-section">
        <SecretMarker id={11} className="secret-marker-cake" onCollect={collectSecret} found={foundSecrets.includes(11)} />
        <motion.div
          className="cake-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="eyebrow">ONE LAST LITTLE THING</span>
          <h2>Make a wish, {HER_NAME.split(" (")[0]} 🎂</h2>
          <p>Tap all three candles to light them.</p>

          <div className="birthday-cake" role="group" aria-label="Birthday cake candles">
            <div className="cake-candles">
              {candlesLit.map((lit, index) => (
                <button
                  key={index}
                  className={`cake-candle ${lit ? "lit" : ""}`}
                  onClick={() => toggleCandle(index)}
                  aria-label={lit ? `Blow out candle ${index + 1}` : `Light candle ${index + 1}`}
                >
                  <span className="candle-stick" />
                  {lit && <span className="candle-flame">✦</span>}
                </button>
              ))}
            </div>
            <div className="cake-top">♡</div>
            <div className="cake-middle" />
            <div className="cake-bottom" />
          </div>

          {candlesLit.every(Boolean) && (
            <motion.p
              className="wish-complete"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Make your wish... ✨
            </motion.p>
          )}

          <button className="reset-cake-button" onClick={resetCake}>Reset candles</button>
        </motion.div>
      </section>

      {/* =================================================
          FINAL BIRTHDAY
      ================================================= */}

      <section className="birthday-section">
        <SecretMarker id={12} className="secret-marker-birthday" onCollect={collectSecret} found={foundSecrets.includes(12)} />
        <motion.div
          className="birthday-content"
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <Gift
            className="gift-icon"
            size={40}
          />

          <span>THIS DAY IS YOURS</span>

          <h2>Happy Birthday,</h2>

          <h1>{HER_NAME}.</h1>

          <div className="stars">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  delay: item * 0.2,
                  repeat: Infinity,
                }}
              >
                <Star
                  size={20}
                  fill="currentColor"
                />
              </motion.div>
            ))}
          </div>

          <p>
            No matter how many miles,
            <br />
            how many years,
            <br />
            or how many moments pass...
            <br />
            some people remain special.
          </p>

          <motion.div
            className="final-heart"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.3,
              repeat: Infinity,
            }}
          >
            ❤️
          </motion.div>

          <div className="final-line">
            Made with memories ❤️
          </div>
        </motion.div>
      </section>

      {/* =================================================
          MUSIC
      ================================================= */}

      {SONG_SRC && (
        <>
          <audio
            ref={audioRef}
            src={SONG_SRC}
            loop
          />

          <motion.button
            className="music-decoration"
            onClick={toggleMusic}
            aria-label={
              isPlaying
                ? "Pause music"
                : "Play music"
            }
            animate={
              isPlaying
                ? { rotate: [0, 360] }
                : { rotate: 0 }
            }
            transition={{
              duration: 8,
              repeat: isPlaying
                ? Infinity
                : 0,
              ease: "linear",
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            {isPlaying ? (
              <Music size={18} />
            ) : (
              <VolumeX size={18} />
            )}
          </motion.button>
        </>
      )}

      {/* =================================================
          PHOTO MODAL
      ================================================= */}

      <Modal
        isOpen={!!selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        overlayClassName="photo-modal"
      >
        {selectedPhoto && (
          <div className="modal-content">
            <button
              className="modal-close"
              onClick={() =>
                setSelectedPhoto(null)
              }
            >
              <X size={22} />
            </button>

            <motion.img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              initial={{
                scale: 1.1,
              }}
              animate={{
                scale: 1,
              }}
            />

            <div className="modal-text">
              <span>
                {selectedPhoto.title}
              </span>

              <p>
                {selectedPhoto.text}
              </p>
            </div>
          </div>
        )}
      </Modal>

      {/* =================================================
          LETTER MODAL
      ================================================= */}

      <Modal
        isOpen={showLetter}
        onClose={closeLetter}
        overlayClassName="letter-modal"
      >
        <div className="letter">
          <button
            className="letter-close"
            onClick={closeLetter}
          >
            <X size={20} />
          </button>

          <div className="letter-top">
            <Heart
              fill="currentColor"
              size={30}
            />
          </div>

          <h2>For You ❤️</h2>

          <div className="letter-body">
            <p>
              We met when we were in class 9.
            </p>

            <p>
              Then life took us in different
              directions. After our 10th exams,
              we separated.
            </p>

            <p>
              But some connections don't disappear
              just because people become distant.
            </p>

            <p>
              I still remember those little moments.
              Going to coaching on bicycles, seeing
              you from a distance, and that one day
              when you wore a red frock.
            </p>

            <p>
              I remember the terrace moments.
              I remember seeing you outside.
              And I remember those messages and
              calls asking me to come outside.
            </p>

            <p>
              Even after we separated, I didn't
              really stop looking for you.
            </p>

            <p>
              And then came
              <strong>
                {" "}
                22 February 2024.
              </strong>
            </p>

            <p>
              When I saw your message on Instagram,
              my heart suddenly started beating so
              fast. It was like a part of my happiness
              had suddenly come back.
            </p>

            <p>
              We may not have hundreds of pictures
              together. We may not have had countless
              face-to-face moments.
            </p>

            <p>
              But your words and the time I spent
              with you became memories of my life
              that I will always remember.
            </p>

            <p className="letter-final">
              Maybe we were never close in distance,
              but somehow we were always connected
              through the heart.
            </p>
          </div>

          <div className="letter-signature">
            Always special, {HER_NAME}. ❤️
          </div>

          <button
            className="close-letter"
            onClick={closeLetter}
          >
            Close Letter
          </button>
        </div>
      </Modal>

      {/* =================================================
          CLOSING SURPRISE
      ================================================= */}

      <AnimatePresence>
        {showSurprise && (
          <motion.div
            className="surprise-note"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <Heart
              size={15}
              fill="currentColor"
            />

            <span>
              P.S. You're still my favorite part
              of this story.
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          SURPRISE QUIZ MODAL
      ================================================= */}

      <AnimatePresence>
        {showQuiz && (
          <motion.div
            className="quiz-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuiz}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              background: "rgba(10, 4, 14, 0.88)",
              backdropFilter: "blur(12px)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              onClick={(event) => event.stopPropagation()}
              style={{
                position: "relative",
                width: "min(620px, 100%)",
                maxHeight: "90vh",
                overflowY: "auto",
                padding: "34px",
                borderRadius: "28px",
                background: "rgba(35, 15, 40, 0.96)",
                border: "1px solid rgba(255,255,255,0.16)",
                boxShadow: "0 30px 100px rgba(0,0,0,0.5)",
                color: "white",
              }}
            >
              <button
                onClick={closeQuiz}
                aria-label="Close quiz"
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(255,255,255,0.08)",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <X size={20} />
              </button>

              {!quizFinished ? (
                <>
                  <div style={{ marginBottom: 24 }}>
                    <div
                      style={{
                        fontSize: 12,
                        letterSpacing: "3px",
                        opacity: 0.7,
                        marginBottom: 10,
                      }}
                    >
                      A LITTLE MEMORY QUIZ
                    </div>
                    <h2 style={{ margin: 0, fontSize: "clamp(26px, 5vw, 38px)" }}>
                      How well do you remember us? ❤️
                    </h2>
                  </div>

                  <div
                    style={{
                      height: 7,
                      borderRadius: 99,
                      background: "rgba(255,255,255,0.12)",
                      overflow: "hidden",
                      marginBottom: 22,
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${((quizIndex + 1) / quizQuestions.length) * 100}%`,
                      }}
                      style={{
                        height: "100%",
                        borderRadius: 99,
                        background: "rgba(255,255,255,0.8)",
                      }}
                    />
                  </div>

                  <div style={{ opacity: 0.7, marginBottom: 14 }}>
                    Question {quizIndex + 1} of {quizQuestions.length}
                  </div>

                  <h3
                    style={{
                      fontSize: "clamp(22px, 4vw, 30px)",
                      lineHeight: 1.35,
                      margin: "0 0 22px",
                    }}
                  >
                    {quizQuestions[quizIndex].question}
                  </h3>

                  <div
                    style={{
                      display: "grid",
                      gap: 12,
                    }}
                  >
                    {quizQuestions[quizIndex].options.map((option) => (
                      <motion.button
                        key={option}
                        onClick={() => answerQuiz(option)}
                        whileHover={{ scale: 1.02, x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          width: "100%",
                          padding: "16px 18px",
                          borderRadius: 16,
                          border: "1px solid rgba(255,255,255,0.16)",
                          background: "rgba(255,255,255,0.07)",
                          color: "white",
                          textAlign: "left",
                          fontSize: 16,
                          cursor: "pointer",
                        }}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                </>
              ) : (
                <div style={{ textAlign: "center", padding: "30px 10px 10px" }}>
                  <div style={{ fontSize: 58, marginBottom: 12 }}>
                    {quizUnlocked ? "🎉" : "💗"}
                  </div>

                  <div
                    style={{
                      fontSize: 12,
                      letterSpacing: "3px",
                      opacity: 0.7,
                      marginBottom: 10,
                    }}
                  >
                    QUIZ COMPLETE
                  </div>

                  <h2 style={{ margin: "0 0 12px", fontSize: 34 }}>
                    You got {quizScore}/{quizQuestions.length}
                  </h2>

                  {quizUnlocked ? (
                    <>
                      <p style={{ lineHeight: 1.7, opacity: 0.82 }}>
                        You remembered every little detail. ❤️
                        <br />
                        Your surprise videos are unlocked.
                      </p>

                      <button
                        onClick={closeQuiz}
                        style={{
                          marginTop: 16,
                          padding: "14px 24px",
                          border: 0,
                          borderRadius: 999,
                          background: "white",
                          color: "#2b102f",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        See My Videos ❤️
                      </button>
                    </>
                  ) : (
                    <>
                      <p style={{ lineHeight: 1.7, opacity: 0.82 }}>
                        Almost there. Get all 5 answers correct to unlock the surprise.
                      </p>

                      <button
                        onClick={startQuiz}
                        style={{
                          marginTop: 16,
                          padding: "14px 24px",
                          border: 0,
                          borderRadius: 999,
                          background: "white",
                          color: "#2b102f",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        Try Again ❤️
                      </button>
                    </>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          SECRET COMPLETE MODAL
      ================================================= */}

      <AnimatePresence>
        {showSecretMessage && (
          <motion.div
            className="secret-complete-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSecretMessage(false)}
          >
            <motion.div
              className="secret-complete-card"
              initial={{ scale: 0.7, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.7, y: 30, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="secret-big-heart">♥</div>
              <span className="eyebrow">YOU FOUND THEM ALL</span>
              <h2>You found something that was meant only for you.</h2>
              <p>
                Thirteen little signs. One little secret. And one very special person.
              </p>
              <button onClick={() => setShowSecretMessage(false)}>Keep exploring ❤️</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          FINAL WISH / FIREWORK MESSAGE
      ================================================= */}

      <AnimatePresence>
        {showFinalMessage && (
          <motion.div
            className="final-wish-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="final-firework firework-one" />
            <div className="final-firework firework-two" />
            <div className="final-firework firework-three" />
            <motion.div
              className="final-wish-card"
              initial={{ opacity: 0, scale: 0.7, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.35, type: "spring" }}
            >
              <div className="final-wish-stars">✦ ✧ ✦</div>
              <h2>Make a wish, {HER_NAME.split(" (")[0]}.</h2>
              <p>
                I hope this year gives you more reasons to smile,
                more beautiful moments, and memories worth keeping forever.
              </p>
              <div className="final-wish-number">#1313 ❤️</div>
              <button onClick={() => setShowFinalMessage(false)}>Continue the story</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          VIDEO GALLERY MODAL
      ================================================= */}

      <AnimatePresence>
        {quizUnlocked && !showQuiz && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              background: "rgba(10, 4, 14, 0.92)",
              backdropFilter: "blur(12px)",
            }}
          >
            <motion.div
              className="surprise-video-gallery"
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              style={{
                position: "relative",
                width: "min(1050px, 100%)",
                maxHeight: "92vh",
                overflowY: "auto",
                padding: "34px",
                borderRadius: "30px",
                background: "rgba(28, 11, 32, 0.98)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "white",
              }}
            >
              <button
                onClick={() => setQuizUnlocked(false)}
                aria-label="Close videos"
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "rgba(255,255,255,0.08)",
                  color: "white",
                  cursor: "pointer",
                  zIndex: 2,
                }}
              >
                <X size={20} />
              </button>

              <div style={{ textAlign: "center", marginBottom: 28 }}>
                <div
                  style={{
                    fontSize: 12,
                    letterSpacing: "3px",
                    opacity: 0.7,
                    marginBottom: 10,
                  }}
                >
                  SURPRISE UNLOCKED
                </div>
                <h2 style={{ margin: 0, fontSize: "clamp(28px, 5vw, 44px)" }}>
                  Four little videos for you ❤️
                </h2>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                  gap: 18,
                }}
              >
                {surpriseVideos.map((video, index) => (
                  <motion.div
                    key={video.src}
                    whileHover={{ y: -6 }}
                    style={{
                      overflow: "hidden",
                      borderRadius: 22,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <div style={{ position: "relative", aspectRatio: "16 / 10", background: "#100711" }}>
                      <video
                        src={video.src}
                        muted
                        playsInline
                        preload="metadata"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "linear-gradient(transparent, rgba(0,0,0,0.55))",
                        }}
                      >
                        <button
                          onClick={() => setSelectedVideo(video)}
                          style={{
                            width: 58,
                            height: 58,
                            borderRadius: "50%",
                            border: "1px solid rgba(255,255,255,0.7)",
                            background: "rgba(255,255,255,0.18)",
                            color: "white",
                            fontSize: 24,
                            cursor: "pointer",
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          ▶
                        </button>
                      </div>
                    </div>

                    <div style={{ padding: 18 }}>
                      <div style={{ opacity: 0.55, fontSize: 12, marginBottom: 6 }}>
                        0{index + 1}
                      </div>
                      <h3 style={{ margin: "0 0 8px", fontSize: 21 }}>
                        {video.title}
                      </h3>
                      <p style={{ margin: 0, opacity: 0.7, lineHeight: 1.5 }}>
                        {video.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          FULL VIDEO PLAYER
      ================================================= */}

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="selected-video-player"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="selected-video-close"
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video"
              >
                <X size={20} />
              </button>

              <div className="selected-video-wrapper">
                <video
                  className="selected-video-element"
                  key={selectedVideo.src}
                  src={selectedVideo.src}
                  autoPlay
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>

              <div className="selected-video-info">
                <h3>{selectedVideo.title} ❤️</h3>
                <p>{selectedVideo.subtitle}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
    </>
  );
}

export default App;
