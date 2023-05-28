import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "./Elements/Section";
import SectionHeader from "./Headers/SectionHeader";
import { faDownload, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const UniversityRanking = () => {
  return (
    <Section className="p-5">
      <SectionHeader
        title="Top Universities"
        subttile="Welcome to our TOP UNIVERSITY section, where we showcase
      the very best universities in the world! Our rankings are based
      on a variety of factors, including academic performance, research
      output, student satisfaction, and more."
      />

      <div className="flex tablet:flex-row flex-col ">
        <div className="flex-1">
          <h3 className="mb-2 font-semibold">Top 5 Universities</h3>

          <div>
            <div>
              {/* filters menu */}
              <div className="flex items-center justify-between bg-light-100 p-4">
                <div className="flex gap-3">
                  {/* <label htmlFor="location" className="hidden">Location</label> */}
                  <select
                    name="location"
                    id="location"
                    className="rounded-xl px-8 text-sm"
                  >
                    <option value="location">Location</option>
                    <option value="location">location</option>
                  </select>

                  {/* <label htmlFor="duration" className="hidden">Duration</label> */}
                  <select
                    name="duration"
                    id="duration"
                    className="rounded-xl px-8 text-sm"
                  >
                    <option value="duration">1 year</option>
                    <option value="duration">6 months</option>
                    <option value="duration">3 months</option>
                    <option value="duration">1 month</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="p-1 grid place-items-center w-8 h-8 rounded-full hover:bg-light-900 drop-shadow-sm"
                  >
                    <FontAwesomeIcon icon={faDownload} />
                  </motion.button>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="p-1 grid place-items-center w-8 h-8 rounded-full hover:bg-light-900 drop-shadow-sm"
                  >
                    <FontAwesomeIcon icon={faShareAlt} />
                  </motion.button>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>

        <div className="flex-2 bg-light-900">{/* stacked images */}</div>
      </div>
    </Section>
  );
};

export default UniversityRanking;
