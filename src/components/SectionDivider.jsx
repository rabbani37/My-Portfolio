const SectionDivider = () => {
    return (
        <div className="my-5">
            <div className="flex items-center justify-center max-w-4xl mx-auto px-4">
                {/* বাম দিকের লাইন — fade effect দিয়ে শুরু */}
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-base-content/20" />

                {/* মাঝখানে ছোট decorative dot */}
                <div className="w-2 h-2 rounded-full bg-primary mx-4" />

                {/* ডান দিকের লাইন */}
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-base-content/20" />
            </div>
        </div>
    )
}

export default SectionDivider