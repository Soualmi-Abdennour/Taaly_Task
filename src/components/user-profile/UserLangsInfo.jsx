import { FR, GB, US } from "country-flag-icons/react/3x2";
import LangField from "../LangField";
import { LANGUAGES_AND_INTERESTS_CARDS } from "@/constants/constants";
import { getLabelEmoji } from "@/lib/utils/getLabelEmoji";



function UserLangsInfo({ user }) {
  const { interests, level, other_languages, mother_language } = user;

  // create object (object of arrays) so we can get the value based on the keys in the LANGUAGES_AND_INTERESTS_CARDS object 
  const cards = { interests, level, other_languages, mother_language };
  
  return (
    <section className="grid grid-cols-4 gap-5 mb-5">
      {LANGUAGES_AND_INTERESTS_CARDS.map((card) =>(
          <div
            key={card.cardLabel}
            className="bg-primary rounded-16 pt-5 pb-12 px-6"
          >
            <h2 className="text-heading-4 text-body font-semibold mb-4">
              {card.cardLabel}
            </h2>
            <div className="flex gap-2 flex-wrap">
              {/* map throw every array and get the label and the correspond emoji from the correspondList (flag or emoji) */}
              {cards[card.correspondDBLabel].map((label) => (
                <LangField
                  key={label}
                  label={label}
                  emoji={getLabelEmoji(label, card.correspondList)}
                ></LangField>
              ))}
            </div>
          </div>
      ))}
    </section>
  );
}

export default UserLangsInfo;
