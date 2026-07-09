"use client";

import { Student, students } from "@/data/data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useMemo, useState } from "react";
import CustomButton from "../custom/CustomButton";

const INITIAL_COUNT = 12;

export default function StudentDirectory() {
  const [showAll, setShowAll] = useState(false);

  const visibleStudents = useMemo(() => {
    return showAll ? students : students.slice(0, INITIAL_COUNT);
  }, [showAll]);

  return (
    <section className="bg-[#F3F4F6] py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">

        <span className="section-label inline-flex w-full justify-center mx-auto text-center text-black">THE Supreme Coach STUDENT DIRECTORY</span>

        <h2 className="mt-3 section-title mx-auto text-center text-black">
          Develop Your Business Network
        </h2>

        <div id="temp" className="relative mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-12">
          {!showAll && <div className="absolute min-h-96 bottom-0 w-full bg-linear-to-b from-[#F3F4F6]/5 to-[#F3F4F6]/90 z-10" />}
          {visibleStudents.map((student) => {

            return (
              FlipStudentCard(student)
            );
          })}
        </div>

        {students.length > INITIAL_COUNT && (
          <div className={`flex relative z-20 justify-center ${showAll ? " mt-8" : "-mt-12"}`} >
            <CustomButton
              onClick={() => {
                if (showAll) {
                  document.getElementById("temp")?.scrollIntoView({ behavior: "smooth" });
                }
                setShowAll((prev) => !prev);
              }}
              text={showAll ? "See Less" : "See More"}
              variant="outlined"
              icon={showAll ? "mdi:arrow-up" : "mdi:arrow-down"}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export function FlipStudentCard(student: Student) {
  return <div
    key={student.id}
    className="relative group"
  >
    <QuoteCard
      student={student} />
    <ProfileCard
      student={student} />
  </div>;
}

function ProfileCard({
  student,
}: {
  student: Student;
}) {
  return (
    <button
      type="button"
      className="group block group-hover:hidden relative h-[240px] w-full overflow-hidden rounded-[18px] bg-black text-left transition duration-300 hover:-translate-y-[2px] sm:h-[260px] md:h-[320px] lg:h-[348px]"
    >
      <Image
        src={student.image}
        alt={student.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute left-4 top-4 rounded-[4px] bg-black/55 px-2 py-1.5 text-[10px] font-[700] leading-none text-white sm:text-[11px]">
        {student.location}
      </div>

      <div className="absolute right-4 top-4 text-[26px] leading-none text-white/90">
        ›
      </div>

      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5">
        <h3 className="text-[18px] font-[400] leading-[1.02] tracking-[-0.03em] text-white/90 sm:text-[22px] lg:text-[24px]">
          {student.name}
        </h3>

        <p className="mt-1 text-[11px] font-[400] leading-[1.25] text-white/65 sm:text-[13px] lg:text-[16px]">
          {student.role}, {student.company}
        </p>
      </div>
    </button>
  );
}

export function QuoteCard({
  student,
}: {
  student: Student;
}) {
  return (
    <div className="relative hidden text-start group-hover:flex h-[220px] w-full flex-col rounded-[18px] border border-black/10 bg-[#f6f6f6] p-4 sm:h-[260px] sm:p-5 md:h-[320px] lg:h-[348px] lg:p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[16px] font-[400] leading-none tracking-[-0.03em] text-[#1f1f1f] sm:text-[18px]">
          {student.name}
        </h3>

        <button
          type="button"
          className="text-[23px] cursor-pointer leading-none text-[#1f1f1f]"
        >
          ×
        </button>
      </div>

      <div className="mt-0.5 h-px w-full bg-black/70" />

      <div className="mt-10 flex-1">
        <p className="stylish-family text-[16px] leading-[1.38] text-black/70 sm:text-[18px] lg:text-[20px] lg:leading-[1.45]">
          {student.quote}
        </p>
      </div>

      <p className="mt-4 text-[12px] font-[400] text-[#707070] sm:text-[13px] lg:text-[14px]">
        {student.classLabel}
      </p>
    </div>
  );
}