import NPCDataInterface from "./NPCDataInterface";

const nextButtonOnlyChoices = [{ choiceText: "Next", isAnswer: true }];

export const MIN_HEIN: NPCDataInterface = {
  name: "Min Hein",
  dialogs: {
    content: `Hi! I'm Min Hein, the Strat-Acad Liaison Association Director of Avente Consulting!`,
    choices: nextButtonOnlyChoices,

    dialogAfterCorrect: {
      content: `Avente, in partnership with UOB-SMU AEI, is SMU’s very first consulting CCA focused on SMEs. We aim to help SMEs adapt to changing digital landscapes through in-house project implementations!`,
      choices: nextButtonOnlyChoices,

      dialogAfterCorrect: {
        content: `As a student led organization, we aim to provide solutions for SMEs! Do you know what Avente’s vision is?`,
        choices: nextButtonOnlyChoices,

        dialogAfterCorrect: {
          content: `To be a leading (blank) club providing (blank) solutions for SMEs whilst possessing strong credentials of achievement.`,
          choices: [
            {
              choiceText: `Business Consulting / Innovative, Sustainable`,
              isAnswer: true,
            },
            {
              choiceText: `Marketing Consulting / Digitalized, Implementable`,
              isAnswer: false,
            },
            {
              choiceText: `Marketing Tech Consulting / Strong, Relevant`,
              isAnswer: false,
            },
            {
              choiceText: `Marketing Tech Consulting / Innovative, Sustainable`,
              isAnswer: false,
            },
          ],
          dialogAfterCorrect: {
            content: `That’s correct!`,
            choices: nextButtonOnlyChoices,

            dialogAfterCorrect: {
              content: `Head over to Kingston to hear about Avente’s mission!`,
              choices: nextButtonOnlyChoices,
            },
          },
          dialogAfterWrong: {
            content: `Oopsie, very close! Avente’s vision is to “To be a leading Business Consulting club providing innovative, sustainable solutions for SMEs whilst possessing strong credentials of achievement.” `,
            choices: nextButtonOnlyChoices,

            dialogAfterCorrect: {
              content: `Head over to Kingston to hear about Avente’s mission!`,
              choices: nextButtonOnlyChoices,
            },
          },
        },
      },
    },
  },
};

export const KINGSTON: NPCDataInterface = {
  name: "Kingston",
  dialogs: {
    content: `Hi! I’m Kingston, the Events Director of Avente Consulting!`,
    choices: nextButtonOnlyChoices,
    dialogAfterCorrect: {
      content: `In Avente, we hope to equip our students with a growth mindset! I guess you could say, we hope everyone has an EVENT-ful experience! Do you know what our mission is?`,
      choices: nextButtonOnlyChoices,
      dialogAfterCorrect: {
        content: `To equip students with a (blank) mindset which explores (blank) drivers through our case pedagogy.`,
        choices: [
          { choiceText: `Rational, spontaneous / Economic`, isAnswer: false },
          { choiceText: `Sharp, quick-witted / Creativity`, isAnswer: false },
          {
            choiceText: `Curious, problem solving / Digitalization`,
            isAnswer: true,
          },
          { choiceText: `Strategic / Technological`, isAnswer: false },
        ],
        dialogAfterCorrect: {
          content: `Voila, well done! We hope to enable students such as yourself through project initiatives that target holistic personal growth `,
          choices: nextButtonOnlyChoices,
          dialogAfterCorrect: {
            content: `Have a chat with Benedict about the events that we are rolling out!`,
            choices: nextButtonOnlyChoices,
            dialogAfterCorrect: {
              content: `Have a chat with Benedict about the events that we are rolling out!`,
              choices: nextButtonOnlyChoices,
            },
          },
        },
        dialogAfterWrong: {
          content: `Sorry champ, Avente’s mission is actually to “To equip students with a curious, problem solving mindset which explores Digitalization drivers through our case pedagogy. We enable these students through initiatives that target holistic personal growth.”`,
          choices: nextButtonOnlyChoices,
          dialogAfterCorrect: {
            content: `Now that you know about our mission and vision, why not have a chat with Benedict to find out about the events that we are rolling out!`,
            choices: nextButtonOnlyChoices,
          },
        },
      },
    },
  },
};

export const BENEDICT: NPCDataInterface = {
  name: "Benedict",
  dialogs: {
    content: `Hi! I’m Benedict, the Finance Director of Avente Consulting and one of the three Co-Chairs of Avente Welfare Day 2020!`,
    choices: nextButtonOnlyChoices,
    dialogAfterCorrect: {
      content: `Our parent organization, UOB-SMU Asian Enterprise Institute (UOB-SMU AEI), is a re-commitment in the partnership between UOB, SMU and other local enterprises.`,
      choices: nextButtonOnlyChoices,
      dialogAfterCorrect: {
        content: `It is fully dedicated in providing highly subsidized consulting projects which are implementable by SMU students under the guidance of seasoned industry professionals.`,
        choices: nextButtonOnlyChoices,
        dialogAfterCorrect: {
          content: `As a finance guy, we are always talking about interests in our investments.`,
          choices: nextButtonOnlyChoices,
          dialogAfterCorrect: {
            content: `Touching on the topic of interest, there are various ways that students like you can join us!`,
            choices: nextButtonOnlyChoices,
            dialogAfterCorrect: {
              content: `Avente Student Consultant ⇒ Where you will go through a curriculum curated by our Strategy and Academic Team to be equipped and take on a consulting project!`,
              choices: nextButtonOnlyChoices,
              dialogAfterCorrect: {
                content: `Avente Mentorship Programme ⇒ Where you receive mentorship from the Exco team and be part of planning our flagship events!`,
                choices: nextButtonOnlyChoices,
                dialogAfterCorrect: {
                  content: `Unabridged and Pinnacle Series ⇒ A set of curated sessions with professionals of various industries opened to all students of SMU to join us!`,
                  choices: nextButtonOnlyChoices,
                  dialogAfterCorrect: {
                    content: `I’m sure that this will be a good investment of your time!`,
                    choices: nextButtonOnlyChoices,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export const GREGORY: NPCDataInterface = {
  name: "Gregory",
  dialogs: {
    content: `Hi! I’m Gregory, the Academic Partnerships Director in Avente Consulting! After all that’s said and done, which of the following statements best describes a consultant’s role in an implementation project?`,
    choices: [
      {
        choiceText: `Provides specialized expertise to corporations , in view of maximizing profitability and efficiency among other competitors.`,
        isAnswer: false,
      },
      {
        choiceText: `Execute a business strategy on behalf of the consulting firm, regardless of its advisory role.`,
        isAnswer: true,
      },
      {
        choiceText: `Provides organizational leaders with opportunities, training and experience to expand their knowledge and skillset.`,
        isAnswer: false,
      },
      {
        choiceText: `Advises clients on business restructuring , as well as the current economic climate.`,
        isAnswer: false,
      },
    ],
    dialogAfterCorrect: {
      content: `Great job buckaroo! Consultants are often seen as problem solvers, but there is a fine line between advisory projects and implementation projects!`,
      choices: nextButtonOnlyChoices,
      dialogAfterCorrect: {
        content: `Do proceed to Chloe to find out more about the consultancy spectrum!`,
        choices: nextButtonOnlyChoices,
      },
    },
    dialogAfterWrong: {
      content: `Aw mate that ain’t it! The correct answer is to aid corporations via execution of a business strategy. The execution differentiates an implementation from advisory contexts.`,
      choices: nextButtonOnlyChoices,
      dialogAfterCorrect: {
        content: `Do proceed to Chloe to find out more about the consultancy spectrum!`,
        choices: nextButtonOnlyChoices,
      },
    },
  },
};

export const CHLOE: NPCDataInterface = {
  name: "Chloe",
  dialogs: {
    content: `Hi! I’m Chloe, the Associate Marketing Director of Avente Consulting!`,
    choices: nextButtonOnlyChoices,
    dialogAfterCorrect: {
      content: `Marketing is one of the major types of consulting. Apart from marketing, which of the following is a major type of consulting as well?`,
      choices: [
        { choiceText: `Feng Shui`, isAnswer: false },
        { choiceText: `Design`, isAnswer: false },
        { choiceText: `Medical`, isAnswer: false },
        { choiceText: `Management`, isAnswer: true },
      ],
      dialogAfterCorrect: {
        content: `You are on fire! Apart from management consulting, there are 4 more major types of consulting, namely, IT, Financial, HR and Marketing consulting!`,
        choices: nextButtonOnlyChoices,
        dialogAfterCorrect: {
          content: `Speak to Adrian. He will show you the way forward, chosen one!`,
          choices: nextButtonOnlyChoices,
        },
      },
      dialogAfterWrong: {
        content: `Shucks, guess the options were pretty tough!  The correct answer is Management! Alongside are 4 more major types of consulting, namely IT, Financial, HR and Marketing!`,
        choices: nextButtonOnlyChoices,
        dialogAfterCorrect: {
          content: `Speak to Adrian. He will show you the way forward, chosen one!`,
          choices: nextButtonOnlyChoices,
        },
      },
    },
  },
};

// ADRIAN - personality quiz

export const WAI_SIANG: NPCDataInterface = {
  name: "Wai Siang",
  dialogs: {
    content: `Hi! I’m Wai Siang, the Communications Director of Avente Consulting!`,
    choices: nextButtonOnlyChoices,
    dialogAfterCorrect: {
      content: `As a club that largely focuses on collaborations with SMEs, alongside the exponential growth in local SMEs, what does the acronym ‘SME’ represent?`,
      choices: [
        { choiceText: `Social Media Engagement`, isAnswer: false },
        { choiceText: `Subject Matter Expertise`, isAnswer: false },
        { choiceText: `Sony Music Entertainment`, isAnswer: false },
        { choiceText: `Small and Medium-Sized Enterprises`, isAnswer: true },
      ],
      dialogAfterCorrect: {
        content: `Muy Bien! Moreover, SMEs are generally defined as companies with annual turnover <S$100m, or employ <200 workers!`,
        choices: nextButtonOnlyChoices,
        dialogAfterCorrect: {
          content: `Svarnim will share more about the relevance of SME in our future careers!`,
          choices: nextButtonOnlyChoices,
        },
      },
      dialogAfterWrong: {
        content: `Just a tad off, Amigo! SMEs stands for Small and Medium-sized Enterprises! They are generally characterised as firms with annual turnover <S$100m, or employ <200 workers.`,
        choices: nextButtonOnlyChoices,
        dialogAfterCorrect: {
          content: `Svarnim will share more about the relevance of SME in our future careers!`,
          choices: nextButtonOnlyChoices,
        },
      },
    },
  },
};

export const SVARNIM: NPCDataInterface = {
  name: "Svarnim",
  dialogs: {
    content: `Hi! I’m Svarnim, the Associate Communications Director of Avente Consulting and one of the three Co-Chairs of Avente Welfare Day 2020!`,
    choices: nextButtonOnlyChoices,
    dialogAfterCorrect: {
      content: `I came across some information on SMEs too! they are absolutely pivotal towards Singapore’s economy! Interestingly, SMEs constitutes more than 99% of all enterprises in Singapore, while contributing a whopping 48% of its GDP.`,
      choices: nextButtonOnlyChoices,
      dialogAfterCorrect: {
        content: `Furthermore, SMEs employ about 65% of its workforce, a sizable feat if you would agree! Chances are, between the two of us, at least one of us is going to end up in an SME upon graduation!`,
        choices: [
          {
            choiceText: `Wow, I never knew that, they’re more important than I expected!`,
            isAnswer: false,
          },
          {
            choiceText: `I’ve heard that before, but it’s truly incredible when you put it in perspective! `,
            isAnswer: false,
          },
        ],
        dialogAfterWrong: {
          content: `It’s time to party! Go over to the carnival and join us in the fun!`,
          choices: nextButtonOnlyChoices,
        },
      },
    },
  },
};

export const DONALD: NPCDataInterface = {
  name: "Donald",
  dialogs: {
    content: `Hi! I’m Donald, the Strategic Development Director of Avente Consulting!`,
    choices: nextButtonOnlyChoices,
    dialogAfterCorrect: {
      content: `What is the Unabridged series & Pinnacle series about?`,
      choices: nextButtonOnlyChoices,
      dialogAfterCorrect: {
        content: `Avente works with different SMEs with the help of SMU UOB-AEI. We are a community that hopes to grow SMU students into capable consultants with the help of our signature programmes like the Unabridged series & Pinnacle series!`,
        choices: [
          { choiceText: `Oooo how interesting, tell me more!`, isAnswer: true },
        ],
        dialogAfterCorrect: {
          content: `Avente’s Unábridged series, like Experience Digital, is a sharing series introduced by SMU Avente Consulting where industry experts are invited to share insights and perspectives on the overarching theme of digitalization.`,
          choices: nextButtonOnlyChoices,
          dialogAfterCorrect: {
            content: `Pinnacle is Avente’s new series of curated seminars. In partnership with renown industry experts, we hope to challenge and prepare students for the rigorous industry.`,
            choices: [
              // After last choice popup feedback
              {
                choiceText: `Cool! I wonder how I can put this to good use.`,
                isAnswer: true,
              },
            ],
          },
        },
      },
    },
  },
};

export const SAMANTHA: NPCDataInterface = {
  name: "Samantha",
  dialogs: {
    content: `Hi! I’m Samantha, the Marketing Director of Avente Consulting!`,
    choices: nextButtonOnlyChoices,
    dialogAfterCorrect: {
      content: `What is a Student Consultant and how to become one?
    · If you’re interested in consultancy work especially when working with SMEs, you may join us on our journey as student consultants!
    · SMU students can join Avente Consulting as a Student Consultant trainee where, upon completion of the curriculum, they become student consultants well-equipped to take on the AEI consulting projects. Join us to become the 3rd Batch of Student Consultants at this link!
    · As a student consultant, you will go through an 8-week curriculum curated by our Strategy and Academic Team and proceed into specialized tracks to make you a better consultant!
    · To find out more about the recruitment process, head over to this link to our info session deck!
        o LINK
    · If you are already interested, sign up as a student consultant here!
        o LINK
    · Have fun!`,
      choices: nextButtonOnlyChoices,
    },
  },
};
