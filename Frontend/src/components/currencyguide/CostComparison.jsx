const costData = [
    {
        item: "A short taxi ride",
        aed: 15,
        usd: 4.08,
    },
    {
        item: "A one-day warterpark ticket (adult)",
        aed: 290,
        usd: 78.97,
    },
    {
        item: "A cup of coffee",
        aed: 18,
        usd: 4.9,
    },
    {
        item: "A small bottle of water",
        aed: 1.5,
        usd: 0.41,
    },
    {
        item: "A Dubai Metro one-day standard pass (adult)",
        aed: 20,
        usd: 5.45,
    },
];

const CostComparison = () => {
    return (
        <section className="container mx-auto px-4 py-10">
            <h2 className="text-[32px] font-[500] mb-2">Cost comparisons</h2>
            <p className="text-[16px] font-[300] text-[#505050] mb-6">
                A few reference points for your spending in Dubai.
            </p>

            <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-1">
                    <thead>
                        <tr className="text-left text-sm font-medium border-b">
                            <th className="py-2 pr-4">
                                ITEM
                                <br />
                                (GUIDE PRICE)
                            </th>
                            <th className="py-2 px-4">
                                DIRHAMS
                                <br />
                                (AED)
                            </th>
                            <th className="py-2 px-4">
                                US DOLLARS
                                <br />
                                (USD)
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {costData.map((row, idx) => (
                            <tr
                                key={idx}
                                className={idx % 2 !== 0 ? "bg-gray-100" : ""}
                            >
                                <td className="py-3 pr-4">{row.item}</td>
                                <td className="py-3 px-4">{row.aed}</td>
                                <td className="py-3 px-4">{row.usd}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default CostComparison;
