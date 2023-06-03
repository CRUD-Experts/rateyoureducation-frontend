import { lecturers } from "../DummyData"
import { StackedImages } from "./Aesthetics/StackedImages";
import Section from "./Elements/Section"
import SectionHeader from "./Headers/SectionHeader"
import { IndiLectureRank } from "./IndiLectureRank";

export const LecturerRanking = () => {
  const data = lecturers;
  return (
    <>
        <Section className="p-5">
            <SectionHeader title="Best Lecturers" />
            <div className="flex tablet:flex-row flex-col-reverse gap-10 mt-14 items-center">
              <div className="w-full">
              <h3 className="mb-2 font-semibold">Top 5 lecturers</h3>
              {
                data.map((rank, index) => (
                  <IndiLectureRank
                    rank={index + 1}
                    key={index}
                    name={rank.name}
                    imageUrl={rank.imageUrl}
                    research={rank.noOfResearch}
                    citations={rank.citations}
                    hIndex={rank.hIndex}
                  />
                ))
              }
              </div>
              <StackedImages />
            </div>

        </Section>
    </>
  )
}
