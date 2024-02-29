"use client"

interface SectionProps {
    left : React.ReactNode[]
    right : React.ReactNode[]
    reverse? : boolean
}

export default function Section({left, right, reverse} : SectionProps) {
    return (
        <div className={`flex w-full sm:flex-row flex-col${reverse ? "-reverse" : ""} box-border border-b-2 border-black`}>
            <div className="flex-1 flex flex-col lg:text-2xl md:text-xl sm:text-xl text-sm sm:h-[50vw] lg:h-[35vw] h-[100vw] border-b-2 sm:border-b-0 border-black text-justify sm:p-8 p-4">
                {left}
            </div>
            <div className="flex-1 flex flex-col lg:text-2xl md:text-xl sm:text-xl text-sm sm:h-[50vw] lg:h-[35vw] h-[100vw] border-b-2 sm:border-l-2 sm:border-b-0 border-black text-justify sm:p-8 p-4">
                {right}
            </div>
        </div>
    );
}