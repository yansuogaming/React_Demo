import { faMinus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FAQ = () => {
    return (
        <section className="container mx-auto">
            <h2>FAQs</h2>
            <hr />
            <div className="grid grid-cols-2 gap-[30px]">
                <div>
                    <div className="flex justify-between">
                        <h3>What are the must-visit attractions in Hanoi?</h3>
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ