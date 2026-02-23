import { useState } from "react"

export const AccordionItem = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div id="accordion-item" className={isOpen ? 'active' : 'default'}>
          <div className="accordion-header" onClick={handleIsOpen}>
            <h3 className={isOpen ? 'question-active' : null}>{question}</h3>
          </div>

          {
            isOpen &&
            <div className="accordion-content">
                <p>{answer}</p>
            </div>
          }
        </div>
    ) 
}