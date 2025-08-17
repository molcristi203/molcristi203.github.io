"use client"

interface Props {
    children : React.ReactNode
}

export default function SingleSection({children} : Props) {
    return (
        <div className="flex w-full sm:flex-row flex-col box-border border-b-2 border-black lg:text-2xl md:text-xl sm:text-xl text-sm sm:p-8 p-4">
            {children}
        </div>
    );
}