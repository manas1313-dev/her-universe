import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Mail, Moon, Sparkles, Star, Gift } from "lucide-react";

const memories = [
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

function HerUniverseExtraExperience({
  onSecretFound,
  onFinalSecret,
}) {
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [lastQuestionAnswer, setLastQuestionAnswer] = useState(null);
  const [showFinalSecret, setShowFinalSecret] = useState(false);

  const chooseMemory = (memory) => {
    setSelectedMemory(memory);
  };

  const chooseLetter = (letter) => {
    setSelectedLetter(letter);
  };

  const answerQuestion = (answer) => {
    setLastQuestionAnswer(answer);
  };

  const revealFinalSecret = () => {
    setShowFinalSecret(true);

    if (onFinalSecret) {
      onFinalSecret();
    }
  };

  return (
    <>
      {/* =================================================
          CHOOSE A MEMORY
      ================================================= */}

      <section className="extra-memory-section">
        <motion.div
          className="extra-section-heading"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <span className="extra-eyebrow">
            YOU GET TO CHOOSE
          </span>

          <h2>
            Pick a little piece
            <br />
            of our story.
          </h2>

          <p>
            Maybe you want a memory.
            Maybe a feeling.
            Maybe a secret.
          </p>
        </motion.div>

        <div className="memory-choice-grid">
          {memories.map((memory, index) => (
            <motion.button
              key={memory.id}
              className="memory-choice-card"
              onClick={() => chooseMemory(memory)}
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
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <span className="memory-choice-icon">
                {memory.icon}
              </span>

              <span className="memory-choice-title">
                {memory.title}
              </span>

              <span className="memory-choice-small">
                Tap to open
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* =================================================
          MEMORY RESULT
      ================================================= */}

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="extra-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              className="extra-modal-card"
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 40,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <div className="extra-modal-icon">
                {selectedMemory.icon}
              </div>

              <span className="extra-eyebrow">
                A LITTLE PIECE OF US
              </span>

              <h2>
                {selectedMemory.title}
              </h2>

              <p>
                {selectedMemory.text}
              </p>

              <button
                className="extra-close-button"
                onClick={() =>
                  setSelectedMemory(null)
                }
              >
                Keep exploring ❤️
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          HIDDEN LETTERS
      ================================================= */}

      <section className="hidden-letter-section">
        <motion.div
          className="extra-section-heading"
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
            amount: 0.25,
          }}
        >
          <span className="extra-eyebrow">
            SOME THINGS ARE BETTER WRITTEN
          </span>

          <h2>
            There are a few
            <br />
            letters hidden here.
          </h2>

          <p>
            Open whichever one calls your attention.
          </p>
        </motion.div>

        <div className="hidden-letter-grid">
          {hiddenLetters.map((letter, index) => (
            <motion.button
              key={letter.title}
              className="hidden-letter-card"
              onClick={() => chooseLetter(letter)}
              initial={{
                opacity: 0,
                y: 50,
                rotate: index % 2 === 0 ? -2 : 2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -8,
                rotate: index % 2 === 0 ? 1 : -1,
              }}
            >
              <div className="envelope-icon">
                <Mail size={28} />
              </div>

              <span>
                {letter.title}
              </span>

              <small>
                Open letter
              </small>
            </motion.button>
          ))}
        </div>
      </section>

      {/* =================================================
          LETTER MODAL
      ================================================= */}

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
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: -4,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                rotate: 4,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <div className="letter-paper-heart">
                <Heart
                  size={25}
                  fill="currentColor"
                />
              </div>

              <span className="extra-eyebrow">
                A LETTER FOR YOU
              </span>

              <h2>
                {selectedLetter.title}
              </h2>

              <p>
                {selectedLetter.text}
              </p>

              <div className="letter-paper-signature">
                With love,
                <br />
                <strong>
                  #1313
                </strong>
              </div>

              <button
                className="extra-close-button"
                onClick={() =>
                  setSelectedLetter(null)
                }
              >
                Close letter
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          NIGHT SKY
      ================================================= */}

      <section className="night-sky-section">
        <div className="night-sky-stars">
          {Array.from({ length: 70 }).map(
            (_, index) => (
              <motion.span
                key={index}
                style={{
                  left: `${(index * 37) % 100}%`,
                  top: `${(index * 53) % 100}%`,
                }}
                animate={{
                  opacity: [
                    0.15,
                    0.9,
                    0.15,
                  ],
                  scale: [
                    0.7,
                    1.2,
                    0.7,
                  ],
                }}
                transition={{
                  duration:
                    2 + (index % 4),
                  delay:
                    index * 0.08,
                  repeat: Infinity,
                }}
              >
                {index % 7 === 0
                  ? "✦"
                  : "·"}
              </motion.span>
            )
          )}
        </div>

        <motion.div
          className="night-moon"
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <Moon size={75} />
        </motion.div>

        <motion.div
          className="night-sky-content"
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
          }}
        >
          <span className="extra-eyebrow">
            SOMEWHERE UNDER THIS SKY
          </span>

          <h2>
            There is still a story
            <br />
            called us.
          </h2>

          <p>
            Different days.
            Different places.
            Same sky.
          </p>

          <div className="night-sky-number">
            #1313
          </div>
        </motion.div>
      </section>

      {/* =================================================
          ONE LAST QUESTION
      ================================================= */}

      <section className="last-question-section">
        <motion.div
          className="last-question-card"
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <Sparkles size={30} />

          <span className="extra-eyebrow">
            ONE LAST QUESTION
          </span>

          <h2>
            If you could relive
            <br />
            one moment...
          </h2>

          <p>
            Which one would you choose?
          </p>

          <div className="last-question-options">
            <button
              className={
                lastQuestionAnswer ===
                "class9"
                  ? "selected"
                  : ""
              }
              onClick={() =>
                answerQuestion("class9")
              }
            >
              Class 9
            </button>

            <button
              className={
                lastQuestionAnswer ===
                "bicycle"
                  ? "selected"
                  : ""
              }
              onClick={() =>
                answerQuestion("bicycle")
              }
            >
              Bicycle days
            </button>

            <button
              className={
                lastQuestionAnswer ===
                "terrace"
                  ? "selected"
                  : ""
              }
              onClick={() =>
                answerQuestion("terrace")
              }
            >
              Terrace moments
            </button>

            <button
              className={
                lastQuestionAnswer ===
                "instagram"
                  ? "selected"
                  : ""
              }
              onClick={() =>
                answerQuestion("instagram")
              }
            >
              22 February 2024
            </button>
          </div>

          <AnimatePresence>
            {lastQuestionAnswer && (
              <motion.div
                className="question-response"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
              >
                <Heart
                  size={17}
                  fill="currentColor"
                />

                <span>
                  Whatever you chose,
                  I'm glad that moment
                  exists in our story. ❤️
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* =================================================
          FINAL SECRET
      ================================================= */}

      <section className="final-secret-section">
        <motion.div
          className="final-secret-content"
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
        >
          <span className="extra-eyebrow">
            ONE LAST SECRET
          </span>

          <h2>
            You found the end...
            <br />
            but not quite.
          </h2>

          <p>
            There is one more little thing
            hidden behind this number.
          </p>

          <motion.button
            className="final-secret-button"
            onClick={revealFinalSecret}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.94,
            }}
          >
            <span>#1313</span>
            <Heart
              size={18}
              fill="currentColor"
            />
          </motion.button>
        </motion.div>
      </section>

      {/* =================================================
          FINAL SECRET MODAL
      ================================================= */}

      <AnimatePresence>
        {showFinalSecret && (
          <motion.div
            className="extra-overlay final-secret-overlay"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setShowFinalSecret(false)
            }
          >
            <div className="final-secret-stars">
              {Array.from({
                length: 35,
              }).map((_, index) => (
                <motion.span
                  key={index}
                  style={{
                    left: `${(index * 29) % 100}%`,
                    top: `${(index * 41) % 100}%`,
                  }}
                  animate={{
                    opacity: [
                      0,
                      1,
                      0,
                    ],
                    scale: [
                      0.5,
                      1.3,
                      0.5,
                  },
                  }}
                  transition={{
                    duration:
                      2 +
                      (index % 3),
                    delay:
                      index * 0.1,
                    repeat: Infinity,
                  }}
                >
                  ✦
                </motion.span>
              ))}
            </div>

            <motion.div
              className="final-secret-card"
              initial={{
                opacity: 0,
                scale: 0.6,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 16,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <div className="final-secret-heart">
                <Heart
                  size={55}
                  fill="currentColor"
                />
              </div>

              <span className="extra-eyebrow">
                THE LAST SECRET
              </span>

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
                But the biggest secret was
                never hidden anywhere.
              </p>

              <strong>
                You were the reason
                this little universe existed.
              </strong>

              <div className="final-secret-number">
                #1313 ❤️
              </div>

              <button
                className="extra-close-button"
                onClick={() =>
                  setShowFinalSecret(false)
                }
              >
                Continue to the ending
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          CINEMATIC CREDITS
      ================================================= */}

      <section className="cinematic-credits">
        <motion.div
          className="credits-content"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          <div className="credits-line" />

          <span>
            HER UNIVERSE
          </span>

          <h2>
            Kismiss
          </h2>

          <p>
            A story made from
            <br />
            memories, moments,
            <br />
            distance and feelings.
          </p>

          <div className="credits-block">
            <small>
              STARRING
            </small>

            <strong>
              Kismiss
            </strong>
          </div>

          <div className="credits-block">
            <small>
              SPECIAL NUMBER
            </small>

            <strong>
              #1313
            </strong>
          </div>

          <div className="credits-block">
            <small>
              MADE WITH
            </small>

            <strong>
              ❤️
            </strong>
          </div>

          <div className="credits-stars">
            <Star size={15} fill="currentColor" />
            <Star size={20} fill="currentColor" />
            <Star size={15} fill="currentColor" />
          </div>

          <div className="credits-end">
            THE END
          </div>

          <p className="credits-footer">
            ...or maybe just the beginning.
          </p>
        </motion.div>
      </section>
    </>
  );
}

export default HerUniverseExtraExperience;