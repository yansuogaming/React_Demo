const SummerTipsBox = () => {
    return (
        <section className="container mx-auto px-4 py-10">
            <div className="bg-[#e9f1f6] rounded-[40px] p-6 sm:p-8 md:p-10">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1A2A44] mb-4">
                    How to make the most of your summer
                </h2>
                <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base text-[#1A2A44]">
                    <li>
                        Although temperatures are cooler during Dubai’s winter
                        season, you should still wear sunscreen, headwear and
                        sunglasses to protect your skin from the sun’s rays
                    </li>
                    <li>Drink plenty of water throughout the day</li>
                    <li>
                        Night-time can be a little chilly, especially from
                        December to February, so it’s advisable to bring a
                        sweater if you’re spending the evening outside
                    </li>
                    <li>
                        If you’re planning an overnight trip to the desert,
                        remember that temperatures can drop lower than in the
                        city once the sun goes down, so it’s best to bring extra
                        layers
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default SummerTipsBox;
